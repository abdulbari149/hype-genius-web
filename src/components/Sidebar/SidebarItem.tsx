import Image, { ImageProps } from 'next/image'
import React from 'react'
import { useRouter } from 'next/router'

export interface SidebarItemProps {
	href: string
	text: string
	icon: ImageProps['src']
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, text, icon }) => {
	const router = useRouter()

	return (
		<button
			onClick={() => router.replace(href)}
			className={`flex items-start w-[190px] px-6 py-4 mb-3 ${
				router.route.startsWith(href) ? 'bg-[#EEF2F7] rounded-lg shadow-xs' : ''
			}`}
		>
			<Image src={icon} alt={text.toLowerCase()} />
			<p
				className={`text-[17px] text-[#1E2875] pl-3 ${
					router.route.startsWith(href) ? 'font-semibold' : ''
				}`}
			>
				{text}
			</p>
		</button>
	)
}

export default SidebarItem
