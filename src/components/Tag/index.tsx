import { TagType } from "@/modules/influencers/core/types";
import React from "react";

const Tag: React.FC<TagType> = ({ title, color }) => {
	return (
		<span className="px-4 py-2 rounded-xl text-[12px]" style={{ backgroundColor: color }}>
			{title}
		</span>
	);
};

export default Tag;
