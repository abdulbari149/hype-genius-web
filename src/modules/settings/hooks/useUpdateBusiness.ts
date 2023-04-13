import { BusinessApi } from '@/api/BusinessApi'
import { QUERY_KEYS } from '@/core/constants'
import { useMutation } from 'react-query'

export const useUpdateBusiness = () => {
	return useMutation(QUERY_KEYS.UPDATE_BUSINESS, {
		mutationFn: BusinessApi.updateBusiness,
	})
}
