import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '../../../api/AuthApi'
import { ACCESS_TOKEN, handleError, REFRESH_TOKEN } from '../core/utils'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setAccessToken, setAuthState, setUser } from '../core/slice'
import { QUERY_KEYS } from '@/core/constants'

const { REGISTER_BUSINESS } = QUERY_KEYS

const useRegisterBusiness = () => {
	const router = useRouter()
	const dispatch = useDispatch()

	const registerBusiness = useMutation({
		mutationKey: [REGISTER_BUSINESS],
		mutationFn: AuthApi.registerBusiness,
		onSuccess(data) {
			localStorage.setItem(ACCESS_TOKEN, data.data.access_token)
			localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token)
			dispatch(setAuthState({ isLoggedIn: true }))
			dispatch(setAccessToken({ token: data.data.access_token }))
			dispatch(setUser({ user: data.data.user }))
			toast(data.message, { type: 'success' })
			router.replace('/dashboard/business')
		},
		onError(error) {
			const message = handleError(error)
			toast(message, { type: 'error' })
			dispatch(setAccessToken({ token: '' }))
			dispatch(setAuthState({ isLoggedIn: false }))
			dispatch(setUser({ user: null }))
		},
	})
	return registerBusiness
}

export default useRegisterBusiness
