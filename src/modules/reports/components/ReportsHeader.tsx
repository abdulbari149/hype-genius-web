import React, { useMemo } from 'react'
import Selector from '@/components/Selector'
import { useGetInfluencers } from '@/modules/influencers/hooks/useGetInfluencers'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@/store'
import {
	setBusinessChannel,
	setDateOption,
	setEndDate,
	setReportForAll,
	setStartDate,
} from '../core/slice'
import DateSelector from '@/components/Selector/DateSelector'
import moment from 'moment'

const ReportsHeader = () => {
	const { data: influencers } = useGetInfluencers()
	const dispatch = useDispatch()
	const businessChannel = useSelector((state: AppState) => {
		const id = state.report.business_channel_id
		if (id === null) return 0
		return id
	})
	const options = useMemo(() => {
		const defaultOptions = [
			{
				id: 'full-report',
				value: 0,
				label: 'Full Report',
			},
		]
		if (!influencers) return defaultOptions
		const businessChannelOptions = influencers.data.map((i) => {
			return {
				id: i.id.toString(),
				label: i.influencer.firstName + ' ' + i.influencer.lastName,
				value: i.id,
			}
		})
		return [...defaultOptions, ...businessChannelOptions]
	}, [influencers])

	const startDate = useSelector((state: AppState) => state.report.start_date)

	const handleChange = async (value: string) => {
		let business_channel_id: number | null = parseInt(value)
		let report_for_all = false
		if (isNaN(business_channel_id)) return
		if (business_channel_id === 0) {
			business_channel_id = null
			report_for_all = true
		}
		dispatch(setReportForAll({ report_for_all }))
		dispatch(setBusinessChannel({ business_channel_id }))
	}

	return (
		<>
			<h1 className="text-[#272830] text-[18px] font-500">
				Please select the data you would like to export
			</h1>
			<div className="flex items-center gap-3">
				<p className="text-[15px] font-light">I would like to view</p>
				<Selector
					type="option"
					options={options}
					onChange={handleChange}
					value={businessChannel}
				/>
				<p className="text-[15px] font-light">From</p>
				<DateSelector
					dateFrom="start"
					value={startDate}
					onChange={(value, option) => {
						dispatch(setStartDate({ start_date: value }))
						dispatch(
							setDateOption({
								date_option:
									option && option?.label ? option?.label : 'This Month',
							}),
						)
						if (option && option?.value !== 'custom') {
							const new_end_date = moment(value)
								.endOf('month')
								.format('YYYY-MM-DD')
							console.log(new_end_date)
							dispatch(setEndDate({ end_date: new_end_date }))
						}
						if (option && option.value === 'custom') {
							dispatch(setEndDate({ end_date: value }))
						}
					}}
				/>
				<button className="text-white bg-[#EF539E] hover:bg-pink-400 transition-all px-3 py-2 shadow-lg rounded-lg text-[13px] ml-3">
					Export
				</button>
			</div>
		</>
	)
}

export default ReportsHeader
