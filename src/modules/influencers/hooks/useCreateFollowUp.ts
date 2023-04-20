import { BusinessApi } from '@/api/BusinessApi'
import { CreateFollowUpData } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const { GET_ALERTS, CREATE_FOLLOWUP, GET_INFLUENCERS, GET_ACTIVITIES } =
	QUERY_KEYS

export const useCreateFollowUp = () => {
	const business_channel_id = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)

	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: [CREATE_FOLLOWUP],
		mutationFn: (data: Omit<CreateFollowUpData, 'business_channel_id'>) => {
			if (!business_channel_id || business_channel_id === null) {
				throw new Error('Please select an influencer first')
			}
			return BusinessApi.craeteFollowUp({ ...data, business_channel_id })
		},
		async onSuccess(data) {
			queryClient.invalidateQueries([GET_INFLUENCERS])
			queryClient.invalidateQueries([GET_ALERTS, business_channel_id])
			queryClient.invalidateQueries([GET_ACTIVITIES, business_channel_id])
			toast.success(data.message)
		},
	})
}
