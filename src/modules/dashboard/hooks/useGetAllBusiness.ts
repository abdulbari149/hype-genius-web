import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/core/constants'
import { BusinessApi } from '@/api/BusinessApi'
import { GetAllBusiness } from '@/api/type'
const { GET_ALL_BUSINESS } = QUERY_KEYS

type UseGetAllBusinessOptions = Omit<
	UseQueryOptions<GetAllBusiness, unknown, GetAllBusiness, string[]>,
	'initialData'
>

export const useGetAllBusiness = (options: UseGetAllBusinessOptions = {}) => {
	return useQuery({
		queryKey: [GET_ALL_BUSINESS],
		queryFn: BusinessApi.getAllBusiness,
		...options,
	})
}
