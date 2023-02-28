import Image, { ImageProps } from "next/image";
import React, { PropsWithChildren } from "react";
import HypeGeniusLogo from "@/assets/logos/hype-genius-logo-with-text.png";
import { useRouter } from "next/router";
import Card from "./Card";

interface SidebarItemProps {
	href: string;
	text: string;
	icon: ImageProps["src"];
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, text, icon }) => {
	const router = useRouter();

	return (
		<button
			onClick={() => router.replace(href)}
			className={`flex items-start w-[190px] px-6 py-4 mb-3 ${
				router.route === href ? "bg-[#EEF2F7] rounded-lg shadow-xs" : ""
			}`}
		>
			<Image src={icon} alt={text.toLowerCase()} />
			<p
				className={`text-[17px] text-[#1E2875] pl-3 ${
					router.route === href ? "font-semibold" : ""
				}`}
			>
				{text}
			</p>
		</button>
	);
};

const Sidebar = () => {
	const router = useRouter();
	return (
		<Card className="flex flex-col items-center w-full max-w-[250px] h-full rounded-xl pt-[50px] pb-2">
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

			<div className="w-full pb-[15px] px-[25px] mt-auto flex items-center justify-between">
				<button
					onClick={() => router.replace("/setting")}
					className="flex items-start"
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
		</Card>
	);
};

export default Sidebar;
