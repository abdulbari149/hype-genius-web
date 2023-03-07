import Change from "@/components/Change";
import React from "react";
import DateSelector from "./DateSelector";

const Metrics = () => {
	return (
		<div className="flex flex-col w-full">
			<div className="flex items-center gap-2 mb-[3px]">
				<p className="text-[18px] text-[#272830] font-[600]">Metrics</p>

				<DateSelector />

				<p className="font-light text-[12px] px-1">Compare to</p>

        <DateSelector />
			</div>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>

			<div className="grid gap-x-4 gap-y-5 mt-[15px] w-full grid-rows-2 grid-cols-[180px_repeat(2,1fr)]">
				<div className="">
					<p className="">
						Total Spent:
						<Change variant="decrease">+20.0% Over</Change>
					</p>
					<p className="text-[#1C921A] text-[16px]">$1200.00</p>
				</div>
				<div className="">
					<p className="">
						Budget:
						<Change variant="increase">+50.0%</Change>
					</p>
					<p className="text-[#1C921A] text-[16px]">$1000</p>
				</div>
				<div className="flex flex-col">
					<div>
						<p>Overall Score</p>
					</div>
					<div className="flex flex-row items-center gap-2">
						<span className="rounded-full bg-[#F3EA02] w-[20px] h-[20px] inline-block"></span>
						<span className="text-[16px] text-[#272830]">Gold | 8.63</span>
					</div>
				</div>
				<div>
					<p>
						Uploads:
						<Change variant="netural">0.0%</Change>
					</p>
					<p className="text-[#3BACFE] text-[16px]">4</p>
				</div>
				<div>
					<p>
						Views:
						<Change variant="increase">+13%</Change>
					</p>
					<p className="text-[#3BACFE] text-[16px]">128,000</p>
				</div>
				<div>
					<p>
						ROAS:
						<Change variant="decrease">-5%</Change>
					</p>
					<p className="text-[#3BACFE] text-[16px]">6.23</p>
				</div>
			</div>
		</div>
	);
};

export default Metrics;
