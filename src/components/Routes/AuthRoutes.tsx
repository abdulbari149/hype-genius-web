import { useUser } from "@/modules/auth/hooks/useUser";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";
import Loading from "../Loading";

const AuthRoutes: React.FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const { isSuccess, isLoading } = useUser({
		onSuccess(data) {
			if (data.data.user.role === "business_admin") {
				router.replace("/dashboard/business");
			} else if (data.data.user.role === "influencer") {
				router.replace("/dashboard/influencer");
			}
		},
	});
	if (isLoading || isSuccess) return <Loading />;
	return <>{children}</>;
};

export default AuthRoutes;
