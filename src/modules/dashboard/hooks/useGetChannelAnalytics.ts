import { ChannelApi } from '@/api/ChannelApi'
import { GetChannelAnalytics } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

type UseGetChannelAnalyticsResult = UseQueryResult<GetChannelAnalytics, unknown>
export const useGetChannelAnalytics = (): UseGetChannelAnalyticsResult => {
	return useQuery({
		queryKey: [QUERY_KEYS.CHANNEL_ANALYTICS],
		queryFn: () => ChannelApi.getChannelAnalytics(),
		suspense: true,
	})
}
