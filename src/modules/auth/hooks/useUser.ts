import { AxiosError } from 'axios'
import { setAuthState } from '@/modules/auth/core/slice'
import { UseQueryOptions, useQuery } from 'react-query'
import { AuthApi } from '@/api/AuthApi'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../core/slice'
import { AppState } from '@/store'
import { Me } from '@/api/type'

export const useUser = (options: UseQueryOptions<Me, AxiosError | Error>) => {
	const dispatch = useDispatch()
	const { onSuccess = undefined, onError = undefined, ...props } = options
	const loggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)
	const user = useSelector((state: AppState) => state.auth.user)

	const userQuery = useQuery<Me, AxiosError | Error>('user', {
		queryFn: AuthApi.me,
		retry: false,
		enabled: !loggedIn || !user,
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
	})

	return userQuery
}
