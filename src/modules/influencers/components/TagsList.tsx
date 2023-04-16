import React, { useState } from 'react'
import Tag from '@/components/Tag'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import { SketchPicker } from 'react-color'
import { Tags } from '../core/types'

type Props = {
	tags: Tags
	setTags: React.Dispatch<React.SetStateAction<Tags>>
}
const TagsList: React.FC<Props> = ({ tags, setTags }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [showColorPicker, setShowColorPicker] = useState(false)

	const [color, setColor] = useState('#EF539E')
	const [tag, setTag] = useState('')

	const toggleEditing = () => {
		setIsEditing((prevIsEditing) => !prevIsEditing)
	}

	const toggleColorPicker = () => {
		setShowColorPicker((prevShow) => !prevShow)
	}

	const activateTag = (id: number) => {
		setTags((tagList) => {
			return tagList.map((tag) => {
				if (tag.id === id) {
					return {
						...tag,
						active: true,
					}
				}
				return {
					...tag,
					active: false,
				}
			})
		})
	}

	const removeTag = (id: number) => {
		setTags((tagList) => {
			return tagList.filter((tag) => tag.id !== id)
		})
	}

	const handleClick = () => {
		if (tag === '' || color === '') {
			return setIsEditing(false)
		}

		// TODO: add tag
		setTags((tagList) => {
			const id = tagList.length === 0 ? 1 : tagList[tagList.length - 1].id + 1
			return [...tagList, { id, text: tag, color: color, active: false }]
		})
		setTag('')
		setColor('#EF539E')
		setIsEditing(false)
		setShowColorPicker(false)
	}

	return (
		<div className="grid grid-rows-[30px_200px] grid-flow-row gap-2">
			<h3 className="text-[#272830] text-[18px] font-[600]">Tags</h3>

			<div
				className="grid grid-flow-col grid-rows-4 gap-2"
				style={{
					gridTemplateColumns: 'repeat(auto-fit, auto)',
					gridAutoColumns: '180px',
				}}
			>
				{tags.map((tag) => (
					<div
						key={tag.id}
						className={`flex items-center min-w-[160px] gap-2 cursor-pointer`}
						onClick={() => activateTag(tag.id)}
					>
						{isEditing && (
							<AiOutlineClose
								size={15}
								onClick={() => removeTag(tag.id)}
								style={{ color: '#f51818' }}
							/>
						)}
						<Tag
							color={tag.color}
							text={tag.text}
							className="w-fit text-[15px]"
						/>
						{tag.active ? <AiOutlineCheck size={15} /> : null}
					</div>
				))}
				<div className={`space-y-2 ${isEditing ? 'ml-5' : ''}`}>
					<button
						className="w-[170px] text-[15px] pl-2 text-left text-[#EF539E] cursor-pointer"
						onClick={toggleEditing}
					>
						{isEditing ? '+ Add Tags' : '+ Add /  Remove  Tags'}
					</button>
					{isEditing ? (
						<div className="flex items-center gap-3 relative">
							<input
								name="tag"
								value={tag}
								onChange={(e) => setTag(e.target.value)}
								type="text"
								style={{ backgroundColor: color }}
								className={`px-3 py-2 max-w-[120px] w-fit text-[15px] rounded-xl focus-within:outline-none focus:outline-none hover:outline-none`}
							/>
							<Image
								onClick={toggleColorPicker}
								src={require('@/assets/icons/color-picker.png')}
								width={22}
								height={22}
								alt="color picker"
								className="cursor-pointer"
							/>
							<button
								className="w-[170px] text-[15px] text-left text-[#EF539E] cursor-pointer"
								onClick={handleClick}
							>
								{tag === '' || color === '' ? 'Cancel' : 'Done'}
							</button>
							{showColorPicker && (
								<div className="absolute top-[120%] -right-[80%] pb-10">
									<SketchPicker
										color={color}
										onChangeComplete={(color) => {
											setColor(color.hex)
										}}
										width={'150px'}
									/>
								</div>
							)}
						</div>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default TagsList
