import { PaymentApi } from '@/api/PaymentApi'
import { CreatePaymentData } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { showPanel } from '../core/slice'

const { CREATE_PAYMENT, GET_ALERTS, GET_INFLUENCERS } = QUERY_KEYS

export const useCreatePayment = () => {
	const queryClient = useQueryClient()
	const dispatch = useDispatch()
	const businessChannelId = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)
	return useMutation({
		mutationKey: [CREATE_PAYMENT],
		mutationFn: (data: Omit<CreatePaymentData, 'business_channel_id'>) => {
			if (!businessChannelId || businessChannelId === null) {
				throw new Error('Please select an influencer first')
			}
			return PaymentApi.createPayment({
				...data,
				business_channel_id: businessChannelId,
			})
		},
		async onSuccess() {
			await queryClient.invalidateQueries([GET_INFLUENCERS])
			queryClient.invalidateQueries([GET_ALERTS, businessChannelId])
			dispatch(showPanel({ panel: 'detail' }))
		},
	})
}
