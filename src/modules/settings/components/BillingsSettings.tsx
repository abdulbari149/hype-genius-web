import Card from '@/components/Card'
import { useRouter } from 'next/router'
import React from 'react'

const BillingsSettings = () => {
	const router = useRouter()
	return (
		<Card
			className="flex flex-col bg-[#FFFFFF]/50 h-[155px] w-full px-9 shadow-xl gap-2 rounded-lg py-6"
			style={{
				boxShadow:
					'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
			}}
		>
			<p className="font-semibold">Subscription & Billing</p>
			<p>
				You are currently subscribed to the
				<span className="font-semibold"> Pro plan at $78 monthly</span>
			</p>
			<button
				onClick={() => router.push('/settings/subscription')}
				className="bg-[#EF539E] rounded-xl text-white max-w-fit py-2 px-4"
			>
				Manage Subscription
			</button>
		</Card>
	)
}

export default BillingsSettings
