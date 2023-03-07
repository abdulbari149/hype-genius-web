import Image from "next/image";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscPinned } from "react-icons/vsc";
const notesData = [
	{
		id: 1,
		pinned: true,
		note: "New Follow - up meeting: Discuss new contract",
		date: "Jan 22, 2023",
	},
	{
		id: 2,
		pinned: false,
		note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id. Morbi non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Turpis egestas integer eget aliquet nibh praesent.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id. Morbi non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Turpis egestas integer eget aliquet nibh praesent. Lorem.",
		date: "Jan 22, 2023",
	},
];
const Activities = () => {
	const [isAddNote, setIsAddNote] = useState(false);
	const [notes, setNotes] = useState(notesData);
	const [data, setData] = useState({
		pinned: false,
		note: "",
	});
	const addNote = () => {
		setNotes((prevNotes) => [
			...prevNotes,
			{ id: prevNotes.length + 1, date: "Jan 22, 2023", ...data },
		]);
		setIsAddNote(false);
	};

	const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
	};

	const sortedNotes = notes.sort((a, b) => Number(b.pinned) - Number(a.pinned));
	return (
		<div className="flex flex-col w-full">
			<p className="text-[18px] text-[#272830] font-[600]">Activities</p>
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
				{isAddNote ? (
					<form
						onSubmit={() => addNote()}
						className="flex flex-col w-full my-[20px]"
					>
						<textarea
							value={data.note}
							onChange={handleChange}
							name="note"
							cols={10}
							rows={3}
							className="w-full outline-none border-1 border-slate-600 bg-[#EDF1F5] px-6 py-4 w-full rounded-xl"
						></textarea>
						<div className="flex flex-row items-center justify-between gap-2">
							<div className="flex items-center gap-1 px-2 py-3">
								<input
									checked={data.pinned}
									name="pinned"
									onChange={(e) =>
										setData((prevData) => ({
											...prevData,
											pinned: e.target.checked,
										}))
									}
									type="checkbox"
									id="pinCheckbox"
								/>
								<label htmlFor="pinCheckbox" className="text-[15px]">
									Pin Note
								</label>
							</div>
							<button
								type="submit"
								className="text-[13px] text-center flex gap-1 items-center px-7 py-2 rounded-xl w-fit mt-[5px] self-end ml-auto bg-[#ECF0F4]"
							>
								Add
							</button>
						</div>
					</form>
				) : null}
				{sortedNotes.map((note) => {
					return (
						<div
							key={note.id}
							className={`relative ${
								note.pinned ? "bg-[#A3F0FB]" : "bg-[#EDF1F5]"
							} p-6 w-full rounded-xl`}
						>
							<div className="absolute top-3 right-3">
								<VscPinned
									width={10}
									className="rotate-45 text-[#191a1f] opacity-60"
								/>
							</div>
							<p className="absolute right-3 bottom-3 text-[10px] text-[#191a1f] opacity-60">
								{note.date}
							</p>
							<p className="text-[14px] text-[#272830]">{note.note}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Activities;
