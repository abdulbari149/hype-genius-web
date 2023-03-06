import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
	as?: React.ElementType;
}
const Card: React.FC<CardProps> = ({
	as = "div",
	children,
	className = "",
	...props
}) => {
	return React.createElement<Omit<CardProps, "as">>(
		as,
		{
			...props,
			className: "bg-white shadow-[0_4px_59px_0px_rgba(50, 50, 71, 0.06),0_4px_103px_0px_rgba(50, 50, 71, 0.01)] " + className,
		},
		children
	);
};

export default Card;
