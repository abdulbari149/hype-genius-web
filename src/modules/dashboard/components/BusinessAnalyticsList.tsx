import React from 'react'
import AnalyticsCard from './AnalyticsCard'
import { useGetBusinessAnalytics } from '../hooks/useGetBusinessAnalytics'

const BusinessAnalyticsList = () => {
	const { data: analytics } = useGetBusinessAnalytics()

	return (
		<div className="flex flex-row flex-wrap h-max mb-[20px] flex-shrink gap-y-2 gap-x-3">
			<AnalyticsCard
				icon={require('@/assets/icons/3-User.png')}
				title="Active Partners"
				value={analytics?.data.active_partners ?? 0}
				variation={true}
				changeInPercent={25}
			/>

			<AnalyticsCard
				icon={require('@/assets/icons/eye-icon.png')}
				title="Views"
				value={analytics?.data.total_views.toLocaleString('en-US') ?? ''}
				variation={true}
				changeInPercent={8}
			/>

			<AnalyticsCard
				icon={require('@/assets/icons/budgeting-icon.png')}
				title="Total Spent"
				value={
					analytics?.data.spent
						? analytics.data.spent.toLocaleString('en-US', {
								style: 'currency',
								currency: 'USD',
						  })
						: ''
				}
				variation={true}
				changeInPercent={16}
			/>
			<AnalyticsCard
				icon={require('@/assets/icons/profit-icon.png')}
				title="ROAS"
				value={analytics?.data.roas ?? ''}
				variation={false}
				changeInPercent={8}
			/>
		</div>
	)
}

export default BusinessAnalyticsList
