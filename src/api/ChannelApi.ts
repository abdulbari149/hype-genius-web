import { api } from '@/core/axios'
import { getAccessToken } from '@/modules/auth/core/utils'
import {
	CreateOnboardingRequest,
	UpdateOnboardingRequestData,
	UpdateOnboardingRequest,
} from './type'

export class ChannelApi {
	static async createOnboardingRequest(): Promise<CreateOnboardingRequest> {
		const token = getAccessToken()
		const result = await api.post(
			'/channels/influencer/onboarding',
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			},
		)
		return result.data
	}

	static async updateOnboardingRequest(
		data: UpdateOnboardingRequestData,
	): Promise<UpdateOnboardingRequest> {
		const token = getAccessToken()
		const result = await api.put('/channels/influencer/onboarding', data, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}
}
