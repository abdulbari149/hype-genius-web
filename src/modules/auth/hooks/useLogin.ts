import { AuthApi } from '@/api/AuthApi'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { setUser } from '../core/slice'
import { ACCESS_TOKEN, REFRESH_TOKEN, handleError } from '../core/utils'
import { useDispatch } from 'react-redux'
import { QUERY_KEYS } from '@/core/constants'

const { LOGIN } = QUERY_KEYS

export const useLogin = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const login = useMutation({
		mutationKey: [LOGIN],
		mutationFn: AuthApi.login,
		onSuccess(data) {
			try {
				localStorage.setItem(ACCESS_TOKEN, data.data.access_token)
				localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token)
				dispatch(setUser({ user: data.data.user }))
				if (localStorage.getItem(ACCESS_TOKEN)) {
					toast(data.message, { type: 'success' })
					if (data.data.user.role === 'business_admin') {
						router.replace('/dashboard/business')
					} else if (data.data.user.role === 'influencer') {
						router.replace('/dashboard/influencer')
					}
				}
			} catch (error) {
				console.log(error)
			}
		},
		onError(error) {
			const message = handleError(error)
			toast(message, { type: 'error' })
		},
	})
	return login
}
