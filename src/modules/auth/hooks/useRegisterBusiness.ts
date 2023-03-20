import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { AuthApi } from "../../../api/AuthApi";
import { ACCESS_TOKEN, handleError, REFRESH_TOKEN } from "../core/utils";
import { toast } from "react-toastify";
import { Response } from "@/core/axios";
import { BusinessSignupApiData } from "../core/types";
import { useDispatch } from "react-redux";
import { setAuthState, setUser } from "../core/slice";

const useRegisterBusiness = () => {
	const router = useRouter();
	const dispatch = useDispatch();

	const registerBusiness = useMutation<
		Response<BusinessSignupApiData>,
		AxiosError,
		any
	>("register-business", {
		mutationFn: AuthApi.registerBusiness,
		onSuccess(data, variables, context) {
			localStorage.setItem(ACCESS_TOKEN, data.data.access_token);
			localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token);
			toast(data.message, { type: "success" });
			router.replace("/dashboard/business");
		},
		onError(error, variables, context) {
			const message = handleError(error);
			toast(message, { type: "error" });
		},
	});
	return registerBusiness;
};

export default useRegisterBusiness;
