import React from "react";
import greenEllipse from "@/assets/icons/greenEllipse.png";
import tick from "@/assets/icons/tick.png";
import Image from "next/image";
import InvoiceStatus from "./InvoiceStatus";

const invoiceDates = ["June 29th, 2022", "June 29th, 2022"];

const InvoiceHistory = () => {
	return (
		<div
			className="bg-[#FFFFFF]/50  h-fit w-[600px] shadow-xl py-6 px-8 mt-7 rounded-xl"
			style={{
				boxShadow:
					"0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)",
			}}
		>
			<div>
				<p className="font-semibold">Invoice History</p>
				<div className="flex flex-col mt-[15px] gap-3">
					<div className="flex flex-row items-center max-w-[50%] justify-between">
						<p>June 29th, 2022</p>
						<InvoiceStatus />
					</div>
					<div className="flex flex-row items-center max-w-[50%] justify-between">
						<p>June 29th, 2022</p>
						<InvoiceStatus />
					</div>
          <div className="flex flex-row items-center max-w-[50%] justify-between">
						<p>June 29th, 2022</p>
						<InvoiceStatus />
					</div>
          <div className="flex flex-row items-center max-w-[50%] justify-between">
						<p>June 29th, 2022</p>
						<InvoiceStatus />
					</div>
          <div className="flex flex-row items-center max-w-[50%] justify-between">
						<p>June 29th, 2022</p>
						<InvoiceStatus />
					</div>
          <div className="flex flex-row items-center max-w-[50%] justify-between">
						<p>June 29th, 2022</p>
						<InvoiceStatus />
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvoiceHistory;
