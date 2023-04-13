import Selector from '@/components/Selector'
import React from 'react'
const options = [
	{
		id: 1,
		value: 'this-month',
		label: 'This Month',
	},
	{
		id: 2,
		value: 'next-month',
		label: 'Next Month',
	},
	{
		id: 3,
		value: 'prev-month',
		label: 'Prev Month',
	},
	{
		id: 4,
		value: 'custom',
		label: 'Custom',
	},
]

const DashboardDatePicker = () => {
	return (
		<div className="flex items-center gap-3 my-[10px]">
			<Selector type="time" />
			<p className="text-[13px] font-light">Compare to</p>
			<Selector type="time" />
		</div>
	)
}

export default DashboardDatePicker
