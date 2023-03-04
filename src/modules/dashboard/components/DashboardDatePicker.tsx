import Selector from "@/components/Selector";
import React from "react";

const DashboardDatePicker = () => {
	return (
		<div className="flex items-center gap-3 my-[10px]">
			<Selector label="This Month" />
			<p className="text-[13px] font-light">Compare to</p>
			<Selector label="Previous Month"/>
		</div>
	);
};

export default DashboardDatePicker;
