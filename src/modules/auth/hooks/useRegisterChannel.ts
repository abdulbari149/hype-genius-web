import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { AuthApi } from "../../../api/AuthApi";
import { ACCESS_TOKEN, handleError, REFRESH_TOKEN } from "../core/utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthState, setUser } from "../core/slice";

const useRegisterChannel = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const registerChannel = useMutation("register-channel", {
		mutationFn: AuthApi.registerChannel,
		onSuccess(data, variables, context) {
			localStorage.setItem(ACCESS_TOKEN, data.data.access_token);
			localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token);
			toast(data.message, { type: "success" });
			router.replace("/dashboard/influencer");
		},
		onError(error, variables, context) {
			const message = handleError(error);
			toast(message, { type: "error" });
		},
	});
	return registerChannel;
};

export default useRegisterChannel;
