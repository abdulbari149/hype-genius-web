import { VideosApi } from '@/api/VideosApi'
import { AppState } from '@/store'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { QUERY_KEYS } from '@/core/constants'
const { GET_NOTES } = QUERY_KEYS

export const useGetNoteList = () => {
	const videoId = useSelector<AppState, number | null>(
		(state) => state.dashboard.videoId,
	)
	return useQuery({
		queryKey: [GET_NOTES, videoId],
		queryFn: () => {
			if (videoId === null || isNaN(videoId))
				throw new Error('Invalid video id. Please selecte an uploaded video')
			return VideosApi.getNotes(videoId)
		},
		suspense: true,
	})
}
