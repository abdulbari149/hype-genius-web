import { AuthApi } from "@/api/AuthApi";
import router, { useRouter } from "next/router";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { setUser } from "../core/slice";
import { ACCESS_TOKEN, REFRESH_TOKEN, handleError } from "../core/utils";
import { useDispatch } from "react-redux";

export const useLogin = () => {
  const dispatch = useDispatch();
	const router = useRouter();
  const login = useMutation("login", {
		mutationFn: AuthApi.login,
		onSuccess(data, variables, context) {
			localStorage.setItem(ACCESS_TOKEN, data.data.access_token);
			localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token)
			dispatch(setUser({ user:  data.data.user }))
			toast(data.message, { type: "success" });
			if (data.data.user.role === "business_admin") {
				router.replace("/dashboard/business");
			} else if (data.data.user.role === "influencer") {
				router.replace("/dashboard/influencer");
			}
		},
		onError(error, variables, context) {
			const message = handleError(error);
			toast(message, { type: "error" });
		},
	});
  return login;
}