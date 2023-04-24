import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
	const router = useRouter()

	return (
		<header className="bg-[#F2F6FA] flex flex-row pt-[5rem] px-[12rem] overflow-x-hidden min-h-[10vh] justify-between">
			<div className="h-[80px] object-contain">
				<Image
					src={require('@/assets/logos/hype-genius-logo-with-text.png')}
					width={200}
					alt="logo"
				/>
			</div>
			<nav className="">
				<ul className="flex items-center gap-[4em]">
					<li className="font-bold cursor-pointer">
						<button
							className="flex items-center gap-2 font-bold cursor-pointer hover:text-gray-500"
							onClick={() => router.push('/#HowItWorks')}
						>
							<p>How it works</p>
							<Image
								src={require('@/assets/home/dpdown.webp')}
								width={15}
								height={10}
								className=""
								alt="dpdown"
							/>
						</button>
					</li>
					<li className="font-bold cursor-pointer hover:text-gray-500">
						<Link href={'/'}>Contact us</Link>
					</li>
					<li className="font-bold cursor-pointer hover:text-gray-500">
						<Link href={'/auth/login'}>Sign in</Link>
					</li>
					<button
						onClick={() => router.push('/auth/signup/business')}
						className="font-bold  bg-[#EF539E] px-4 py-2 text-[#F2F6FA] rounded-2xl hover:bg-pink-400"
					>
						Get Started
					</button>
				</ul>
			</nav>
		</header>
	)
}

export default Header
