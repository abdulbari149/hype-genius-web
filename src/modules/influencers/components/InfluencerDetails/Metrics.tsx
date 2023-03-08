import Change from "@/components/Change";
import React from "react";
import Selector from "@/components/Selector";

const Metrics = () => {
	return (
		<div className="flex flex-col w-full">
			<div className="flex items-center gap-2 mb-[3px]">
				<p className="text-[18px] text-[#272830] font-[600]">Metrics</p>

				<Selector
					type="time"
					customClassName="bg-[#ECF0F4] pr-5 pl-3 mb-1 py-2 rounded-xl text-[13px]"
					style={{ backgroundPosition: "calc(100% - 8px) center" }}
				/>

				<p className="font-light text-[12px] px-1">Compare to</p>

				<Selector
				type="time"
					customClassName="bg-[#ECF0F4] pr-5 pl-3 mb-1 py-2 rounded-xl text-[13px]"
					style={{ backgroundPosition: "calc(100% - 8px) center" }}
				/>
			</div>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>

			<div className="grid gap-x-2 gap-y-5 mt-[15px] w-full xl:grid-cols-[180px_repeat(2,1fr)] lg:grid-cols-2">
				<div className="w-full ">
					<p className="flex flex-wrap w-full">
						Total Spent:
						<Change variant="decrease">+20.0% Over</Change>
					</p>
					<p className="text-[#1C921A] text-[16px]">$1200.00</p>
				</div>
				<div className="w-full">
					<p className="">
						Budget:
						<Change variant="increase">+50.0%</Change>
					</p>
					<p className="text-[#1C921A] text-[16px]">$1000</p>
				</div>
				<div className="flex flex-col w-full">
					<div>
						<p>Overall Score</p>
					</div>
					<div className="flex flex-row items-center gap-2">
						<span className="rounded-full bg-[#F3EA02] w-[20px] h-[20px] inline-block"></span>
						<span className="text-[16px] text-[#272830]">Gold | 8.63</span>
					</div>
				</div>
				<div className="w-full ">
					<p>
						Uploads:
						<Change variant="netural">0.0%</Change>
					</p>
					<p className="text-[#3BACFE] text-[16px]">4</p>
				</div>
				<div className="w-full ">
					<p>
						Views:
						<Change variant="increase">+13%</Change>
					</p>
					<p className="text-[#3BACFE] text-[16px]">128,000</p>
				</div>
				<div className="w-full ">
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
