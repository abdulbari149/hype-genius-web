import { useUser } from "@/modules/auth/hooks/useUser";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect } from "react";

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
	if (isLoading || isSuccess) return <div>loading...</div>;
	return <>{children}</>;
};

export default AuthRoutes;
