import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/router'

const HowItWorks = () => {
	const router = useRouter()

	return (
		<div
			className="w-screen relative flex flex-col items-center -top-[14rem] pt-[80px]"
			id="HowItWorks"
		>
			<div className="flex gap-3">
				<Image
					src={require('@/assets/home/hand.png')}
					width={60}
					alt="Hand logo"
				/>
				<h3 className="text-[2.7rem] font-bold">Here&apos;s how it works</h3>
				<Image
					src={require('@/assets/home/hand.png')}
					width={60}
					alt="Hand logo"
				/>
			</div>
			<div className="flex justify-between w-full max-w-[38rem] mt-[40px]">
				<Image
					src={require('@/assets/home/vecleft.png')}
					width={250}
					height={200}
					className=""
					alt="left vec"
				/>
				<Image
					src={require('@/assets/home/vecright.png')}
					width={200}
					height={200}
					alt="right vec"
					className=""
				/>
			</div>
			<div className="flex gap-[50px] max-w-[60vw] w-full mt-[25px]">
				<div className="flex flex-col items-center flex-1 gap-8">
					<p className="font-bold text-[1.3rem] bg-[#50EAFF]/50 rounded-2xl mb-[20px] px-4 py-3">
						I already work with the Youtube Creators
					</p>
					<p className="w-full text-[1.3rem]">
						Great! Our software can really help you out then...
					</p>
					<p className="w-full text-[1.3rem]">
						It allows you to seamlessly keep track of all the Youtube Channels
						you sponsor :)
					</p>
					<ul className="space-y-5 list-disc pl-7">
						<li className="w-full text-[1.3rem] leading-9">
							Track Metrics about sponsored videos (Views, ROAS, Total Spent,
							etc.{' '}
						</li>
						<li className="w-full text-[1.3rem] leading-9">
							Manage which partners have been paid, or if payments are due
						</li>
						<li className="w-full text-[1.3rem] leading-9">
							Stay up to date with Contracts and Deals with Partners.
						</li>
						<li className="w-full text-[1.3rem] leading-9">
							Instant ROAS grading (are you getting a good ROI from your
							partners)
						</li>
					</ul>
					<div className="flex gap-[40px] mt-5">
						<button className="border-pink-500 hover:bg-pink-400 hover:border-pink-400 hover:text-white transition-all px-5 py-2 rounded-2xl border-solid border-[5px] text-[1.3rem] font-extrabold ">
							Preview Video
						</button>
						<button
							onClick={() => router.push('/auth/signup/business')}
							className="px-5 py-2 flex items-center gap-3 text-[1.3rem] font-bold text-white bg-pink-500 hover:bg-pink-400 rounded-2xl"
						>
							Book Demo
							<AiOutlineArrowRight />
						</button>
					</div>
				</div>

				<div className="flex flex-col flex-1 gap-6">
					<p className="font-bold text-[1.3rem] ml-[55px] bg-[#93FCB2] px-4 py-3 w-fit rounded-2xl mb-[20px]">
						I want to work with Youtube Creators
					</p>
					<p className="text-[1.3rem] leading-9">
						Awesome! Well, we just happen to have a Full Course & Software to
						help with exactly that!
					</p>

					<p className="text-[1.3rem] leading-9">
						Here&apos;s how it works :&#41;
					</p>
					<p className="text-[1.3rem] font-bold">Step1:</p>
					<p className="text-[1.3rem]">
						Go through our Step-by-step course &#40;it goes over how to find
						creators, reach out to them, sponsor them, manage/ pay them, and how
						to be EXTREMELY profitable doing it&#41;
					</p>
					<p className="font-bold text-[1.3rem]">Step2:</p>
					<p className="text-[1.3rem]">Onboard channels to sponsors</p>
					<p className="text-[1.3rem] font-bold">Step3:</p>
					<p className="text-[1.3rem]">They promote your product / service</p>
					<p className="text-[1.3rem] font-bold">Step4:</p>
					<p className=" text-[1.2rem] -translate-x-1 bg-[#FFDE2E]/50 w-fit rounded-lg px-2 py-1">
						PROFIT!
					</p>
					<p className="text-[1.3rem] leading-2">
						{' '}
						Best of all we offer an insane Guarantee...
					</p>
					<p className="text-[1.3rem] font-bold leading-1">
						We guarantee you&apos;ll get a 3X ROAS (Return on Ad Spend) within 3
						months Or we&apos;ll refund every cent you&apos;ve paid!
					</p>
					<button
						onClick={() => router.push('/auth/signup/business')}
						className="px-5 py-3 flex items-center gap-3 self-center bg-pink-500 hover:bg-pink-400 transition-all rounded-2xl  text-[1.3rem] font-bold text-white"
					>
						Book a Call
						<AiOutlineArrowRight />
					</button>
				</div>
			</div>

			<div className="flex">
				<p className="text-[2.8rem] font-bold mt-[200px] flex  flex-col items-center">
					Get started now and leverage the power of{' '}
					<span className="bg-[#FFDE2E]/50 px-10 mt-3 rounded-xl inline-block">
						influencer marketing!
					</span>
				</p>
			</div>
		</div>
	)
}

export default HowItWorks
