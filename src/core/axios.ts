import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/modules/auth/core/utils'
import axios from 'axios'
import { toast } from 'react-toastify'

export type Response<T extends object> = {
	data: T
	message: string
	status: number
}

export const api = axios.create({
	baseURL: `http://localhost:5000/api/v1`,
	headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
	withCredentials: true,
})

api.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	},
)

api.interceptors.response.use(
	(res) => {
		return res
	},
	async (err) => {
		const originalConfig = err.config
		if (originalConfig.url === '/auth/login') throw err

		if (err.response && err.response.status === 401 && !originalConfig._retry) {
			originalConfig._retry = true
			try {
				const rsToken = localStorage.getItem(REFRESH_TOKEN)
				const rs = await api.post(
					'auth/refresh',
					{},
					{
						headers: {
							Authorization: `Bearer ${rsToken}`,
						},
					},
				)
				const access = rs.data.data.access_token
				localStorage.setItem(ACCESS_TOKEN, access)
				return api(originalConfig)
			} catch (_error) {
				toast.error('Session time out. Please login again.', {})
				localStorage.removeItem(ACCESS_TOKEN)
				localStorage.removeItem(REFRESH_TOKEN)
				if (!window.location.pathname.includes('/auth')) {
					window.location.href = window.location.origin
				}
				console.log(window.location)
				return Promise.reject(_error)
			}
		}

		return Promise.reject(err)
	},
)
