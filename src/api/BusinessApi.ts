import {
	GetMyBusiness,
	GetAllBusineess,
	GetInfluencers,
	GetURLToAddInfluencer,
} from "./type";
import { Response, api } from "@/core/axios";
import { getAccessToken } from "@/modules/auth/core/utils";

export class BusinessApi {
	static async getMyBusiness(): Promise<GetMyBusiness> {
		const token = getAccessToken();
		const result = await api.get("/business/current", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}

	static async getAllBusiness(): Promise<GetAllBusineess> {
		const token = getAccessToken();
		const result = await api.get("/business", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}

	static async getInfluencers(): Promise<GetInfluencers> {
		const token = getAccessToken();
		const result = await api.get("/business/influencers", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}

	static async getURLToAddInfluencer(): Promise<GetURLToAddInfluencer> {
		const token = getAccessToken();
		const result = await api.get("/channels/influencer/onboarding", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}
}
