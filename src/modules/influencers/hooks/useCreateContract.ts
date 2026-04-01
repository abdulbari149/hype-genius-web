import { ContractApi } from '@/api/ContractApi'
import { QUERY_KEYS } from '@/core/constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { hideIsEdit, setContract } from '../core/slice'
import { AppState } from '@/store'
const { CREATE_CONTRACT, GET_INFLUENCERS, GET_ACTIVITIES, GET_METRICS } =
	QUERY_KEYS

export const useCreateContract = () => {
	const dispatch = useDispatch()
	const queryClient = useQueryClient()
	const business_channel_id = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)

	const createContract = useMutation({
		mutationKey: [CREATE_CONTRACT],
		mutationFn: ContractApi.createContract,
		async onSuccess(data) {
			dispatch(
				setContract({
					contract: {
						id: data.data.id,
						amount: data.data.amount,
						isOneTime: data.data.is_one_time,
						createdAt: data.data.createdAt,
						updatedAt: data.data.updatedAt,
						deletedAt: data.data.deletedAt,
						currencyId: data.data.currency_id,
						uploadFrequency: data.data.upload_frequency,
						budget: data.data.budget,
					},
				}),
			)
			dispatch(hideIsEdit())
			queryClient.invalidateQueries({
				queryKey: [GET_INFLUENCERS],
			})
			queryClient.invalidateQueries({
				queryKey: [GET_ACTIVITIES, business_channel_id],
			})
			queryClient.invalidateQueries({
				queryKey: [GET_METRICS, business_channel_id],
			})
			toast.success(data.message)
		},
	})
	return createContract
}
