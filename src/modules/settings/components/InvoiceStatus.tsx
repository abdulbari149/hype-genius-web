import Image from "next/image";
import React from "react";

const InvoiceStatus = () => {
	return (
		<div className="flex items-center">
			<Image src={require("@/assets/icons/greenEllipse.png")} alt="Checked" />
			<Image
				src={require("@/assets/icons/tick.png")}
				alt={"Checked"}
				className="text-center relative right-[11.5px]"
			/>
			<p className="text-[#78E176]">Paid</p>
		</div>
	);
};

export default InvoiceStatus;
