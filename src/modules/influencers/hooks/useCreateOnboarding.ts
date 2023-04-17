import { UseQueryOptions, useQuery } from 'react-query'
import { QUERY_KEYS } from '@/core/constants'
import { ChannelApi } from '@/api/ChannelApi'
import { useState } from 'react'
import { CreateOnboardingRequest } from '@/api/type'

const { CREATE_ONBOARING } = QUERY_KEYS

export type UseCreateOnboardingOption = Omit<
	UseQueryOptions<
		CreateOnboardingRequest,
		unknown,
		CreateOnboardingRequest,
		[string]
	>,
	'queryKey' | 'queryFn' | 'suspense' | 'retry' | 'enabled'
>

export const useCreateOnboarding = (
	options: UseCreateOnboardingOption = {},
) => {
	const [enabled, setEnabled] = useState(true)

	return useQuery({
		queryKey: [CREATE_ONBOARING],
		queryFn: ChannelApi.createOnboardingRequest,
		suspense: true,
		retry: false,
		refetchOnReconnect: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		enabled,
		onSettled() {
			setEnabled(false)
		},
		...options,
	})
}
