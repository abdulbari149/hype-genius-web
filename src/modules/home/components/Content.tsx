import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Content = () => {
	const router = useRouter()

	return (
		<div className="bg-[#F2F6FA] flex items-center w-[100%] overflow-x-hidden pt-[2rem] pb-[18rem]">
			<div className="bg-[#FFFFFF] relative w-full gap-[2.5rem] max-w-[85%] justify-center rounded-xl flex flex-col items-center mx-auto shadow-sm py-[5%]">
				<p className="font-bold text-[3.5rem] max-w-[70%] leading-[5rem] text-center">
					Supercharge Your Marketing and
					<span className="text-pink-500"> Easily </span>
					<span className="inline-block text-pink-500">Achieve 6+ ROAS</span>
				</p>{' '}
				<p className="text-[1.6rem] text-center max-w-[80%] w-full">
					Discover the Game-Changing Benefits of Partnering with{' '}
					<span className="font-bold text-pink-500">Youtube Creators</span> to
					Generate{' '}
					<span className="bg-[#2EFF68]/50 rounded-xl px-2 py-1 inline-block">
						High-Quality Leads and Sales
					</span>{' '}
					Growth with Our{' '}
					<span className="bg-[#FFDE2E]/50 rounded-xl px-2 leading-[45px] py-1">
						Expert Influencer Marketing Solutions!
					</span>
				</p>
				<button
					onClick={() => router.push('/auth/signup/business')}
					className="flex items-center gap-3 px-[30px] py-4 hover:bg-pink-400 text-lg font-bold text-white bg-pink-500 rounded-2xl "
				>
					Book A Call
					<AiOutlineArrowRight size={25} />
				</button>
				<Image
					src={require('@/assets/home/black.png')}
					width={150}
					className="absolute top-[12%] left-0 -translate-x-[40%]"
					alt="Youtube Logo Black"
				/>
				<Image
					src={require('@/assets/home/red.png')}
					width={220}
					className="absolute bottom-[5%] right-0 translate-x-[45%]"
					alt="Youtube Red Logo"
				/>
			</div>

			{/* <div>
				<Image
					src={Hand}
					width={60}
					className="absolute left-[34.5%] top-[89%]"
					alt="Hand Logo"
				/>
			</div>
			<div></div>

			<div>
				<Image
					src={Hand}
					width={60}
					className="absolute left-[63%] top-[89%]"
					alt="Hand Logo"
				/>
			</div>
			<p className="text-4xl font-bold absolute top-[90%] left-[40%] ">
				Here&apos;s how it works
			</p> */}
		</div>
	)
}

export default Content
