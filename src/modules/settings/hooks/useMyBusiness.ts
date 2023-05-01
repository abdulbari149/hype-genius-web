import { getLoginStatus } from '@/modules/auth/core/slice'
import { BusinessApi } from './../../../api/BusinessApi'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { QUERY_KEYS } from '@/core/constants'
import { GetMyBusiness } from '@/api/type'

type UseMyBusinessOptions = Omit<
	UseQueryOptions<GetMyBusiness, unknown, GetMyBusiness, [string]>,
	'queryFn' | 'enabled'
>

const { GET_MY_BUSINESS } = QUERY_KEYS

export const useMyBusiness = (options: UseMyBusinessOptions) => {
	const loggedIn = useSelector(getLoginStatus)
	return useQuery({
		queryKey: [GET_MY_BUSINESS],
		queryFn: BusinessApi.getMyBusiness,
		enabled: loggedIn,
		...options,
	})
}
