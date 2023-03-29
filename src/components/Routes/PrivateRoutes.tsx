import { useUser } from "@/modules/auth/hooks/useUser";
import { useRouter } from "next/router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Loading from "../Loading";

const PrivateRoutes: React.FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter();
	const { isError, isLoading } = useUser({
		onError(err) {
			if (err instanceof Error) {
				router.replace("/auth/login");
			}
		},
	});

	if (isLoading || isError) {
		return <Loading />;
	}
	return <>{children}</>;
};

export default PrivateRoutes;
