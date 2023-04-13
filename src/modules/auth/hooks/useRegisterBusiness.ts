import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { AuthApi } from '../../../api/AuthApi'
import { ACCESS_TOKEN, handleError, REFRESH_TOKEN } from '../core/utils'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setAuthState, setUser } from '../core/slice'

const useRegisterBusiness = () => {
	const router = useRouter()
	const dispatch = useDispatch()

	const registerBusiness = useMutation('register-business', {
		mutationFn: AuthApi.registerBusiness,
		onSuccess(data, variables, context) {
			localStorage.setItem(ACCESS_TOKEN, data.data.access_token)
			localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token)
			dispatch(setAuthState({ isLoggedIn: true }))
			dispatch(setUser({ user: data.data.user }))
			toast(data.message, { type: 'success' })
			router.replace('/dashboard/business')
		},
		onError(error, variables, context) {
			const message = handleError(error)
			toast(message, { type: 'error' })
			dispatch(setAuthState({ isLoggedIn: false }))
			dispatch(setUser({ user: null }))
		},
	})
	return registerBusiness
}

export default useRegisterBusiness
