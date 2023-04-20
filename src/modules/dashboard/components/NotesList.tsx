import React from 'react'
import { useGetNoteList } from '../hooks/useGetNoteList'

const NotesList = () => {
	const { data: notes } = useGetNoteList()
	return (
		<>
			{notes?.data?.map((note) => {
				return (
					<div
						key={note.id}
						className={`relative bg-[#EDF1F5] px-6 py-7 w-full rounded-xl`}
					>
						<p className="absolute right-3 bottom-3 text-[10px] text-[#191a1f] opacity-60">
							{note.createdAt ? new Date(note.createdAt).toISOString() : ''}
						</p>
						<p className="text-[14px]  text-[#272830]">{note.body}</p>
					</div>
				)
			})}
		</>
	)
}

export default NotesList
