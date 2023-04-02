import { VideosApi } from "@/api/VideosApi";
import { AppState } from "@/store";
import React from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { QUERY_KEYS } from "@/core/constants";
const { GET_NOTES } = QUERY_KEYS;

const NotesList = () => {
	const videoId = useSelector<AppState, number | null>(
		(state) => state.dashboard.videoId
	);

	const { data: notes } = useQuery(`${videoId}/${GET_NOTES}`, {
		queryFn: () => {
			if (videoId === null || isNaN(videoId))
				throw new Error("Invalid video id. Please selecte an uploaded video");
			return VideosApi.getNotes(videoId);
		},
		suspense: true,
	});

	return (
		<>
			{notes?.data?.map((note) => {
				return (
					<div
						key={note.id}
						className={`relative bg-[#EDF1F5] px-6 py-7 w-full rounded-xl`}
					>
						<p className="absolute right-3 bottom-3 text-[10px] text-[#191a1f] opacity-60">
							{note.createdAt ? new Date(note.createdAt).toISOString() : ""}
						</p>
						<p className="text-[14px]  text-[#272830]">{note.body}</p>
					</div>
				);
			})}
		</>
	);
};

export default NotesList;
