import moment from 'moment'
import { DateOptionType } from '../core/type'
import { useQuery } from '@tanstack/react-query'

const DATE_VALUES = 'date-values'
const getDateValuesForOptions = (): Record<
	'start' | 'end',
	Record<DateOptionType, string>
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
	return data
}

export const useDateValues = () => {
	return useQuery({
		queryKey: [DATE_VALUES],
		cacheTime: 24 * 60 * 60 * 100,
		queryFn: () => getDateValuesForOptions(),
	})
}
