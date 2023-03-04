import Card from "@/components/Card";
import Image, { ImageProps } from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
	weight: "600",
	subsets: ["latin"],
});

interface AnalyticsCardProps {
	title: string;
	icon: ImageProps["src"];
	value: string | number;
	containerClassName?: string;
	changeInPercent: number;
	variation: boolean;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = (props) => {
	const {
		title,
		icon,
		value,
		containerClassName = "",
		changeInPercent,
		variation,
	} = props;
	return (
		<Card
			className={
				"py-4 px-5 flex items-start gap-3 rounded-[20px] max-w-xl " +
				containerClassName
			}
		>
			<div className="flex flex-col h-full">
				<div className="flex flex-row gap-2">
					<p className="text-[16px] font-light -tracking-tight text-[#272830]">
						{title}
					</p>
					<span
						className={`text-[10px] px-2 rounded-[10px] ${
							variation ? "bg-[#CAFFA0]" : "bg-[#FFCBD7]"
						} py-1 h-[24px]`}
					>
						{variation ? "+" : "-"}
						{""}
						{changeInPercent}
						{"%"}
					</span>
				</div>

				<p className="text-[26px] font-normal p-0 m-0" style={montserrat.style}>{value}</p>
			</div>

			<div className="pt-1 w-30 h-30">
				<Image src={icon} alt={title.toLowerCase()} />
			</div>
		</Card>
	);
};

export default AnalyticsCard;
