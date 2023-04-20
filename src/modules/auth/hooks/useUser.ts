import { AxiosError } from 'axios'
import { setAuthState } from '@/modules/auth/core/slice'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { AuthApi } from '@/api/AuthApi'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../core/slice'
// import { AppState } from '@/store'
import { Me } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'

const { GET_ME } = QUERY_KEYS

export const useUser = (options: UseQueryOptions<Me, AxiosError | Error>) => {
	const dispatch = useDispatch()
	const { onSuccess = undefined, onError = undefined, ...props } = options
	const loggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
	const user = useSelector((state: AppState) => state.auth.user)

	const userQuery = useQuery({
		queryKey: [GET_ME],
		queryFn: AuthApi.me,
		retry: false,
		enabled: !user || !loggedIn,
		onSuccess(data) {
			dispatch(setAuthState({ isLoggedIn: true }))
			dispatch(setUser({ user: data.data.user }))
			if (!onSuccess) return
			return onSuccess(data)
		},
		onError(err) {
			dispatch(setAuthState({ isLoggedIn: false }))
			dispatch(setUser({ user: null }))
			if (!onError) return
			return onError(err)
		},
		...props,
		staleTime: 15 * 60 * 60 * 100,
	})

	return userQuery
}
