import React from "react";
import DateSelector from "./DateSelector";

const ReportsHeader = () => {
	return (
		<>
			<h1 className="text-[#272830] text-[18px] font-500">
				Please select the data you would like to export
			</h1>
			<div className="flex items-center gap-3">
				<p className="text-[15px] font-light">I would like to view</p>
				<DateSelector />
				<p className="text-[15px] font-light">From</p>
				<DateSelector />
				<button className="text-white bg-[#EF539E] px-3 py-2 shadow-lg rounded-lg text-[13px] ml-3">
					Export
				</button>
			</div>
		</>
	);
};

export default ReportsHeader;
