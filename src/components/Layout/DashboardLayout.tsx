import React, { PropsWithChildren } from "react";
import Sidebar from "../Sidebar";
import PrivateRoutes from "../Routes/PrivateRoutes";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<main id="root" className="flex flex-row w-screen gap-5 p-3 h-screen overflow-hidden bg-[#F2F6FA]">
			<Sidebar />
			<PrivateRoutes>{children}</PrivateRoutes>
		</main>
	);
};

export default DashboardLayout;
