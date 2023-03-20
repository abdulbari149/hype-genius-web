import { AxiosError } from "axios";
import { MeApiData } from "./../core/types";
import { setAuthState } from "@/modules/auth/core/slice";
import { UseQueryOptions, useQuery } from "react-query";
import { AuthApi } from "@/api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../core/slice";
import { Response } from "@/core/axios";
import { AppState } from "@/store";

export const useUser = (
	options: UseQueryOptions<Response<MeApiData>, AxiosError | Error>
) => {
	const dispatch = useDispatch();
	const { onSuccess = undefined, onError = undefined, ...props } = options;
	const loggedIn = useSelector((state: AppState) => state.auth.isLoggedIn);
	const user = useSelector((state: AppState) => state.auth.user);
	console.log(!loggedIn || !user);

	const userQuery = useQuery<Response<MeApiData>, AxiosError | Error>("user", {
		queryFn: AuthApi.me,
		retry: false,
		enabled: !loggedIn || !user,
		onSuccess(data) {
			dispatch(setAuthState({ isLoggedIn: true }));
			dispatch(setUser({ user: data.data.user }));
			if (!onSuccess) return;
			return onSuccess(data);
		},
		onError(err) {
			dispatch(setAuthState({ isLoggedIn: false }));
			dispatch(setUser({ user: null }));
			if (!onError) return;
			return onError(err);
		},
		...props,
	});

	return userQuery;
};
