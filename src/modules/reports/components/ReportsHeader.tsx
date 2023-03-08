import React from "react";
import Selector, { type Option } from "@/components/Selector";

const options = (defaultOptions: Array<Option>) => [
	{
		id: 5,
		value: "full-reports",
		label: "Full Report",
	},
	...defaultOptions,
];

const ReportsHeader = () => {
	return (
		<>
			<h1 className="text-[#272830] text-[18px] font-500">
				Please select the data you would like to export
			</h1>
			<div className="flex items-center gap-3">
				<p className="text-[15px] font-light">I would like to view</p>
				<Selector type="time" options={options} />
				<p className="text-[15px] font-light">From</p>
				<Selector type="time" options={options} />
				<button className="text-white bg-[#EF539E] px-3 py-2 shadow-lg rounded-lg text-[13px] ml-3">
					Export
				</button>
			</div>
		</>
	);
};

export default ReportsHeader;
