import React from "react";

const Channel: React.FC<{ link: string }> = ({ link }) => {
	return (
		<div className="flex flex-col w-full">
			<p className="text-[18px] text-[#272830] font-[600]">Channel Link</p>
			<p className="text-[15px] text-[#697AFF]">
				{link}
			</p>
		</div>
	);
};

export default Channel;
