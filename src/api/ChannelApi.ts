import { api } from '@/core/axios'
import { getAccessToken } from '@/modules/auth/core/utils'
import {
	CreateOnboardingRequest,
	UpdateOnboardingRequestData,
	UpdateOnboardingRequest,
	GetChannelAnalytics,
	GetChannelAnalyticsQuery,
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

	static async getChannelAnalytics(
		query: GetChannelAnalyticsQuery,
	): Promise<GetChannelAnalytics> {
		const token = getAccessToken()
		let url = '/channels/analytics'
		console.log(token)
		const params = []
		if (query.start_date) {
			params.push(`start_date=${query.start_date}`)
		}
		if (query?.end_date) {
			params.push(`end_date=${query.end_date}`)
		}
		if (params.length > 0) {
			url += '?' + params.join('&')
		}
		const result = await api.get(url, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}
}
