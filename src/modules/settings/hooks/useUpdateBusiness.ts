import { BusinessApi } from '@/api/BusinessApi'
import { UpdateBusinessData } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { useMutation, useQueryClient } from 'react-query'

export const useUpdateBusiness = () => {
	const queryClient = useQueryClient()
	return useMutation(QUERY_KEYS.UPDATE_BUSINESS, {
		mutationFn: BusinessApi.updateBusiness,
	})
}
