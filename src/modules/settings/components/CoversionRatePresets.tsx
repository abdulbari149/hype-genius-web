import React, { useEffect, useState } from 'react'
import Downshift from 'downshift'
import { AiOutlineDown } from 'react-icons/ai'

const items = [
	{ label: 'Low 0.03%', value: 0.03, color: '#54A753ED' },
	{ label: 'Medium 0.07%', value: 0.07, color: '#001CFF80' },
	{ label: 'High 0.11%', value: 0.11, color: '#FF6D6D' },
]

type Props = {
	value: number | undefined | null
	defaultValue: number | undefined | null
	setConversionRate: (value: number) => void
}

const CoversionRatePresets: React.FC<Props> = ({
	defaultValue,
	setConversionRate,
}) => {
	const [selectedItem, setSelectedItem] = useState<(typeof items)[0] | null>(
		null,
	)

	useEffect(() => {
		const item = items.find((i) => i.value === defaultValue)
		if (!item) {
			setSelectedItem(null)
			return
		}
		setSelectedItem(item)
	}, [defaultValue])

	return (
		<Downshift
			selectedItem={selectedItem}
			onChange={(selectedItem) => {
				if (
					selectedItem &&
					typeof selectedItem === 'object' &&
					'value' in selectedItem &&
					!!selectedItem?.value &&
					typeof selectedItem.value === 'number'
				) {
					setConversionRate(selectedItem.value)
					setSelectedItem(selectedItem)
				}
			}}
			itemToString={(item) => (item ? '' + item.label : '')}
		>
			{({
				getInputProps,
				getItemProps,
				getMenuProps,
				isOpen,
				highlightedIndex,
				selectedItem,
				getRootProps,
				toggleMenu,
			}) => (
				<div className="max-w-[200px] w-full ml-3 relative">
					<div
						onClick={toggleMenu}
						{...getRootProps({}, { suppressRefError: true })}
						className="flex bg-[#EAEEF3] items-center w-full rounded-lg pl-[15px] pr-3 py-2 opacity-70 "
					>
						<input
							{...getInputProps({
								className: 'text-[#27283080] bg-transparent flex-1 w-[100px]',
							})}
							disabled
							placeholder="Select"
						/>
						<AiOutlineDown
							className={`text-[#27283080] ${
								isOpen ? 'rotate-180' : 'rotate-0'
							}`}
							size={16}
						/>
					</div>
					<ul
						{...getMenuProps({
							className:
								'bg-[#EAEEF3] -translate-y-[5px] last:rounded-lg absolute w-full',
						})}
					>
						{isOpen
							? items.map((item, index) => (
									<li
										key={item.label}
										{...getItemProps({
											key: item.label,
											index,
											item,
											style: {
												padding: '8px 15px',
												opacity: 0.7,
												color: item.color,
												backgroundColor:
													highlightedIndex === index ? '#FFFFFF' : '#EAEEF3',
												fontWeight: selectedItem === item ? 'bold' : 'normal',
											},
										})}
									>
										{item.label}
									</li>
							  ))
							: null}
					</ul>
				</div>
			)}
		</Downshift>
	)
}

export default CoversionRatePresets
