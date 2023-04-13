import Selector from '@/components/Selector'
import Tag from '@/components/Tag'
import React, { useRef, useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'

const tags = [
	{ id: 1, text: 'Partner', color: '#7187FB80', active: true },
	{ id: 2, text: 'Lost Partner', color: '#FF2E2E80', active: false },
	{ id: 3, text: 'Emailed', color: '#FFDE2E80', active: false },
	{ id: 4, text: 'Onboarding', color: '#2EFF6880', active: false },
	{ id: 5, text: 'Affiliate Only', color: '#2EF2FF80', active: false },
]

const colors = ['#7187FB80', '#FF2E2E80', '#FFDE2E80', '#2EFF6880', '#2EF2FF80']
const TagsList = () => {
	const [size, setSize] = useState(3)
	const [color, setColor] = useState('#7187FB80')
	const colorSelectRef = useRef<HTMLSelectElement>(null)

	return (
		<div className="grid grid-rows-[30px_200px] grid-flow-row gap-2">
			<h3 className="text-[#272830] text-[18px] font-[600]">Tags</h3>

			<div
				className="grid grid-flow-col grid-rows-4 gap-2"
				style={{
					gridTemplateColumns: 'repeat(auto-fit, auto)',
					gridAutoColumns: '150px',
				}}
			>
				{tags.map((tag) => (
					<div key={tag.id} className="flex items-center gap-5">
						<Tag
							color={tag.color}
							text={tag.text}
							className="w-fit text-[15px]"
						/>
						{tag.active ? <AiOutlineCheck size={15} /> : null}
					</div>
				))}

				<p className="w-[170px] text-[15px] text-[#EF539E] cursor-pointer">
					{'+ Add /  Remove  Tags'}
				</p>
				<div className="flex gap-2">
					<input
						type="text"
						className="bg-[#ECF0F4] px-3 py-2 w-[100px] text-[15px] rounded-xl focus-within:outline-none focus:outline-none hover:outline-none"
					/>
				</div>
			</div>
		</div>
	)
}

export default TagsList
