import { TagApi } from '@/api/TagApi'
import { GetTags } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'

const { GET_TAGS } = QUERY_KEYS

type UseGetTagsOption = Omit<
	UseQueryOptions<GetTags, unknown, GetTags, (string | number | null)[]>,
	'queryKey' | 'queryFn' | 'suspense' | 'retry' | 'staleTime'
>
export const useGetTags = (options: UseGetTagsOption = {}) => {
	const businessChannelId = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)
	return useQuery({
		queryKey: [GET_TAGS, businessChannelId],
		queryFn: () => {
			if (!businessChannelId || businessChannelId === null) {
				throw new Error('Please select an influencer first')
			}
			return TagApi.getTags(businessChannelId)
		},
		suspense: true,
		...options,
	})
}
