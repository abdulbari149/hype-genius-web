import { getLoginStatus } from "@/modules/auth/core/slice";
import { BusinessApi } from "./../../../api/BusinessApi";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

export const useMyBusiness = () => {
	const loggedIn = useSelector(getLoginStatus);
	const business = useQuery("my-business", {
		queryFn: BusinessApi.getMyBusiness,
		enabled: loggedIn,
	});
	return business.data;
};
