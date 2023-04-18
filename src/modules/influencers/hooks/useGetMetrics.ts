import { BusinessApi } from '@/api/BusinessApi'
import { GetMetricsQuery } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'

const { GET_METRICS } = QUERY_KEYS

export const useGetMetrics = (query: GetMetricsQuery = {}) => {
	const businessChannelId = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)
	return useQuery({
		queryKey: [GET_METRICS, businessChannelId, query],
		queryFn: () => {
			if (!businessChannelId || businessChannelId === null) {
				throw new Error('Please select an influencer first')
			}
			return BusinessApi.getMetrics(businessChannelId, query)
		},
		suspense: false,
	})
}
