import React, { type PropsWithChildren } from "react";
import Logo from "@/assets/logos/hype-genius-logo-with-text.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
const poppins = Poppins({
	weight: "500",
	subsets: ["latin"],
});
interface AuthLayoutProps extends PropsWithChildren {
	title: string | React.ReactNode;
	subTitle: string;
}

const Layout: React.FC<AuthLayoutProps> = ({ title, subTitle, children }) => {
	return (
		<div
			className="flex h-screen w-screen overflow-hidden"
			style={poppins.style}
		>
			<div className="bg-[#EF539E]  w-1/2 h-screen"></div>
			<div className="bg-[#F2F6FA] flex flex-col py-[50px] items-center gap-5 w-1/2 h-screen ">
				<div className="">
					<Image src={Logo} width={250} alt="logo" />
				</div>
				<p
					className="text-center font-bold text-[35px] max-w-[560px] break-words"
					style={{ wordBreak: "break-word" }}
				>
					{title}
				</p>
				<p className="text-md font-light">{subTitle}</p>
				{children}
			</div>
		</div>
	);
};

export default Layout;
