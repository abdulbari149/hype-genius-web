import { api } from '@/core/axios'
import { getAccessToken } from '@/modules/auth/core/utils'
import {
	AddNote,
	AddNoteData,
	CreateVideo,
	CreateVideoData,
	GetNotes,
	GetVideos,
} from './type'
import { UseVideoUploadArgs } from '@/modules/influencers/hooks/useVideoUploads'

export class VideosApi {
	static async getVideos(query: UseVideoUploadArgs): Promise<GetVideos> {
		const token = getAccessToken()
		let url = '/videos'
		console.log(token)
		const params = []
		if (
			query?.businessChannelId !== undefined &&
			query.businessChannelId !== null
		) {
			params.push(`business_channel_id=${query.businessChannelId}`)
		}
		if (query?.is_payment_due !== undefined && query.is_payment_due !== null) {
			params.push(`is_payment_due=${query.is_payment_due}`)
		}
		if (
			query?.fields !== undefined &&
			Array.isArray(query.fields) &&
			query.fields.length > 0
		) {
			params.push(`fields=${query.fields.join(',')}`)
		}

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

	static async createVideo(data: CreateVideoData): Promise<CreateVideo> {
		const token = getAccessToken()
		const result = await api.post('/videos', data, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}

	static async addNote(videoId: number, data: AddNoteData): Promise<AddNote> {
		const token = getAccessToken()
		const result = await api.post(`/videos/${videoId}/note`, data, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}

	static async getNotes(videoId: number): Promise<GetNotes> {
		const token = getAccessToken()
		const result = await api.get(`/videos/${videoId}/note`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return result.data
	}
}
