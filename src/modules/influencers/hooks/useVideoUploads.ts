import { UseQueryOptions, useQuery } from "react-query";
import { MONTHS, QUERY_KEYS } from '@/core/constants'
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { VideosApi } from "@/api/VideosApi";
import { GetVideos, IVideo } from "@/api/type";
import { Response } from "@/core/axios";
import { AxiosError } from "axios";
import { useCallback } from "react";
const { GET_VIDEOS } = QUERY_KEYS;

export type UseVideoUploadArgs = {
	is_payment_due?: boolean;
}

type SelectedVideoData = IVideo & {
	date: {
		day: number;
		month: string;
		year: number
	}
}

type UseVideoUploadOptions = Omit<UseQueryOptions<GetVideos, unknown, Response<SelectedVideoData[]>, `${string}/${number}`>, 'select'>

export const useVideoUploads = (args: UseVideoUploadArgs, options: UseVideoUploadOptions = {}) => {
	const businessChannelId = useSelector<AppState, number>((state) => state.influencers.influencer?.id ?? NaN);

	const queryFn = useCallback(() => {
		if (!businessChannelId || isNaN(businessChannelId)) {
			throw new Error("Please select an influencer first");
		}
		return VideosApi.getVideos({ businessChannelId, ...args });
	}, [businessChannelId])

	const defaultSelect = (data: GetVideos) => {
		const videos = data.data.map(item => {
			const uploadDate = new Date(item?.createdAt ?? '');
			return {
				...item, amount: 0, date: {
					day: uploadDate.getDate(),
					year: uploadDate.getFullYear(),
					month: MONTHS[uploadDate.getMonth()]
				}
			}
		})

		return {
			...data,
			data: videos,
		}
	}



	return useQuery(`${GET_VIDEOS}/${businessChannelId}`, {
		queryFn,
		suspense: true,
		select: defaultSelect,
		...options,
	})

}