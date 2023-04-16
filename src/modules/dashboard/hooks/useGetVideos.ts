import { VideosApi } from '@/api/VideosApi'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import moment from 'moment'
import { DateOptionsType } from '../core/type'
const { GET_VIDEOS } = QUERY_KEYS
const DATE_VALUES = 'date-values'

const getDateValuesForOptions = (): Record<
	'start' | 'end',
	Record<DateOptionsType, string>
> => {
	const format = 'YYYY-MM-DD'
	const startOfNextMonth = moment(new Date())
		.add(1, 'months')
		.startOf('months')
		.format(format)
	const startOfPrevMonth = moment(new Date())
		.subtract(1, 'months')
		.startOf('months')
		.format(format)
	const startOfThisMonth = moment(new Date()).startOf('months').format(format)

	const endOfNextMonth = moment(new Date())
		.add(1, 'months')
		.endOf('months')
		.format(format)
	const endOfPrevMonth = moment(new Date())
		.subtract(1, 'months')
		.endOf('months')
		.format(format)
	const endOfThisMonth = moment(new Date()).endOf('months').format(format)
	const data = {
		start: {
			'next-month': startOfNextMonth,
			'prev-month': startOfPrevMonth,
			'this-month': startOfThisMonth,
		},
		end: {
			'next-month': endOfNextMonth,
			'prev-month': endOfPrevMonth,
			'this-month': endOfThisMonth,
		},
	}
	console.log(data)
	return data
}

export const useGetVideos = () => {
	const dateValues = useQuery({
		queryKey: [DATE_VALUES],
		cacheTime: 24 * 60 * 60 * 100,
		queryFn: getDateValuesForOptions,
	})

	const dateFilters = useSelector((state: AppState) => {
		if (!dateValues.data) return {}
		const dates = state.dashboard.dateFilters
		const start_date = dateValues.data['start'][dates.startDate]
		const end_date = dateValues.data['end'][dates.endDate]
		return {
			start_date,
			end_date,
		}
	})
	return useQuery({
		queryKey: [GET_VIDEOS, dateFilters, dateValues],
		queryFn: () => VideosApi.getVideos(dateFilters),
		onSuccess(data) {
			console.log({ data })
		},
		staleTime: 15 * 60 * 60 * 100,
	})
}
