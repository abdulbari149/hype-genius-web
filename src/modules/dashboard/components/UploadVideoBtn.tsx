import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

type UploadVidoBtnProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const UploadVideoBtn: React.FC<UploadVidoBtnProps> = (props) => {
	return (
		<button
			{...props}
			className="px-3 py-2 flex h-fit items-center text-[13px] w-fit text-white bg-[#EF539E] rounded-xl"
		>
			<AiOutlinePlus size={15} />
			New Upload
		</button>
	)
}

export default UploadVideoBtn
