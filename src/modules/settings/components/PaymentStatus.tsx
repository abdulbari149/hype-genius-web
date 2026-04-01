import Image from 'next/image'
import React from 'react'
export type PaymentStatusType = 'paid' | 'unpaid'

interface PaymentStatusProps {
	containerClassName?: string
	status?: PaymentStatusType
}

const statusStyles: Record<PaymentStatusType, string> = {
	paid: 'text-[#78E176]',
	unpaid: 'text-[#FF8686]',
}

const statusIcon: Record<PaymentStatusType, React.ReactNode> = {
	paid: (
		<Image
			src={require('@/assets/icons/tick-icon.png')}
			alt={'Checked'}
			className="text-center"
		/>
	),
	unpaid: (
		<Image
			src={require('@/assets/icons/cross-icon.png')}
			alt={'Checked'}
			className="text-center"
		/>
	),
}

const PaymentStatus: React.FC<PaymentStatusProps> = ({
	containerClassName = '',
	status = 'paid',
}) => {
	return (
		<div className={`flex items-center gap-1 ${containerClassName}`}>
			{statusIcon[status]}
			<p className={statusStyles[status]}>
				{status.charAt(0).toUpperCase()}
				{status.slice(1)}
			</p>
		</div>
	)
}

export default PaymentStatus
