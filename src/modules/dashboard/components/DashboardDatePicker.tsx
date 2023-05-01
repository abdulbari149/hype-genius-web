import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@/store'
import { setDateFilter } from '../core/slice'
import DateSelector from '@/components/Selector/DateSelector'

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
			<DateSelector
				dateFrom="start"
				name="start_date"
				value={dateFilters.start_date}
				onChange={(value) => {
					updateState({ start_date: value })
				}}
				className={{
					container(prev) {
						return `${prev} hover:bg-[#fafafa]`
					},
				}}
			/>
			<p className="text-[13px] font-light">Compare to</p>
			<DateSelector
				dateFrom="end"
				value={dateFilters.end_date}
				onChange={(value) => {
					updateState({ end_date: value })
				}}
				style={{
					calendarContainer: {
						right: '0px',
					},
				}}
				className={{
					container(prev) {
						return `${prev} hover:bg-[#fafafa]`
					},
				}}
			/>
		</div>
	)
}

export default DashboardDatePicker
