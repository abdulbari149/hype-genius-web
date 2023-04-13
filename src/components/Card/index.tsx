import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLElement> {
	as?: React.ElementType
	ref?: React.MutableRefObject<HTMLElement | null>
}
const Card: React.FC<CardProps> = ({
	as = 'div',
	children,
	className = '',
	ref = undefined,
	...props
}) => {
	return React.createElement<Omit<CardProps, 'as'>>(
		as,
		{
			...props,
			ref,
			className:
				'bg-white shadow-[0_4px_59px_0px_rgba(50, 50, 71, 0.06),0_4px_103px_0px_rgba(50, 50, 71, 0.01)] ' +
				className,
		},
		children,
	)
}

export default Card
