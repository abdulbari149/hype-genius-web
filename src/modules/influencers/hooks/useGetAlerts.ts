import { AppState } from '@/store'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { QUERY_KEYS } from '@/core/constants'
import { AlertApi } from '@/api/AlertApi'

const { GET_ALERTS } = QUERY_KEYS

export const useGetAlerts = () => {
	const businessChannelId = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)
	return useQuery({
		queryKey: [GET_ALERTS, businessChannelId],
		queryFn: () => {
			if (!businessChannelId || businessChannelId === null) {
				throw new Error('Please select an influencer first')
			}
			return AlertApi.getBusinessChannelAlerts(businessChannelId)
		},
		suspense: true,
		onSuccess(data) {
			console.log(data)
		},
		select(data) {
			return {
				...data,
				data:
					data?.data.map((alert) => ({
						...alert,
						text: alert.name
							.replaceAll('_', ' ')
							.split(' ')
							.map((i) => `${i.charAt(0).toUpperCase()}${i.substring(1)}`)
							.join(' '),
					})) ?? [],
			}
		},
	})
}
