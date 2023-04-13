import { getLoginStatus } from '@/modules/auth/core/slice'
import { BusinessApi } from './../../../api/BusinessApi'
import { UseMutationOptions, UseQueryOptions, useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { QUERY_KEYS } from '@/core/constants'
import { GetMyBusiness } from '@/api/type'

type UseMyBusinessOptions = Omit<
	UseQueryOptions<GetMyBusiness, unknown, GetMyBusiness, string>,
	'queryFn' | 'enabled'
>

export const useMyBusiness = (options: UseMyBusinessOptions) => {
	const loggedIn = useSelector(getLoginStatus)
	const business = useQuery(QUERY_KEYS.GET_MY_BUSINESS, {
		queryFn: BusinessApi.getMyBusiness,
		enabled: loggedIn,
		...options,
	})
	return business
}
