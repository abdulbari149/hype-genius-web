import { IBusiness } from "./../modules/auth/core/types";
import { Response, api } from "@/core/axios";
import { getAccessToken } from "@/modules/auth/core/utils";

export class BusinessApi {
	static async getMyBusiness(): Promise<Response<IBusiness>> {
		const token = getAccessToken();
		const result = await api.get("/business/current", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}

	static async getAllBusiness(): Promise<Response<IBusiness[]>> {
		const token = getAccessToken();
		const result = await api.get("/business", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	}
}
