import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'

export type ItemIcon = {
	label: string
	value: React.ReactNode
}

type Props = {
	selectedIcon: Partial<ItemIcon>
	setSelectedIcon: React.Dispatch<React.SetStateAction<ItemIcon>>
	items: ItemIcon[]
}

const IconSelector: React.FC<Props> = ({
	selectedIcon,
	setSelectedIcon,
	items,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className="relative">
			<div
				className="flex items-center"
				onClick={() => setIsOpen((prevValue) => !prevValue)}
			>
				{selectedIcon.value}
				<AiOutlineDown
					className={`text-[#27283080] ${
						isOpen ? 'rotate-180' : 'rotate-0'
					} transition-all`}
					size={16}
				/>
			</div>

			{isOpen ? (
				<div className="absolute -translate-x-[15%] mt-1 bg-[#F7F9FB] rounded-md">
					{items.map((item) => {
						return (
							<div
								onClick={() => {
									setSelectedIcon(item)
									setIsOpen(false)
								}}
								className="px-1 pt-2 cursor-pointer last:pb-2 hover:bg-[#fff] first:rounded-t-md last:rounded-b-md"
								key={item.label}
							>
								{item.value}
							</div>
						)
					})}
				</div>
			) : null}
		</div>
	)
}

export default IconSelector
