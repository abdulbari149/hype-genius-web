import { UseQueryOptions, useQuery } from 'react-query'
import { VideosApi } from '@/api/VideosApi'
import { GetVideos } from '@/api/type'

export type UseVideoUploadArgs = {
	is_payment_due?: boolean
	businessChannelId?: number
	fields?: string[]
}

type UseVideoUploadOptions<T = GetVideos> = UseQueryOptions<
	GetVideos,
	unknown,
	T,
	string
>

export const useVideoUploads = <T = GetVideos>(
	key: string,
	args: UseVideoUploadArgs = {},
	options: UseVideoUploadOptions<T> = {},
) => {
	return useQuery(key, {
		queryFn: () => VideosApi.getVideos(args),
		suspense: true,
		...options,
	})
}
