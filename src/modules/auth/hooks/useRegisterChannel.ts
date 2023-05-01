import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { AuthApi } from '../../../api/AuthApi'
import { ACCESS_TOKEN, handleError, REFRESH_TOKEN } from '../core/utils'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setAccessToken, setAuthState, setUser } from '../core/slice'
import { AxiosError } from 'axios'
import { QUERY_KEYS } from '@/core/constants'

const { REGISTER_CHANNEL } = QUERY_KEYS
const useRegisterChannel = () => {
	const router = useRouter()
	const dispatch = useDispatch()

	const registerChannel = useMutation({
		mutationKey: [REGISTER_CHANNEL],
		mutationFn: AuthApi.registerChannel,
		onSuccess(data) {
			localStorage.setItem(ACCESS_TOKEN, data.data.access_token)
			localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token)
			dispatch(setAuthState({ isLoggedIn: true }))
			dispatch(setUser({ user: data.data.user }))
			dispatch(setAccessToken({ token: data.data.access_token }))
			router.replace('/dashboard/influencer')

			toast(data.message, { type: 'success' })
		},
		onError(error) {
			if (error instanceof AxiosError && error.response?.status === 308) {
				localStorage.removeItem(ACCESS_TOKEN)
				localStorage.removeItem(REFRESH_TOKEN)
				dispatch(setAccessToken({ token: '' }))
				router.replace(error.response.data.data.url ?? '')
			}
			const message = handleError(error)
			toast(message, { type: 'error' })
		},
	})
	return registerChannel
}

export default useRegisterChannel
