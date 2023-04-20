import {
	GetMyBusiness,
	GetAllBusiness,
	GetInfluencers,
	UpdateBusiness,
	UpdateBusinessData,
	GetReportData,
	GetBusinessReport,
	GetBusinessAnalytics,
	GetMetrics,
	GetMetricsQuery,
	CreateFollowUpData,
} from './type'
import { api } from '@/core/axios'
import { getAccessToken } from '@/modules/auth/core/utils'

export class BusinessApi {
	static async getMyBusiness(): Promise<GetMyBusiness> {
		const token = getAccessToken()
		const result = await api.get('/business/current', {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}

	static async getAllBusiness(): Promise<GetAllBusiness> {
		const token = getAccessToken()
		const result = await api.get('/business', {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}

	static async getInfluencers(): Promise<GetInfluencers> {
		const token = getAccessToken()
		const result = await api.get('/business/influencers', {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}

	static async updateBusiness(
		data: UpdateBusinessData,
	): Promise<UpdateBusiness> {
		const token = getAccessToken()
		const result = await api.put('/business', data, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}

	static async getBusinessReport(
		query?: Partial<GetReportData>,
	): Promise<GetBusinessReport> {
		const token = getAccessToken()
		let url = '/business/report'
		const params = []
		if (query?.report_for_all !== undefined) {
			params.push(`report_for_all=${query.report_for_all}`)
		}
		if (
			query?.business_channel_id !== undefined &&
			query?.business_channel_id !== null
		) {
			params.push(`business_channel_id=${query.business_channel_id}`)
		}
		if (query?.page !== undefined) {
			params.push(`page=${query.page}`)
		}
		if (query?.size !== undefined) {
			params.push(`size=${query.size}`)
		}
		if (query?.start_date !== undefined && query?.start_date !== '') {
			params.push(`start_date=${query.start_date}`)
		}
		if (query?.end_date !== undefined && query?.end_date !== '') {
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

	static async getBusinessAnalytics(): Promise<GetBusinessAnalytics> {
		const token = getAccessToken()
		const url = '/business/analytics'
		const result = await api.get(url, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}

	static async getMetrics(
		business_channel_id: number,
		query: GetMetricsQuery = {},
	): Promise<GetMetrics> {
		const token = getAccessToken()
		const params = []
		let url = `/business/metrics/${business_channel_id}`
		if (query?.start_date && typeof query.start_date !== 'undefined') {
			params.push(`start_date=${query.start_date}`)
		}
		if (query?.end_date && typeof query.end_date !== 'undefined') {
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

	static async craeteFollowUp(data: CreateFollowUpData) {
		const token = getAccessToken()
		const url = '/business/followup'
		const result = await api.post(url, data, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}
}
