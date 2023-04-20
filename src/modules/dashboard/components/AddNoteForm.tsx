import { Formik } from 'formik'
import React from 'react'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { addNoteSchema } from '../core/schema'
import { AddNoteData } from '../core/type'
import { useAddNote } from '../hooks/useAddNote'

const initialState: AddNoteData = { body: '' }

type Props = {
	closeAfterSubmit: () => void
}

const AddNoteForm: React.FC<Props> = ({ closeAfterSubmit }) => {
	const addNote = useAddNote({
		onSettled() {
			closeAfterSubmit()
		},
	})

	const onSubmit = async (values: AddNoteData) => {
		await addNote.mutateAsync(values)
	}
	return (
		<Formik
			validationSchema={toFormikValidationSchema(addNoteSchema)}
			initialValues={initialState}
			onSubmit={onSubmit}
		>
			{(formik) => {
				return (
					<form
						onSubmit={formik.handleSubmit}
						className="flex flex-col w-full my-[20px]"
					>
						<textarea
							value={formik.values.body}
							onChange={formik.handleChange}
							name="body"
							cols={10}
							rows={3}
							className="w-full outline-none border-1 border-slate-600 bg-[#EDF1F5] px-6 py-4 rounded-xl"
						></textarea>
						{formik.errors.body && formik.touched.body && (
							<p className="text-red-400 px-2 pt-1 text-[13px]">
								{formik.errors.body}
							</p>
						)}
						<div className="flex flex-row items-center justify-between gap-2">
							<button
								type="submit"
								className="text-[13px] text-center flex gap-1 items-center px-7 py-2 rounded-xl w-fit mt-[5px] self-end ml-auto bg-[#ECF0F4]"
							>
								Add
							</button>
						</div>
					</form>
				)
			}}
		</Formik>
	)
}

export default AddNoteForm
