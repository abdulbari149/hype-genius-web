import { BusinessApi } from '@/api/BusinessApi'
import { QUERY_KEYS } from '@/core/constants'
import { useMutation } from '@tanstack/react-query'

const { UPDATE_BUSINESS } = QUERY_KEYS
export const useUpdateBusiness = () => {
	return useMutation({
		mutationKey: [UPDATE_BUSINESS],
		mutationFn: BusinessApi.updateBusiness,
	})
}
