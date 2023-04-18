import Card from '@/components/Card'
import React, { useState } from 'react'
import { useGetBusinessAnalytics } from '../hooks/useGetBusinessAnalytics'
import Loading from '@/components/Loading'
import LineChart from './LineChart'

const tabs = [
	{
		id: 1,
		label: 'Active Partners',
		value: 'active_partners',
	},
	{
		id: 2,
		label: 'Views',
		value: 'total_views',
	},
	{
		id: 3,
		label: 'Total Spent',
		value: 'spent',
	},
	{
		id: 4,
		label: 'ROAS',
		value: 'roas',
	},
] as const

type TabValues = (typeof tabs)[number]['value']
const chartData = {
	label: 'My Dataset',
	labels: ['Jan', 'Oct'],
	values: [10, 70],
}

const DashboardCharts = () => {
	const [activeTab, setActiveTab] = useState<TabValues>(tabs[0].value)

	const { data: analytics } = useGetBusinessAnalytics()
	if (!analytics) return <Loading />

	return (
		<Card className="rounded-[25px] max-h-[40%] w-full h-full overflow-hidden">
			<div className="flex flex-row items-center gap-8 py-4 px-8">
				{tabs.map((tab) => {
					return (
						<div
							key={tab.id}
							className="cursor-pointer"
							onClick={() => setActiveTab(tab.value)}
						>
							<p
								className={`text-[17px] pb-1 ${
									tab.value === activeTab
										? 'opacity-100 border-b-2 border-[#000]'
										: 'opacity-40'
								}`}
							>
								{tab.label}
							</p>
						</div>
					)
				})}
			</div>

			<div className="py-2 mt-1 px-8">
				<p className="text-[38px] font-bold">
					{analytics.data[activeTab].toLocaleString('en-US')}
				</p>
				{/* <p className="text-[13px] bg-[#CAFFA0] px-3 py-1 w-fit rounded-lg ml-2">
					+25%
				</p> */}
			</div>

			<div className="relative w-full h-[240px]">
				<LineChart data={chartData} />
			</div>
		</Card>
	)
}

export default DashboardCharts
