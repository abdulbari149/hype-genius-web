import React from 'react'
import MdTooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { BsQuestionLg } from 'react-icons/bs'
import { styled } from '@mui/material'

const TooltipInfoIcon = React.forwardRef<HTMLElement>((props, ref) => {
	return (
		<span
			{...props}
			ref={ref}
			className="bg-[#CED0D4] w-[25px] h-[25px] grid p-3 cursor-pointer place-content-center rounded-full"
		>
			<BsQuestionLg
				size={15}
				style={{ color: '#A6A6A6', pointerEvents: 'none' }}
			/>
		</span>
	)
})

TooltipInfoIcon.displayName = 'TooltipInfoIcon'

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
	<MdTooltip {...props} classes={{ popper: className }} />
))(() => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: '#ffffff',
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: 350,
		padding: '10px 15px',
		borderRadius: '10px',
		border: '1px solid #ffffff',
		boxShadow:
			'2px 1px 10px rgba(50, 50, 71, 0.055), 1px 4px 80px rgba(50, 50, 71, 0.096)',
	},
}))

const Tooltip: React.FC<
	Omit<TooltipProps, 'title'> & { children: React.ReactNode }
> = ({ children, ...props }) => {
	return (
		<HtmlTooltip
			disableFocusListener
			disableTouchListener
			title={<React.Fragment>{children}</React.Fragment>}
			{...props}
		>
			<TooltipInfoIcon />
		</HtmlTooltip>
	)
}

export default Tooltip
