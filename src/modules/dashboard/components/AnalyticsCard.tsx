import Card from '@/components/Card'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({
	weight: '600',
	subsets: ['latin'],
})

interface AnalyticsCardProps {
	title: string
	icon: ImageProps['src']
	value: string | number
	containerClassName?: string
	changeInPercent: number
	variation: boolean
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = (props) => {
	const {
		title,
		icon,
		value,
		containerClassName = '',
		changeInPercent,
		variation,
	} = props
	return (
		<Card
			className={
				'grid auto-cols-fr px-5 py-3 max-h-[5rem] h-full place-content-center rounded-[20px] min-w-[11rem] xl:max-w-[13rem] lg:max-w-[16rem] w-[100%] ' +
				containerClassName
			}
		>
			<div className="flex justify-between flex-grow w-full  max-w-[13rem]">
				<div className="flex flex-col my-auto">
					<div className="flex flex-row gap-2">
						<p className="lg:text-[.8em] md:text-[.65em] font-light -tracking-tight text-[#272830]">
							{title}
						</p>
						<span
							className={`text-[10px] align-middle flex items-center h-[24px] px-2 rounded-[5px] md:px-1 md:h-[20px] md:text-[9px] md:rounded-[5px]  ${
								variation ? 'bg-[#CAFFA0]' : 'bg-[#FFCBD7]'
							} `}
						>
							{variation ? '+' : '-'}
							{''}
							{changeInPercent}
							{'%'}
						</span>
					</div>

					<p
						className="text-[26px] md:text-[22px] font-normal p-0 m-0"
						style={montserrat.style}
					>
						{value}
					</p>
				</div>

				<div className="self-start w-[30px] h-[30px]">
					<Image src={icon} alt={title.toLowerCase()} />
				</div>
			</div>
		</Card>
	)
}

export default AnalyticsCard
