import React from 'react'
import Selector from '@/components/Selector'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@/store'
import { setDateFilter } from '../core/slice'

const DashboardDatePicker: React.FC = () => {
	const dateFilters = useSelector(
		(state: AppState) => state.dashboard.dateFilters,
	)
	const dispatch = useDispatch()

	const updateState = (data: Partial<AppState['dashboard']['dateFilters']>) => {
		dispatch(setDateFilter(data))
	}

	return (
		<div className="flex items-center gap-3 my-[10px]">
			<Selector
				name="startDate"
				value={dateFilters.startDate}
				onChange={(value) => {
					if (
						value === 'prev-month' ||
						value === 'next-month' ||
						value === 'this-month'
					) {
						updateState({ startDate: value })
					}
				}}
				type="time"
			/>
			<p className="text-[13px] font-light">Compare to</p>
			<Selector
				name="endDate"
				value={dateFilters.endDate}
				onChange={(value) => {
					if (
						value === 'prev-month' ||
						value === 'next-month' ||
						value === 'this-month'
					) {
						updateState({ endDate: value })
					}
				}}
				type="time"
			/>
		</div>
	)
}

export default DashboardDatePicker
