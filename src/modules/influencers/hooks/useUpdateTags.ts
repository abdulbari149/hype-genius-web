import { TagApi } from '@/api/TagApi'
import { UpdateTagsData } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { setTags } from '../core/slice'

const { GET_TAGS, GET_INFLUENCERS } = QUERY_KEYS

export const useUpdateTags = () => {
	const business_channel_id = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)

	const dispatch = useDispatch()

	const queryClient = useQueryClient()

	return useMutation('tags/save', {
		mutationFn: (data: Omit<UpdateTagsData, 'business_channel_id'>) => {
			if (!business_channel_id || business_channel_id === null) {
				throw new Error('Please select an influencer first')
			}
			return TagApi.updateTags({ ...data, business_channel_id })
		},
		async onSuccess(data) {
			if (!business_channel_id) return
			await queryClient.invalidateQueries([GET_TAGS, business_channel_id])
			queryClient.invalidateQueries([GET_INFLUENCERS])
			dispatch(
				setTags({
					tags: data.data
						.filter((item) => item.active)
						.map((item) => ({
							...item,
							businessChannelId: business_channel_id,
						})),
				}),
			)
		},
	})
}
