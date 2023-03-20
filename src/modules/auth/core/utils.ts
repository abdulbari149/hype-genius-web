import { AxiosError } from "axios";

export const ACCESS_TOKEN = "access-token";
export const REFRESH_TOKEN = "refresh-token";

export const getAccessToken: () => string = () => {
	const token: unknown = localStorage?.getItem(ACCESS_TOKEN);
	if (!token) throw new Error("token doesnt exists");
	if (typeof token !== "string") throw new Error("invalid token");
	return token;
};

export const handleError = (error: unknown): string => {
	const defaultMessage = "Error occured. Please try again!";
	const isAxiosError = error instanceof AxiosError;
	if (!isAxiosError) return defaultMessage;
	if (!error.response?.data) return error.message;
	if (error.response.status === 422) {
		const errors = Object.values(error.response.data.errors);
		if (typeof errors[0] === "string") {
			return errors[0];
		} else {
			return defaultMessage;
		}
	}
	return error.response.data.message;
};
