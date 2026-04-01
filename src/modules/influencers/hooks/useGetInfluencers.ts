import { BusinessApi } from '@/api/BusinessApi'
import { QUERY_KEYS } from '@/core/constants'
import { useQuery } from '@tanstack/react-query'

const { GET_INFLUENCERS } = QUERY_KEYS

export const useGetInfluencers = () => {
	return useQuery({
		queryKey: [GET_INFLUENCERS],
		queryFn: BusinessApi.getInfluencers,
		suspense: true,
	})
}
