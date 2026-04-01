import { QueryKey, UseQueryOptions, useQuery } from '@tanstack/react-query'
import { VideosApi } from '@/api/VideosApi'
import { GetVideos } from '@/api/type'

export type UseVideoUploadArgs = {
	is_payment_due?: boolean
	businessChannelId?: number
	fields?: string[]
	start_date?: string | undefined
	end_date?: string | undefined
}

type UseVideoUploadOptions<T = GetVideos> = UseQueryOptions<
	GetVideos,
	unknown,
	T,
	QueryKey
>

export const useVideoUploads = <T = GetVideos>(
	key: QueryKey,
	args: UseVideoUploadArgs = {},
	options: UseVideoUploadOptions<T> = {},
) => {
	return useQuery({
		queryKey: key,
		queryFn: () => VideosApi.getVideos(args),
		suspense: true,
		...options,
	})
}
