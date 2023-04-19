import { ContractApi } from '@/api/ContractApi'
import { QUERY_KEYS } from '@/core/constants'
import { useMutation, useQueryClient } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { setContract, hideIsEdit } from '../core/slice'
import { AppState } from '@/store'
const { UPDATE_CONTRACT, GET_INFLUENCERS, GET_METRICS, GET_ALERTS } = QUERY_KEYS

export const useUpdateContract = () => {
	const dispatch = useDispatch()
	const businessChannelId = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)

	const queryClient = useQueryClient()
	const updateContract = useMutation(UPDATE_CONTRACT, {
		mutationFn: ContractApi.updateContract,
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
			await queryClient.invalidateQueries(GET_INFLUENCERS)

			await queryClient.invalidateQueries([GET_METRICS, businessChannelId])
			queryClient.invalidateQueries([GET_ALERTS, businessChannelId])

			dispatch(hideIsEdit())
		},
	})
	return updateContract
}
