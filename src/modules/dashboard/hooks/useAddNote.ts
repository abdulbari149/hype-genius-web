import { QUERY_KEYS } from '@/core/constants'
import { AppState } from '@/store'
import {
	UseMutationOptions,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { AddNoteData } from '../core/type'
import { handleError } from '@/modules/auth/core/utils'
import { VideosApi } from '@/api/VideosApi'
import { AddNote } from '@/api/type'

const { ADD_NOTE, GET_NOTES } = QUERY_KEYS

type UseAddNoteOptions = Pick<
	UseMutationOptions<
		AddNote,
		unknown,
		{
			body: string
		},
		unknown
	>,
	'onSettled' | 'onMutate' | 'meta'
>
export const useAddNote = (options: UseAddNoteOptions = {}) => {
	const videoId = useSelector<AppState, number | null>(
		(state) => state.dashboard.videoId,
	)
	const queryClient = useQueryClient()
	return useMutation({
		mutationKey: [ADD_NOTE],
		mutationFn: (data: AddNoteData) => {
			if (videoId === null || isNaN(videoId))
				throw new Error('Invalid video id. Please selecte an uploaded video')
			return VideosApi.addNote(videoId, data)
		},
		onSuccess(data) {
			toast.success(data.message)
			queryClient.invalidateQueries({
				queryKey: [GET_NOTES, videoId],
			})
		},
		onError(error) {
			const message = handleError(error)
			toast.error(message)
		},
		...options,
	})
}
