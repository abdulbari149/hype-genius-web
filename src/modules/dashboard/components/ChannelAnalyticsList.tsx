import React from 'react'
import AnalyticsCard from './AnalyticsCard'
import Card from '@/components/Card'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { useGetChannelAnalytics } from '../hooks/useGetChannelAnalytics'
const montserrat = Montserrat({
	weight: '600',
	subsets: ['latin'],
})

const ChannelAnalyticsList = () => {
	const { data: analytics } = useGetChannelAnalytics()
	console.log({ analytics })
	return (
		<div className="flex flex-col">
			<div className="flex flex-row flex-wrap h-max mb-[20px] flex-shrink gap-y-2 gap-x-3">
				<AnalyticsCard
					icon={require('@/assets/icons/3-User.png')}
					title="Total Uploads"
					value={analytics?.data?.no_of_uploads ?? 0}
					variation={true}
					changeInPercent={25}
				/>

				<AnalyticsCard
					icon={require('@/assets/icons/eye-icon.png')}
					title="Views"
					value={
						analytics?.data?.total_views
							? analytics?.data?.total_views.toLocaleString('en-US')
							: '0'
					}
					variation={true}
					changeInPercent={8}
				/>

				<AnalyticsCard
					icon={require('@/assets/icons/budgeting-icon.png')}
					title="Total Earned"
					value={
						analytics?.data?.amount_earned
							? '$' + analytics?.data?.amount_earned.toLocaleString('en-US')
							: '$0'
					}
					variation={true}
					changeInPercent={16}
				/>
			</div>
			{analytics?.data?.contracts && analytics?.data?.contracts.length > 0 ? (
				<Card
					className={
						'grid auto-cols-fr px-5 py-3 h-fit place-content-center rounded-[20px] min-w-[11rem] xl:max-w-[20rem] lg:max-w-[20rem] w-[100%]'
					}
				>
					<div className="flex flex-col flex-grow w-full">
						<div className="flex flex-row gap-4">
							<p className="lg:text-[.8em] md:text-[.65em] font-light -tracking-tight text-[#272830]">
								Current Deal
							</p>
							<div className="self-start w-[30px] h-[30px]">
								<Image
									src={require('@/assets/icons/profit-icon.png')}
									alt={'current deal'}
								/>
							</div>
						</div>

						{analytics?.data?.contracts.map((contract) => {
							return (
								<p
									key={contract.id}
									className="text-[26px] md:text-[22px] font-normal p-0 m-0"
									style={montserrat.style}
								>
									<span className="text-[#1C921A]">${contract.amount}</span>
									<span>USD | {contract.upload_frequency.toUpperCase()}</span>
									<span className="text-[15px] pl-1"> per month</span>
								</p>
							)
						})}
					</div>
				</Card>
			) : null}
		</div>
	)
}

export default ChannelAnalyticsList
