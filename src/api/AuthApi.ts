import { api } from '@/core/axios'
import { getAccessToken } from '../modules/auth/core/utils'
import {
	GetOnboardingDetails,
	Login,
	LoginData,
	Me,
	RegisterBusiness,
	RegisterBusinessData,
	RegisterChannel,
	RegisterChannelData,
	ConfirmOnboarding,
} from './type'

export class AuthApi {
	static registerBusiness = async (
		data: RegisterBusinessData,
	): Promise<RegisterBusiness> => {
		const result = await api.post('/auth/business', data)
		return result.data
	}

	static registerChannel = async (
		data: RegisterChannelData,
	): Promise<RegisterChannel> => {
		const { token, ...body } = data
		const result = await api.post(`/auth/channel/${token}`, body)
		return result.data
	}

	static me = async (): Promise<Me> => {
		const token = getAccessToken()
		const result = await api.get('/auth/me', {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}

	static login = async (data: LoginData): Promise<Login> => {
		const result = await api.post('/auth/login', data, {
			withCredentials: true,
		})
		return result.data
	}

	static refreshToken = async (token: string) => {
		const result = await api.get('/auth/refresh', {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}

	static async getOnboardingDetails(
		token: string,
	): Promise<GetOnboardingDetails> {
		const result = await api.get(`/auth/onboarding/${token}`)
		return result.data
	}

	static async confirmOnboarding(token: string): Promise<ConfirmOnboarding> {
		const result = await api.post(`/auth/onboarding/${token}`)
		return result.data
	}
}
