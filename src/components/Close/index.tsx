import Image from "next/image";
import React from "react";

interface CloseProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
	onClose: React.MouseEventHandler
}

const Close: React.FC<CloseProps> = ({ className = "", onClose, ...props }) => {
	return (
		<div
			onClick={onClose}
			className={`bg-[#e7e7e766] absolute right-0 rounded-xl cursor-pointer mx-4 my-3 block p-[10px] w-[35px] h-[35px] ${className}`}
			{...props}
		>
			<Image
				src={require("@/assets/icons/cancel-black-icon.png")}
				alt="close"
        width={25}
        height={25}
			/>
		</div>
	);
};

export default Close;
