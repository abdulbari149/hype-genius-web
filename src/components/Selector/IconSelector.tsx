import React from 'react'
import Select, { GroupBase, OptionProps, OptionsOrGroups } from 'react-select'
import Image from 'next/image'

type Option = { label: string; options: string[] }

const IconOption: React.FC<OptionProps<Option, boolean>> = (props) => {
	const { data, isDisabled } = props
	return !isDisabled ? (
		<Image src={require(`@/assets/icons/${data}`)} alt={`icon ${data}`} />
	) : null
}

const options: OptionsOrGroups<any, GroupBase<Option>> = [
	{ label: '', options: ['email-icon.png'] },
]

const IconSelector = () => {
	return (
		<Select
			isSearchable={false}
			isRtl={false}
			noOptionsMessage={({ inputValue }) => {
				console.log(inputValue)
				return (
					<Image
						src={require(`@/assets/icons/${inputValue}`)}
						alt={`icon ${inputValue}`}
					/>
				)
			}}
			className="border-0"
			options={options}
			components={{ Option: IconOption }}
			isMulti={false}
			defaultValue={options[0]}
			styles={{
				control(base) {
					return {
						...base,
						border: 'none',
						width: '40px',
						height: '40px',
					}
				},
			}}
		/>
	)
}

export default IconSelector
