import { VideosApi } from '@/api/VideosApi'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
const { GET_VIDEOS } = QUERY_KEYS

export const useGetVideos = () => {
	const dateFilters = useSelector((state: AppState) => {
		const dates = state.dashboard.dateFilters
		return dates;
	})
	return useQuery({
		queryKey: [GET_VIDEOS, dateFilters],
		queryFn: () => VideosApi.getVideos(dateFilters),
		onSuccess(data) {
			console.log({ data })
		},
		staleTime: 15 * 60 * 60 * 100,
	})
}
