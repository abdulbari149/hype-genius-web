import { Response, api } from "@/core/axios";
import { getAccessToken } from "@/modules/auth/core/utils";
import { IVideo, UploadVideoData } from "@/modules/dashboard/core/type";

export class VideosApi {
	static async getVideos(): Promise<Response<IVideo[]>> {
		const token = getAccessToken();
		const result = await api.get("/videos", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}

	static async createVideo(data: UploadVideoData & { businessId: number }): Promise<Response<IVideo>>  {
		const token = getAccessToken();
		debugger;
		const result = await api.post("/videos", data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}
}
