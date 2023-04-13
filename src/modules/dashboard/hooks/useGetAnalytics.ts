import { BusinessApi } from '@/api/BusinessApi'
import { QUERY_KEYS } from '@/core/constants'
import { useQuery } from 'react-query'

export const useGetAnalytics = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.GET_ANALYTICS],
		queryFn: () => BusinessApi.getBusinessAnalytics(),
	})
}
