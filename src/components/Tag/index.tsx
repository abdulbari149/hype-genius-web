import React from "react";

type TagTypes = "danger" | "success";

interface TagsProps extends React.HtmlHTMLAttributes<HTMLElement> {
	as?: "div" | "p" | "button" | "a" | "section" | "main" | "header" | "span";
	text: string;
	tagType: TagTypes;
}

const tagColors: Record<TagTypes, string> = {
	danger: "bg-[#FFCBD7]",
	success: "bg-[#CAFFA0]",
};
const Tag: React.FC<TagsProps> = ({
	as = "div",
	text,
	tagType,
	className = "",
	...props
}) => {
	const rootElement = React.createElement(
		as,
		{ ...props, className: `${className} ${tagColors[tagType]} px-4 py-2 rounded-[14px]` },
		text
	);
	return rootElement;
};

export default Tag;
