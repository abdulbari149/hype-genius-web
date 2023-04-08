import { useQuery } from "react-query";
import { MONTHS, QUERY_KEYS } from '@/core/constants'
import { useSelector } from "react-redux";
import { AppState } from "@/store";
import { VideosApi } from "@/api/VideosApi";
const { GET_VIDEOS } = QUERY_KEYS;

export const useVideoUploads = () => {
  const businessChannelId = useSelector<AppState, number | null>((state) => state.influencers.influencer?.id ?? null);

	return useQuery(`${GET_VIDEOS}/${businessChannelId}`, {
		queryFn: () => {
			if (!businessChannelId || businessChannelId === null) {
				throw new Error("Please select an influencer first");
			}
			return VideosApi.getVideos({ businessChannelId });
		},
		cacheTime: 5000,
		suspense: true,
		select(data) {
			return {
				...data,
				data: data.data.map(item => {
					const uploadDate = new Date(item?.createdAt ?? '');
					return { ...item, amount: 0, date: { 
						day: uploadDate.getDate(),
						year: uploadDate.getFullYear(),
						month: MONTHS[uploadDate.getMonth()]
					}
				}
				})
			}
		}
	})

}