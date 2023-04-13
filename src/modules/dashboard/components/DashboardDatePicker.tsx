import React from 'react'
import Selector from '@/components/Selector'

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
