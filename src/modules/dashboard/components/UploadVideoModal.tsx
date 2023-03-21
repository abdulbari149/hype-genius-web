import { BusinessApi } from "@/api/BusinessApi";
import { VideosApi } from "@/api/VideosApi";
import Modal from "@/components/Modal";
import { Formik, FormikHelpers } from "formik";
import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { uploadVideoSchema } from "../core/schema";
import { UploadVideoData } from "../core/type";
import { toast } from "react-toastify";
import { handleError } from "@/modules/auth/core/utils";
import { QUERY_KEYS } from "../core/constants";

interface UploadVideoModalProps {
	isOpen: boolean;
	handleClose: () => void;
}

const UploadVideoModal: React.FC<UploadVideoModalProps> = ({
	isOpen,
	handleClose,
}) => {
	const [selectedBusiness, setSelectedBusiness] = useState(-1);

	const { data, isSuccess } = useQuery("business/all", {
		queryFn: BusinessApi.getAllBusiness,
		onSuccess(data) {
			setSelectedBusiness(data.data[0].id);
		},
	});
	const queryClient = useQueryClient();

	const uploadVideo = useMutation(QUERY_KEYS.UPLOAD_VIDEO, {
		mutationFn: VideosApi.createVideo,
		onSuccess(data) {
			toast.success<string>(data.message);
			queryClient.invalidateQueries(QUERY_KEYS.GET_VIDEOS);
		},
		onError(error, variables, context) {
			const message = handleError(error);
			toast.error<string>(message);
		},
	});

	async function onSubmit(
		values: UploadVideoData,
		formikHelpers: FormikHelpers<UploadVideoData>
	) {
		if (selectedBusiness === -1) {
			toast.error<string>("select any business from the given list");
		}
		handleClose()
		formikHelpers.setSubmitting(true);
		await uploadVideo.mutateAsync({ ...values, businessId: selectedBusiness });
		formikHelpers.setSubmitting(false);
	}

	return (
		<Modal isOpen={isOpen} handleClose={handleClose}>
			<div className="flex flex-col pt-[30px] space-y-[50px] w-full h-full">
				<h3 className="text-[#272830] text-[18px] font-[600] ">New Video</h3>
				<Formik
					initialValues={{ title: "", link: "" }}
					validationSchema={toFormikValidationSchema(uploadVideoSchema)}
					onSubmit={onSubmit}
				>
					{(formik) => {
						return (
							<>
								<div className="flex flex-col gap-5 w-[70%]">
									<label
										className="text-[#272830] text-[18px] font-[600]"
										htmlFor="videoLink"
									>
										Video Title
									</label>
									<input
										value={formik.values.title}
										onChange={formik.handleChange}
										name="title"
										type="text"
										placeholder="Insert Link Here"
										className="font-normal px-4 py-3 bg-[#ECF0F4] rounded-xl px-1 text-[16px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
									/>
								</div>
								<div className="flex flex-col gap-5 w-[70%]">
									<label
										className="text-[#272830] text-[18px] font-[600]"
										htmlFor="videoLink"
									>
										Video Link
									</label>
									<input
										value={formik.values.link}
										onChange={formik.handleChange}
										name="link"
										type="text"
										placeholder="Insert Link Here"
										className="font-normal px-4 py-3 bg-[#ECF0F4] rounded-xl px-1 text-[16px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
									/>
								</div>
								<div className="space-y-8">
									<h3 className="text-[#272830] text-[18px] font-[600] ">
										This sponsored video corresponds to which business?{" "}
									</h3>

									<div className="flex flex-col gap-3">
										{isSuccess
											? data.data.map((business) => {
													return (
														<div
															onClick={() => setSelectedBusiness(business.id)}
															key={business.id}
															className={`bg-[#ECF0F4] flex flex-row gap-3 items-center cursor-pointer px-5 py-2 rounded-xl shadow-xs w-fit ${
																selectedBusiness === business.id
																	? "border-[3px] border-solid border-[#EF539E]"
																	: ""
															}`}
														>
															<Image
																src={require("@/assets/icons/businessman-icon.png")}
																alt="business man icon"
															/>
															{business.name}
														</div>
													);
											  })
											: null}
									</div>
								</div>
								<button
									type="submit"
									onClick={() => formik.handleSubmit()}
									className="absolute right-[50%] bottom-[20px] px-5 py-2 bg-[#EF539E] text-white rounded-xl"
								>
									Done
								</button>
							</>
						);
					}}
				</Formik>
			</div>
		</Modal>
	);
};

export default UploadVideoModal;
