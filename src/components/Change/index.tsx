import React from 'react'

type ChangeVariantType = 'increase' | 'decrease' | 'netural'

interface ChangeProps extends React.HtmlHTMLAttributes<HTMLElement> {
	children: React.ReactNode
	variant: ChangeVariantType
	as?: 'div' | 'p' | 'span'
}

const variantStyles: Record<ChangeVariantType, string> = {
	increase: 'text-[#224E00] bg-[#CAFFA0]',
	decrease: 'text-[#D80000]  bg-[#FFCBD7]',
	netural: 'text-[#272830] bg-[#DDDDDD]',
}

const Change: React.FC<ChangeProps> = ({
	as = 'span',
	variant,
	className = '',
	children,
	...props
}) => {
	const changeClasses = `text-[10px] px-2 py-1 rounded-xl ml-2 ${className} ${variantStyles[variant]}`
	return React.createElement(
		as,
		{ className: changeClasses, ...props },
		children,
	)
}

export default Change
