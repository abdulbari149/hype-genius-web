import React from "react";
import DateSelector from "./DateSelector";

const uploads = [
	{
		id: 1,
		date: {
			year: "2023",
			day: "22",
			month: "Jan",
		},
		link: "https://www.youtube.com/watch?v...",
		amount: 300,
		views: 20000,
	},
	{
		id: 2,
		date: {
			year: "2023",
			day: "22",
			month: "Jan",
		},
		link: "https://www.youtube.com/watch?v...",
		amount: 300,
		views: 20000,
	},
	{
		id: 3,
		date: {
			year: "2023",
			day: "22",
			month: "Jan",
		},
		link: "https://www.youtube.com/watch?v...",
		amount: 300,
		views: 20000,
	},
  {
		id: 4,
		date: {
			year: "2023",
			day: "22",
			month: "Jan",
		},
		link: "https://www.youtube.com/watch?v...",
		amount: 300,
		views: 20000,
	},
];

const Uploads = () => {
	return (
		<div className="flex flex-col w-full">
			<div className="flex items-center gap-2 mb-[3px]">
				<p className="text-[18px] text-[#272830] font-[600]">Uploads</p>
				<DateSelector />
			</div>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>

			<div className="flex flex-col gap-1 mt-[10px]">
				{uploads.map((upload) => {
					return (
						<div
							key={upload.id}
							className="flex flex-row items-center justify-between"
						>
							<div className="text-[#272830]">
								<span className="text-[17px] font-500">
									{upload.date.month} {upload.date.day},
								</span>
								<span className="text-[13px] font-300 px-[3px]">
									{upload.date.year}
								</span>
							</div>

							<p className="text-[13px] text-[#272830]">{upload.link}</p>
							<p className="text-[17px] text-[#1C921A]">${upload.amount}</p>
							<div className="flex items-center gap-1">
								<span className="text-[17px] text-[#3BACFE]">{upload.views.toLocaleString("en-US")}</span>
                <span className="text-[11px] text-[#272830]">Views</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Uploads;
