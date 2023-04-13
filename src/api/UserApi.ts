import { getAccessToken } from '@/modules/auth/core/utils'
import { IUser, UpdateUserData } from './type'
import { Response, api } from '@/core/axios'

export class UserApi {
	static async updateUser(data: UpdateUserData): Promise<Response<IUser>> {
		const token = getAccessToken()
		const result = await api.put('/user', data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return result.data
	}
}
