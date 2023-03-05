import React from "react";
import greenEllipse from "@/assets/icons/greenEllipse.png";
import tick from "@/assets/icons/tick.png";
import Image from "next/image";

const InvoiceHistory = () => {
  var FontAwesomeIcon = require("react-fontawesome");
  return (
    <div className="bg-[#FFFFFF]/50  h-[180px] w-[600px] shadow-xl py-6 px-8 mt-7 rounded-xl">
      <div>
        <p className="font-semibold">Invoice History</p>
        <div className="grid grid-rows-2 grid-flow-col gap-4 py-4">
          <p>June 29th, 2022</p>
          <p>June 29th, 2022</p>
          <div className="flex items-center  mr-52">
            <Image src={greenEllipse} alt="Checked" />
            <Image
              src={tick}
              alt={"Checked"}
              className="text-center relative right-[11.5px]"
            />
            <p className="text-[#78E176]">Paid</p>
          </div>
          <div className="flex items-center mr-52">
            <Image src={greenEllipse} alt="Checked" />
            <Image
              src={tick}
              alt={"Checked"}
              className="text-center relative right-[11.5px]"
            />
            <p className="text-[#78E176]">Paid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHistory;
