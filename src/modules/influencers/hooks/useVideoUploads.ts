import { UseQueryOptions, useQuery } from 'react-query'
import { MONTHS, QUERY_KEYS } from '@/core/constants'
import { VideosApi } from '@/api/VideosApi'
import { GetVideos, IVideo } from '@/api/type'
import { Response } from '@/core/axios'
const { GET_VIDEOS } = QUERY_KEYS

export type UseVideoUploadArgs = {
	is_payment_due?: boolean
	businessChannelId?: number
	fields?: string[]
}

type SelectedVideoData = IVideo & {
	date: {
		day: number
		month: string
		year: number
	}
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
