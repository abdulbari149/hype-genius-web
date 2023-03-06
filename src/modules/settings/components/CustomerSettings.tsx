import React, { useState } from "react";
import Image from "next/image";
import Card from "@/components/Card";

const CustomerSettings: React.FC<{}> = () => {
	const [selector, setSelector] = useState(false);

	const openSelector = () => {
		setSelector(true);
	};

	return (
		<Card
			className="bg-[#FFFFFF]/50  h-full w-full rounded-lg"
			style={{
				boxShadow:
					"0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)",
			}}
		>
			<div className="flex  items-center h-[100px]">
				<p className="px-9  font-normal">Default Currency</p>
				<button
					onClick={openSelector}
					className=" flex relative items-center gap-2 justify-center px-2 py-2 bg-[#EAEEF3] w-[79px] h-fit rounded-xl "
				>
					<span>CAD</span>
					<Image	
						src={require("@/assets/icons/downArrow.png")}
						alt="Down Arrow"
						width={10}
						className="mt-1"
					/>
				</button>
			</div>
			<div className="flex justify-start items-center h-[100px] pb-9">
				<p className="px-9 py-4 font-normal">
					Customer LTV(used to track ROAS)
				</p>
				<div className="flex items-center max-w-[150px]  gap-2 justify-center px-3 py-2  w-[110px] rounded-xl h-fit bg-[#EAEEF3] ">
					<span className="">$</span>
					<input
						placeholder="enter here"
						className="opacity-70 text-md w-full bg-[#EAEEF3] "
					/>
				</div>
			</div>
		</Card>
	);
};
export default CustomerSettings;
