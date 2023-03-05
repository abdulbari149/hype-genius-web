import Image, { ImageProps } from "next/image";
import React, { PropsWithChildren } from "react";
import HypeGeniusLogo from "@/assets/logos/hype-genius-logo-with-text.png";
import { useRouter } from "next/router";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
	const router = useRouter();
	return (
		<div className="bg-white flex flex-col items-center w-full max-w-[250px] h-full rounded-xl pt-[50px] pb-2 shadow-xl">
			<div className="mb-[60px]">
				<Image src={HypeGeniusLogo} alt="hype-genius-logo" />
			</div>

			<SidebarItem
				icon={require("@/assets/icons/dashboard-icon.png")}
				href="/dashboard"
				text="Dashboard"
			/>

			<SidebarItem
				icon={require("@/assets/icons/influencer-icon.png")}
				href="/influencer"
				text="Influencers"
			/>

			<SidebarItem
				icon={require("@/assets/icons/report-icon.png")}
				href="/report"
				text="Reports"
			/>

			<div className="w-full pb-[10px] pl-[16px] pr-[25px] mt-auto flex items-center justify-between">
				<button
					onClick={() => router.replace("/settings")}
					className={`flex items-start  px-4 py-3 rounded-xl ${
						router.route.startsWith("/settings") ? "bg-[#EEF2F7]" : ""
					}`}
				>
					<Image
						src={require("@/assets/icons/setting-icon.png")}
						alt="settings"
					/>
					<p className="text-[17px] text-[#1E2875] pl-3">Settings</p>
				</button>
				<button className="w-[25px] h-[25px]">
					<Image
						src={require("@/assets/icons/night-mode-icon.png")}
						alt="night mode"
					/>
				</button>
			</div>
		</div>
	);
};

export default Sidebar;
