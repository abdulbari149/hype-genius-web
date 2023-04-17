import { api } from '@/core/axios'
import { getAccessToken } from '@/modules/auth/core/utils'
import { GetTags, UpdateTagsData } from './type'

export class TagApi {
	static async getTags(business_channel_id: number): Promise<GetTags> {
		const token = getAccessToken()
		const result = await api.get(
			`/tags?business_channel_id=${business_channel_id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		)
		return result.data
	}

	static async updateTags(data: UpdateTagsData): Promise<GetTags> {
		const token = getAccessToken()
		const result = await api.put(`/tags`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return result.data
	}
}
