import { Response, api } from "@/core/axios";
import { getAccessToken } from "@/modules/auth/core/utils";
import {
	AddNote,
	AddNoteData,
	CreateVideo,
	CreateVideoData,
	GetNotes,
	GetVideos,
} from "./type";

export class VideosApi {
	static async getVideos(): Promise<GetVideos> {
		const token = getAccessToken();
		const result = await api.get("/videos", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}

	static async createVideo(data: CreateVideoData): Promise<CreateVideo> {
		const token = getAccessToken();
		const result = await api.post("/videos", data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}

	static async addNote(videoId: number, data: AddNoteData): Promise<AddNote> {
		const token = getAccessToken();
		const result = await api.post(`/videos/${videoId}/note`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}

	static async getNotes(videoId: number): Promise<GetNotes> {
		const token = getAccessToken();
		const result = await api.get(`/videos/${videoId}/note`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}
}
