import { GetCurrencyList } from './type'
import { api } from '@/core/axios'
export class CurrencyApi {
	static getCurrentList = async (): Promise<GetCurrencyList> => {
		const result = await api.get('/currency')
		return result.data
	}
}
