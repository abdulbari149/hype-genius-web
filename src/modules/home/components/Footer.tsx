import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/home/My project.png'

function Footer() {
	return (
		<section className="bg-[#F2F6FA] grid mt-auto place-content-center grid-cols-[minmax(300px,70vw)] grid-rows-[1fr] w-full h-[25rem]">
			<div className="flex flex-col w-full h-full pb-[30px]">
				<div className="flex gap-[10rem] my-auto">
					<div className="flex flex-col gap-4">
						<p className="text-lg font-bold ">Legal</p>
						<p className="text-lg w-[160px]">Terms & Conditions</p>
						<p className="text-lg ">Privacy Policy</p>
						<p className="text-lg ">Refund Policy</p>
					</div>
					<div className="flex flex-col gap-5">
						<p className="text-lg font-bold">Product</p>
						<p className="text-lg">Book a Demo</p>
					</div>
					<div className="flex flex-col gap-5">
						<p className="text-lg font-bold">Company</p>
						<p className="text-lg ">About us</p>
					</div>
					<div className="flex flex-col gap-5">
						<p className="text-lg font-bold">Learn</p>
						<p className="text-lg ">Demo Video</p>
						<p className="text-lg ">Docs</p>
					</div>
				</div>
				<div className="flex items-center px-2 mt-auto">
					<div>
						<Image src={Logo} width={40} className="" alt="logo" />
					</div>
					<p className="mx-auto opacity-70">
						© 2023 HypeGenius, LLC. All rights reserved.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Footer
