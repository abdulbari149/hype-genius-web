import Tooltip from '@/components/Tooltip'
import React from 'react'

const OnboardingLink: React.FC<{ url: string }> = ({ url }) => {
	return (
		<div className="space-y-[10px]">
			<h3 className="text-[#272830] text-[18px] font-[600] flex gap-3 items-center">
				Onboarding Link
				<Tooltip placement="right-end">
					<>
						<h4 className="text-[15px]">Onboarding Link</h4>
						<p className="text-[13px] text-light py-4">
							This link is randomly generated every time the &ldquo;+add
							Influencer&rdquo; button is clicked.
						</p>
						<p className="text-[13px] text-light">
							This Unique link can only be used once and will import the below
							contract settings once the user signs up.
						</p>
					</>
				</Tooltip>
			</h3>

			<div className="flex items-center gap-2">
				<p className="text-[#5C6FFF] w-fit cursor-pointer">{url}</p>
				<button
					onClick={() => {
						navigator.clipboard.writeText(url)
					}}
					className="bg-[#EF539E] px-4 py-1 rounded-xl text-white text-[15px]"
				>
					Copy
				</button>
			</div>
		</div>
	)
}

export default OnboardingLink
