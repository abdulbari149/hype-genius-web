import Card from "@/components/Card";
import Close from "@/components/Close";
import React, { Suspense, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/core/constants";
import { VideosApi } from "@/api/VideosApi";
import PayPalEmail from "./PayPalEmail";
import AddNoteForm from "./AddNoteForm";
import NotesList from "./NotesList";

const { ADD_NOTE, GET_NOTES } = QUERY_KEYS;

const notesData = [
	{
		id: 1,
		note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id. Morbi non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Turpis egestas integer eget aliquet nibh praesent.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id. Morbi non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Turpis egestas integer eget aliquet nibh praesent. Lorem.",
		date: "Jan 22, 2023",
	},
];

interface Props {
	handleClose: () => void;
}

const cardStyles = {
	boxShadow:
		"0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)",
};

const VideoDetails: React.FC<Props> = ({ handleClose }) => {
	const [isAddNote, setIsAddNote] = useState(false);
	const videoLink = useSelector<AppState, string>(
		(state) => state.influencer.video?.link ?? ""
	);

	return (
		<Card
			style={cardStyles}
			className="relative flex flex-col items-center w-full h-full col-span-3 gap-4 overflow-hidden rounded-xl"
		>
			<Close onClose={handleClose} />
			<div className="max-w-md my-[50px] flex flex-col gap-4 w-full">
				<div className="space-y-1">
					<p className="text-[17px] text-[#272830] font-[500]">
						New Video Link
					</p>
					<div className="px-5 py-2 rounded-xl text-[#697AFF] text-[13px] bg-[#CDCDCD80]">
						{videoLink}
					</div>
				</div>

				<PayPalEmail />

				<div className="flex flex-col mt-[20px]">
					<p className="text-[17px] text-[#272830] font-[500]">Notes</p>
					<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>
					<div className="flex items-center justify-between my-2">
						<button
							onClick={() => setIsAddNote(true)}
							className="text-[13px] text-center flex gap-1 items-center px-3 py-2 rounded-xl bg-[#ECF0F4]"
						>
							<AiOutlinePlus size={13} /> Add Note
						</button>
						<p className="text-[13px]">View all</p>
					</div>

					<div className="flex flex-col gap-3 mb-[10px]">
						{isAddNote && (
							<AddNoteForm closeAfterSubmit={() => setIsAddNote(false)} />
						)}
						<NotesList />
					</div>
				</div>
			</div>
		</Card>
	);
};

export default VideoDetails;
