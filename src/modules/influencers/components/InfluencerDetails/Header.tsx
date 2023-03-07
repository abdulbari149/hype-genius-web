import React from "react";
import { InfluencerData } from "../../core/types";
import Tag from "@/components/Tag";

const Header: React.FC<{ influencer: InfluencerData }> = ({ influencer }) => {
	return (
		<div className="flex flex-row justify-between w-full">
			<div className="">
				<p className="text-[18px] text-[#272830] font-[600]">Joe Rogan</p>
				<p className="text-[#697AFF] text-[15px]">joerogan@gmail.com</p>
				<p className="text-[15px] font-normal">514-333-1789</p>
			</div>

			<div className="space-y-2">
				<Tag title="Partner" color="#7187FB80" />

				<div className="flex items-center gap-3">
					<div className="">
						<span className="text-[15px] text-[#21A400] font-[500]">
							${parseFloat(influencer?.currentDeal?.perVideo ?? "0").toFixed(2)}
						</span>
						/
						<span className="text-[12px] font-normal text-[#000000]">
							video
						</span>
					</div>
					<span className="font-normal">|</span>
					<div className="">
						<span className="text-[15px] text-[#21A400] font-[500] tracking-[1px]">
							{influencer?.currentDeal?.perMonth?.toUpperCase()}
						</span>
						/<span className="text-[12px] font-normal text-[#000000]">mo</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
