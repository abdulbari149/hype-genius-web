import { BusinessApi } from '@/api/BusinessApi'
import { QUERY_KEYS } from '@/core/constants'
import { useQuery } from 'react-query'

export const useGetInfluencers = () => {
	return useQuery(QUERY_KEYS.GET_INFLUENCERS, {
		queryFn: BusinessApi.getInfluencers,
		suspense: true,
	})
}
