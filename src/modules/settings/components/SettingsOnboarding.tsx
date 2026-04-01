import React, { useEffect, useState } from 'react'
import { useMyBusiness } from '../hooks/useMyBusiness'
import MdTooltip from '@mui/material/Tooltip'
const SettingsOnboarding: React.FC = () => {
	const [open, setOpen] = useState(false)

	const handleTooltipClose = () => {
		setOpen(false)
	}
	const { data } = useMyBusiness({})
	const handleTooltipOpen = () => {
		setOpen(true)
		navigator.clipboard.writeText(data?.data?.onboardingLink ?? '')
	}

	useEffect(() => {
		let timer: NodeJS.Timeout | undefined = undefined
		if (open) {
			timer = setTimeout(() => {
				setOpen(false)
			}, 500)
		}
		return () => {
			if (timer && typeof timer !== 'undefined') {
				clearTimeout(timer)
			}
		}
	}, [open])

	return (
		<div
			className="flex bg-[#FFFFFF]/50 rounded-lg w-full h-[120px] shadow-xl px-9 py-6"
			style={{
				boxShadow:
					'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
			}}
		>
			<div>
				<p className="font-semibold ">Onboarding Link</p>
				<div className="flex gap-3 mt-4">
					<p className="text-[#5C6FFF] w-fit cursor-pointer">
						{data?.data.onboardingLink}
					</p>
					<MdTooltip
						PopperProps={{
							disablePortal: true,
						}}
						onClose={handleTooltipClose}
						open={open}
						disableFocusListener
						disableHoverListener
						disableTouchListener
						title="Link Copied"
					>
						<button
							onClick={handleTooltipOpen}
							className="bg-[#EF539E] hover:bg-pink-400 transition-all w-[60px] h-[31px] rounded-xl px-2 text-white ml-4 "
						>
							Copy
						</button>
					</MdTooltip>
				</div>
			</div>
		</div>
	)
}

export default SettingsOnboarding
