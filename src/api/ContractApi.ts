import { getAccessToken } from '@/modules/auth/core/utils'
import { CreateContract, CreateContractData, UpdateContractData } from './type'
import { api } from '@/core/axios'

export class ContractApi {
	static async createContract(
		data: CreateContractData,
	): Promise<CreateContract> {
		const token = getAccessToken()
		const result = await api.post('/contracts', data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return result.data
	}

	static async updateContract(
		data: UpdateContractData,
	): Promise<CreateContract> {
		const token = getAccessToken()
		const { id, ...body } = data
		const result = await api.put(`/contracts/${id}`, body, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		return result.data
	}
}
