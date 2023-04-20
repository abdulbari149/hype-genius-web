import { BusinessApi } from '@/api/BusinessApi'
import { GetBusinessAnalytics } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

type UseGetBusinessAnalyticsResult = UseQueryResult<
	GetBusinessAnalytics,
	unknown
>
export const useGetBusinessAnalytics = (): UseGetBusinessAnalyticsResult => {
	return useQuery({
		queryKey: [QUERY_KEYS.BUSINESS_ANALYTICS],
		queryFn: () => BusinessApi.getBusinessAnalytics(),
		suspense: true,
	})
}
