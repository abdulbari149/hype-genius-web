import Card from '@/components/Card'
import Image from 'next/image'
import React from 'react'

const FollowUp = () => {
	return (
		<Card
			className="relative py-[20px] rounded-xl flex flex-col justify-center items-center max-w-[340px] w-full"
			style={{ backgroundColor: '#ECF0F4' }}
		>
			<h3 className="text-[18px] text-[#272830] py-1 font-[600] text-center">
				Follow Up
			</h3>
			<div className="flex flex-row w-full pl-[15px] pr-[30px] gap-2 items-center">
				<div className="flex flex-row items-center gap-1">
					<div className="">
						<Image
							src={require('@/assets/icons/email-icon.png')}
							alt="Email"
							width={20}
							height={20}
						/>
					</div>
					<div>
						<Image
							src={require('@/assets/icons/downArrow.png')}
							alt="dropdown"
							width={20}
							height={20}
						/>
					</div>
				</div>

				<input
					type="text"
					placeholder="info here..."
					className="rounded-xl text-[14px] max-w-md w-full px-3 py-1 h-fit outline-none focus:out-of-range: focus-within:out-of-range: hover:outline-none"
				/>
			</div>

			<div className="flex gap-1 my-5 w-fit pl-[35px]">
				{['Tomorrow', 'Next Week', 'Next Month', 'Custom'].map((item) => (
					<div
						className="bg-[#fff] px-[5px] py-[2px] rounded-lg text-[10px] w-fit cursor-pointer font-light tracking-wide"
						key={item}
					>
						{item}
					</div>
				))}
			</div>
		</Card>
	)
}

export default FollowUp
