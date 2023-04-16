import React from 'react'

const OnboardingLink: React.FC<{ url: string }> = ({ url }) => {
	return (
		<div className="space-y-[10px]">
			<h3 className="text-[#272830] text-[18px] font-[600] ">
				Onboarding Link
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
