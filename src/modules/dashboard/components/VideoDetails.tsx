import Card from "@/components/Card";
import Close from "@/components/Close";
import React, { useMemo, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscPinned } from "react-icons/vsc";
import { TiEdit } from "react-icons/ti";
const notesData = [
	{
		id: 1,
		note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id. Morbi non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Turpis egestas integer eget aliquet nibh praesent.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor leo a diam sollicitudin tempor id. Morbi non arcu risus quis varius quam quisque id diam. Enim praesent elementum facilisis leo vel fringilla est. Turpis egestas integer eget aliquet nibh praesent. Lorem.",
		date: "Jan 22, 2023",
	},
];

interface Props {
	handleClose: () => void
}

const VideoDetails: React.FC<Props> = ({ handleClose }) => {
	const [editPaypalEmail, setEditPaypalEmail] = useState(false);
	const [paypalEmail, setPaypalEmail] = useState("coolemail@gmail.com");
	const [isAddNote, setIsAddNote] = useState(false);
	const [notes, setNotes] = useState(notesData);
  const [note, setNote] = useState("")
	const addNote = () => {
		setNotes((prevNotes) => [
			...prevNotes,
			{ id: prevNotes.length + 1, date: "Jan 22, 2023", note },
		]);
		setIsAddNote(false);
	};

	const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		setNote(e.target.value);
	};

	return (
		<Card
			className="relative flex flex-col items-center w-full h-full col-span-3 gap-4 overflow-hidden rounded-xl"
			style={{
				boxShadow:
					"0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)",
			}}
		>
			<Close onClose={handleClose} />
			<div className="max-w-md my-[50px] flex flex-col gap-4">
				<div className="space-y-1">
					<p className="text-[17px] text-[#272830] font-[500]">
						New Video Link
					</p>
					<div className="px-5 py-2 rounded-xl text-[#697AFF] text-[13px] bg-[#CDCDCD80]">
						https://www.youtube.com/channel/UCzQUP1qoWDoEbmsQxvdjxgQ
					</div>
				</div>

				<div className="flex flex-col">
					<p className="text-[17px] text-[#272830] font-[500]">PayPal Email</p>
					<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>
					<div className="flex items-center gap-6 mt-3">
						{editPaypalEmail ? (
							<>
								<input
									className="bg-[#EDF1F5] text-[15px] hover:outline-none focus-within:outline-none focus:outline-none out-of-range: rounded-xl opacity-60 px-3 py-2 max-w-md"
									value={paypalEmail}
									onChange={(e) => setPaypalEmail(e.target.value)}
								/>
								<button
									onClick={() => setEditPaypalEmail(false)}
									className="px-3 py-2 text-[13px] text-white rounded-xl bg-[#EF539E]"
								>
									Submit
								</button>
							</>
						) : (
							<>
								<p className="text-[15px] text-[#272830] font-normal">
									{paypalEmail}
								</p>
								<TiEdit
									className="cursor-pointer"
									onClick={() => setEditPaypalEmail(true)}
									size={18}
								/>
							</>
						)}
					</div>
				</div>

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
						{isAddNote ? (
							<form
								onSubmit={() => addNote()}
								className="flex flex-col w-full my-[20px]"
							>
								<textarea
									value={note}
									onChange={handleChange}
									name="note"
									cols={10}
									rows={3}
									className="w-full outline-none border-1 border-slate-600 bg-[#EDF1F5] px-6 py-4 w-full rounded-xl"
								></textarea>
								<div className="flex flex-row items-center justify-between gap-2">
									<button
										type="submit"
										className="text-[13px] text-center flex gap-1 items-center px-7 py-2 rounded-xl w-fit mt-[5px] self-end ml-auto bg-[#ECF0F4]"
									>
										Add
									</button>
								</div>
							</form>
						) : null}
						{notes.map((note) => {
							return (
								<div
									key={note.id}
									className={`relative bg-[#EDF1F5] px-6 py-7 w-full rounded-xl`}
								>
									<p className="absolute right-3 bottom-3 text-[10px] text-[#191a1f] opacity-60">
										{note.date}
									</p>
									<p className="text-[14px]  text-[#272830]">{note.note}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default VideoDetails;
