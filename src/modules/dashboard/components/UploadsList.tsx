import Card from "@/components/Card";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
	weight: "500",
	style: "normal",
	subsets: ["greek"],
});

const UploadColumn = () => {
	return (
		<div className="gap-5 flex items-center h-max mb-6">
			<div className="flex flex-col max-w-[70%] w-full">
				<p className="text-[#344054] text-[15px]" style={inter.style}>
					Joe Rogan
					<span className="text-[12px] text-[#667085] pl-2">2 mints ago</span>
				</p>
				<p className="w-full text-[#667085] text-[15px] leading-[18px]">
					Jordan Peterson on How Psychedelic Experiences Could&apos;ve Shaped
					Religion
				</p>
			</div>
			<p className="max-w-[30%] w-full text-[17px]">652,000</p>
		</div>
	);
};

const data = Array(20).fill(0);
const UploadsList = () => {
	return (
		<Card className="flex-1 py-[25px] pl-[50px] w-full rounded-[15px]">
			<div className="gap-5 flex items-start mb-7">
				<p className="max-w-[70%] w-full text-[17px]">Uploads</p>
				<p className="max-w-[30%] w-full text-[17px]">Views</p>
			</div>
      {
        data.map((item, idx) => {
          return <UploadColumn key={idx} />
        })
      }
		</Card>
	);
};

export default UploadsList;
