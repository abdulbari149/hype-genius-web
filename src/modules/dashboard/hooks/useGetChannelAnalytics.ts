import { ChannelApi } from '@/api/ChannelApi'
import { GetChannelAnalytics } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'

type UseGetChannelAnalyticsResult = UseQueryResult<GetChannelAnalytics, unknown>
export const useGetChannelAnalytics = (): UseGetChannelAnalyticsResult => {
	const data = useSelector((state: AppState) => {
		return state.dashboard.dateFilters
	})
	return useQuery({
		queryKey: [QUERY_KEYS.CHANNEL_ANALYTICS, data],
		queryFn: () => ChannelApi.getChannelAnalytics(data),
		suspense: true,
	})
}
