import React, { type PropsWithChildren } from "react";
import Logo from "@/assets/logos/hype-genius-logo-with-text.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import AuthRoutes from "../Routes/AuthRoutes";
const poppins = Poppins({
	weight: "500",
	subsets: ["latin"],
});
interface AuthLayoutProps extends PropsWithChildren {
	title: string | React.ReactNode;
	subTitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
	title,
	subTitle,
	children,
}) => {
	return (
		<AuthRoutes>
			<div
				className="grid w-full h-screen grid-cols-5 overflow-hidden max-w-screen"
				style={poppins.style}
			>
				<div className="bg-[#EF539E] h-[100%] min-h-screen flex flex-col static col-span-2 py-[100px]">
					<div className="grid flex-1 w-full place-content-center">
						<Image src={"/next.svg"} alt="ext" width={500} height={500} />
					</div>

					<div className="mt-auto mx-auto text-center text-[45px] font-semibold ">
						<p className="text-white">Leverge the power of</p>
						<p className="text-black rounded-[10px] bg-[#FFDE2E] px-[40px] py-1 w-fit text-center">
							influencer marketing!
						</p>
					</div>
				</div>
				<div className="bg-[#F2F6FA] flex flex-col col-span-3 items-center gap-5 h-full justify-center overflow-y-scroll">
					<div className="">
						<Image src={Logo} width={250} alt="logo" />
					</div>
					<p
						className="text-center font-bold text-[35px] max-w-[560px] break-words"
						style={{ wordBreak: "break-word" }}
					>
						{title}
					</p>
					<p className="text-[17px] font-normal py-2">{subTitle}</p>
					{children}
				</div>
			</div>
		</AuthRoutes>
	);
};

export default AuthLayout;
