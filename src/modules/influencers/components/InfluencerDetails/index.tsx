import Card from "@/components/Card";
import React, { useState } from "react";
import Close from "@/components/Close";
import FollowUp from "./FollowUp";
import Header from "./Header";
import Channel from "./Channel";
import Alert from "./Alert";
import Metrics from "./Metrics";
import Uploads from "./Uploads";
import Activities from "./Activities";
import EditInfluencerModal from "../EditInfluencerModal";
import { InfluencerData } from "../../core/types";

interface InfluencerDetailProps {
	selectedInfluencer: number;
	setSelectedInfluencer: React.Dispatch<React.SetStateAction<number | null>>;
}

const InfluencersDetail: React.FC<InfluencerDetailProps> = ({
	selectedInfluencer,
	setSelectedInfluencer,
}) => {
	const [isEditOpen, setIsEditOpen] = useState(false);

	function openIsEdit() {
		setIsEditOpen(true);
	}

	function closeIsEdit() {
		setIsEditOpen(false);
	}

	function handleClose() {
		setSelectedInfluencer(null);
		closeIsEdit();
	}

	const influencer: InfluencerData = {
		id: 1,
		influencer: { name: 'abdul basit', circle: false },
	};

	if (!influencer) return <></>;

	return (
		<Card
			className="relative flex flex-col items-center h-full col-span-3 gap-4 overflow-hidden rounded-xl"
			style={{
				boxShadow:
					"0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)",
			}}
		>
			<Close onClose={handleClose} />

			<div className="flex flex-col items-center h-full gap-6 px-[45px] mt-[50px] mb-[90px] overflow-y-scroll custom-scroll">
				<Header influencer={influencer} />
				<FollowUp />
				<Channel />
				<Alert />
				<Metrics />
				<Uploads />
				<Activities />
			</div>

			<span
				className="bg-[#F8FAFC] absolute bottom-5 inline-block w-full h-[120px]"
				style={{ filter: "blur(10px)" }}
			></span>
			<button onClick={openIsEdit} className="px-3 py-2 text-white bg-[#EF539E] absolute bottom-8 rounded-xl">
				Edit Info
			</button>

			<EditInfluencerModal isOpen={isEditOpen} handleClose={closeIsEdit} />
		</Card>
	);
};

export default InfluencersDetail;
