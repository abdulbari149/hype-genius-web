import { VideosApi } from '@/api/VideosApi'
import { CreateVideo, CreateVideoData } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { handleError } from '@/modules/auth/core/utils'
import {
	UseMutationOptions,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query'
import { toast } from 'react-toastify'
const { GET_VIDEOS, UPLOAD_VIDEO } = QUERY_KEYS

type UseCreateVideoOptions = UseMutationOptions<
	CreateVideo,
	unknown,
	CreateVideoData,
	unknown
>

export const useCreateVideo = (options: UseCreateVideoOptions = {}) => {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: [UPLOAD_VIDEO],
		mutationFn: VideosApi.createVideo,
		async onSuccess(data, variables, context) {
			queryClient.invalidateQueries({
				queryKey: [GET_VIDEOS],
			})
			toast.success<string>(data.message)
			if (options.onSuccess) {
				options.onSuccess(data, variables, context)
			}
		},
		onError(error, variables, context) {
			const message = handleError(error)
			toast.error<string>(message)
			if (options.onError) {
				options.onError(error, variables, context)
			}
		},
		onSettled(...args) {
			queryClient.invalidateQueries({
				queryKey: [GET_VIDEOS],
			})
			if (options.onSettled) {
				options.onSettled(...args)
			}
		},
	})
}
