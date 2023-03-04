import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface AuthButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	content: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ content, ...props }) => {
	return (
		<button
			{...props}
			className="my-[20px] text-white  flex items-center gap-2 justify-center px-4 py-2 bg-pink-500  rounded-xl"
		>
			<span className="font-semibold text-lg">{content}</span>
			<AiOutlineArrowRight size={18} />
		</button>
	);
};

export default AuthButton;
