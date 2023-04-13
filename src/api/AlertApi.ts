import { api } from '@/core/axios'
import { getAccessToken } from '@/modules/auth/core/utils'
import { GetAlerts } from './type'

export class AlertApi {
	static async getBusinessChannelAlerts(
		businessChannelId: number,
	): Promise<GetAlerts> {
		const token = getAccessToken()
		const url = `/alerts/?business_channel_id=${encodeURIComponent(
			businessChannelId,
		)}`
		const result = await api.get(url.toString(), {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}
}
