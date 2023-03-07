import Tag from "@/components/Tag";
import React from "react";

const Alert = () => {
	return (
		<div className="flex flex-col w-full">
			<p className="text-[18px] text-[#272830] font-[600]">Alert</p>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>
			<div className="flex flex-row items-center mt-2">
				<Tag title="New Video" color="#50EAFF80" />
				<p className="font-[600] text-[15px] text-[#272830] ml-6">
					Influencer uploaded a new video  | <span className="px-1 text-[#697AFF]">Click here</span>{" "}
				</p>
			</div>
		</div>
	);
};

export default Alert;
