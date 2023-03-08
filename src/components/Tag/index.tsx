import React from "react";

type TagTypes = "danger" | "success";

interface TagsProps extends React.HtmlHTMLAttributes<HTMLElement> {
	as?: "div" | "p" | "button" | "a" | "section" | "main" | "header" | "span";
	text: string;
	tagType?: TagTypes;
	color?: string;
}

const tagColors: Record<TagTypes, string> = {
	danger: "bg-[#FFCBD7]",
	success: "bg-[#CAFFA0]",
};
const Tag: React.FC<TagsProps> = ({
	as = "div",
	text,
	tagType,
	color,
	className = "",
	style = {},
	...props
}) => {
	const rootElement = React.createElement(
		as,
		{ ...props, className: `${className} ${tagType ? tagColors[tagType] : ""} px-4 py-2 rounded-[14px]`, style: color ? ({ backgroundColor: color, ...style  }) : style },
		text
	);
	return rootElement;
};

export default Tag;
