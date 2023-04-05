import { getAccessToken } from "@/modules/auth/core/utils";
import { CreateActivity, GetActivityList } from "./type";
import { api } from "@/core/axios";
import { CreateActivityData } from "@/modules/influencers/core/schema";

export class NotesApi {
	static async createActivity(businessChannelId: number, data: CreateActivityData): Promise<CreateActivity> {
		const token = getAccessToken();
		const result = await api.post(`/notes/${businessChannelId}`, data, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}

	static async getActivites(businessChannelId: number): Promise<GetActivityList> {
		const token = getAccessToken();
		const result = await api.get(`/notes/${businessChannelId}`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}
}