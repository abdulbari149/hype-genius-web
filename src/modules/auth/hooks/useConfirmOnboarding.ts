import { AuthApi } from '@/api/AuthApi'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { setAuthState, setUser } from '../core/slice'
import { ACCESS_TOKEN, REFRESH_TOKEN, handleError } from '../core/utils'

export const useConfirmOnboarding = () => {
	const router = useRouter()
	const dispatch = useDispatch()

	return useMutation({
		mutationKey: ['onboarding/confirm'],
		mutationFn: AuthApi.confirmOnboarding,
		onSuccess(data) {
			localStorage.setItem(ACCESS_TOKEN, data.data.access_token)
			localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token)
			dispatch(setAuthState({ isLoggedIn: true }))
			dispatch(setUser({ user: data.data.user }))
			router.replace('/dashboard/influencer')

			toast(data.message, { type: 'success' })
		},
		onError(error) {
			const message = handleError(error)
			toast(message, { type: 'error' })
		},
	})
}
