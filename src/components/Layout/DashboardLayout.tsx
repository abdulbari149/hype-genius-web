import React, { PropsWithChildren } from "react";
import Sidebar from "../Sidebar";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className="flex flex-row w-screen gap-5 p-3 h-screen overflow-hidden bg-[#F2F6FA]">
			<Sidebar />
			{children}
		</main>
	);
};

export default DashboardLayout;
