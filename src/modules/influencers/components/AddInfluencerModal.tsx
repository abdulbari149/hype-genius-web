import Modal from "@/components/Modal";
import React from "react";
import Contract from "./Contract";
import TagsList from "./TagsList";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/core/constants";
import { BusinessApi } from "@/api/BusinessApi";

const { GET_RANDOM_URL } = QUERY_KEYS;

interface AddInfluencerModalProps {
	isOpen: boolean;
	handleClose: () => void;
}

const AddInfluencerModal: React.FC<AddInfluencerModalProps> = ({
	isOpen,
	handleClose,
}) => {

	const { data } = useQuery(GET_RANDOM_URL, {
		queryFn: BusinessApi.getURLToAddInfluencer,
	})

	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleClose}
			style={{ content: { maxWidth: "1200px", height: "90%", paddingInline: "50px" } }}
		>
			<div className="flex flex-col pt-[30px] space-y-[50px] w-full h-full">
				<h3 className="text-[#272830] text-[18px] font-[600] ">
					Add Influencer
				</h3>

				<div className="space-y-[10px]">
					<h3 className="text-[#272830] text-[18px] font-[600] ">
						Onboarding Link
					</h3>
					<div className="flex items-center gap-2">
						<p className="text-[#5C6FFF] w-fit cursor-pointer">
							hypegenius.com/randomlinkgen
						</p>
						<button className="bg-[#EF539E] px-4 py-1 rounded-xl text-white text-[15px]">
							Copy
						</button>
					</div>
				</div>

				<Contract />
				<TagsList />
				
			</div>
		</Modal>
	);
};

export default AddInfluencerModal;
