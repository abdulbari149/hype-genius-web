import { NotesApi } from '@/api/NotesApi'
import { AppState } from '@/store'
import { Formik } from 'formik'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { CreateActivityData, createActivitySchema } from '../../core/schema'
import { QUERY_KEYS } from '@/core/constants'

const { ADD_ACTIVITY, GET_ACTIVITIES } = QUERY_KEYS

interface Props {
	onHide: () => void
}

const CreateActivityForm: React.FC<Props> = ({ onHide }) => {
	const businessChannelId = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)
	const queryClient = useQueryClient()
	const createActivity = useMutation(ADD_ACTIVITY, {
		mutationFn: async (data: CreateActivityData) => {
			if (!businessChannelId || businessChannelId === null) {
				throw new Error('Please selecteda an influencer before adding note')
			}
			return NotesApi.createActivity(businessChannelId, data)
		},
		async onSuccess(data) {
			onHide()
			await queryClient.invalidateQueries(
				`${GET_ACTIVITIES}/${businessChannelId}`,
			)
		},
	})

	const onSubmit = async (values: CreateActivityData) => {
		await createActivity.mutateAsync(values)
	}

	return (
		<Formik
			initialValues={{ body: '', pinned: false }}
			validationSchema={toFormikValidationSchema(createActivitySchema)}
			onSubmit={onSubmit}
		>
			{({ values, errors, handleChange, handleSubmit }) => (
				<form
					onSubmit={handleSubmit}
					className="flex flex-col w-full my-[20px]"
				>
					<textarea
						value={values.body}
						onChange={handleChange}
						name="body"
						cols={10}
						rows={3}
						className="w-full outline-none border-1 border-slate-600 bg-[#EDF1F5] px-6 py-4 rounded-xl"
					></textarea>
					<div className="flex flex-row items-center justify-between gap-2">
						<div className="flex items-center gap-1 px-2 py-3">
							<input
								checked={values.pinned}
								name="pinned"
								onChange={handleChange}
								type="checkbox"
								id="pinCheckbox"
							/>
							<label htmlFor="pinCheckbox" className="text-[15px]">
								Pin Note
							</label>
						</div>
						<div className="flex items-center gap-3">
							<button
								onClick={onHide}
								className="text-[13px] text-center flex gap-1 items-center px-7 py-2 rounded-xl w-fit mt-[5px] self-end ml-auto bg-[#ECF0F4]"
							>
								Close
							</button>
							<button
								type="submit"
								className="text-[13px] text-center flex gap-1 items-center px-7 py-2 rounded-xl w-fit mt-[5px] self-end ml-auto bg-[#ECF0F4]"
							>
								Add
							</button>
						</div>
					</div>
				</form>
			)}
		</Formik>
	)
}

export default CreateActivityForm
