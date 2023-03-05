import React from "react";

const SettingsOnboarding = () => {
	return (
		<div
			className="flex bg-[#FFFFFF]/50 rounded-lg w-full h-[120px] shadow-xl px-9 py-6"
			style={{
				boxShadow:
					"0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)",
			}}
		>
			<div>
				<p className="font-semibold ">Onboarding Link</p>
				<div className="flex gap-3 mt-4">
					<p className="text-[#5C6FFF] w-fit cursor-pointer">
						hypegenius.com/businessnamehere
					</p>
					<button className="bg-[#EF539E] w-[60px] h-[31px] rounded-xl px-2 text-white ml-4 ">
						Copy
					</button>
				</div>
			</div>
		</div>
	);
};

export default SettingsOnboarding;
