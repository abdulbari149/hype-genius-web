import { useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/core/constants'
import { AuthApi } from '@/api/AuthApi'

const { GET_ONBOARDING_DETAILS } = QUERY_KEYS

type UseGetOnboardingArg = {
	token: string
}

export const useGetOnboardingDetails = ({ token }: UseGetOnboardingArg) => {
	return useQuery({
		queryKey: [GET_ONBOARDING_DETAILS],
		queryFn: () => {
			return AuthApi.getOnboardingDetails(token)
		},
		onSuccess(data) {
			console.log(data)
		},
		suspense: true,
		cacheTime: 15 * 60 * 60,
	})
}
