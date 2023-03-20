import { Response, api } from "@/core/axios";
import {
	BusinessSignupApiData,
	BusinessSignupData,
	ChannelSignupApiData,
	ChannelSignupData,
	LoginApiData,
	LoginData,
	MeApiData,
} from "../modules/auth/core/types";
import { getAccessToken } from "../modules/auth/core/utils";

export class AuthApi {
	static registerBusiness = async (
		data: Omit<BusinessSignupData, 'passwordAgain'>
	): Promise<Response<BusinessSignupApiData>> => {
		const result = await api.post("/auth/business", data);
		return result.data;
	};

	static registerChannel = async (
		data: Omit<ChannelSignupData, 'passwordAgain'> & { token: string }
	): Promise<Response<ChannelSignupApiData>> => {
		const { token, ...body } = data;
		const result = await api.post(`/auth/channel/${token}`, body);
		return result.data;
	};

	static me = async (): Promise<Response<MeApiData>> => {
		const token = getAccessToken();
		const result = await api.get("/auth/me", {
			headers: { Authorization: `Bearer ${token}` },
		});
		return result.data;
	};

	static login = async (data: LoginData): Promise<Response<LoginApiData>> => {
		const result = await api.post("/auth/login", data, {
			withCredentials: true,
		});
		return result.data;
	};

	static refreshToken = async (token: string) => {
		try {
			const result = await api.get("/auth/refresh", {
				headers: { Authorization: `Bearer ${token}` },
			});
			return result.data;
		} catch (error) {
			throw error;
		}
	};
}
