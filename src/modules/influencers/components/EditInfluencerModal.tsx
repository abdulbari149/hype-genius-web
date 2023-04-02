import Modal from "@/components/Modal";
import React from "react";
import Contract from "./Contract";
import TagsList from "./TagsList";

interface EditInfluencerModalProps {
	isOpen: boolean;
	handleClose: () => void;
}

const EditInfluencerModal: React.FC<EditInfluencerModalProps> = ({
	isOpen,
	handleClose,
}) => {
	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleClose}
			style={{
				content: { maxWidth: "1200px", height: "90%", paddingInline: "50px" },
			}}
		>
			<div className="flex flex-col pt-[30px] space-y-[50px] w-full h-full">
				<h3 className="text-[#272830] text-[18px] font-[600] ">
					Edit Influencer Info
				</h3>

				<div className="grid w-full grid-cols-3 gap-[5%]">
					<div className="flex flex-col gap-5">
						<label
							className="text-[#272830] text-[18px] font-[600]"
							htmlFor="name"
						>
							Name
						</label>
						<input
							name="name"
							type="text"
              id="name"
							placeholder="joe shmoe"
							className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[13px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
						/>
					</div>
          <div className="flex flex-col gap-5">
						<label
							className="text-[#272830] text-[18px] font-[600]"
							htmlFor="email"
						>
							Email
						</label>
						<input
							name="email"
							type="text"
              id="joe shmoe"
							placeholder="joeshmoe@email.com"
							className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[13px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
						/>
					</div>
          <div className="flex flex-col gap-5">
						<label
							className="text-[#272830] text-[18px] font-[600]"
							htmlFor="phoneNumber"
						>
							Phone Number
						</label>
						<input
							name="phoneNumber"
							type="text"
              id="phoneNumber"
							placeholder="123 - 456 - 7890"
							className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[13px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
						/>
					</div>
          <div className="flex flex-col col-span-2 gap-5 mt-4">
						<label
							className="text-[#272830] text-[18px] font-[600]"
							htmlFor="channelLink"
						>
							Channel Link
						</label>
						<input
							name="channelLink"
							type="text"
              id="channelLink"
							placeholder="insert link"
							className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[13px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
						/>
					</div>
				</div>

				// <Contract />
				<TagsList />
			</div>
		</Modal>
	);
};

export default EditInfluencerModal;
