import { VideosApi } from '@/api/VideosApi'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { useDateValues } from './useDateValues'
const { GET_VIDEOS } = QUERY_KEYS

export const useGetVideos = () => {
	const dateValues = useDateValues()

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
