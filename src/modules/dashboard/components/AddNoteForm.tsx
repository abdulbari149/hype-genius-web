import { Formik } from "formik";
import React from "react";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { addNoteSchema } from "../core/schema";
import { VideosApi } from "@/api/VideosApi";
import { handleError } from "@/modules/auth/core/utils";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { AddNoteData } from "../core/type";
import { AppState } from "@/store";
import { useSelector } from "react-redux";
import { QUERY_KEYS } from "@/core/constants";

const { ADD_NOTE, GET_NOTES } = QUERY_KEYS;

const initialState: AddNoteData = { body: "" };

type Props = {
	closeAfterSubmit: () => void;
};

const AddNoteForm: React.FC<Props> = ({ closeAfterSubmit }) => {
	const videoId = useSelector<AppState, number | null>(
		(state) => state.dashboard.videoId
	);

	const queryClient = useQueryClient()

	const addNoteMutation = useMutation(ADD_NOTE, {
		mutationFn: (data: AddNoteData) => {
			if (videoId === null || isNaN(videoId))
				throw new Error("Invalid video id. Please selecte an uploaded video");
			return VideosApi.addNote(videoId, data);
		},
		onSuccess(data, variables, context) {
			toast.success(data.message);
			queryClient.invalidateQueries(`${videoId}/${GET_NOTES}`)
		},
		onError(error, variables, context) {
			const message = handleError(error);
			toast.error(message);
		},
		onSettled() {
			closeAfterSubmit();
		},
	});

	const onSubmit = async (values: AddNoteData) => {
		await addNoteMutation.mutateAsync(values);
	};
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
							className="w-full outline-none border-1 border-slate-600 bg-[#EDF1F5] px-6 py-4 w-full rounded-xl"
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
				);
			}}
		</Formik>
	);
};

export default AddNoteForm;
