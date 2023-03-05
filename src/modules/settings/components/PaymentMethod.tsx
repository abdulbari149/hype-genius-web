import Image from "next/image";
import React from "react";

const PaymentMethod = () => {
  return (
    <div className="bg-[#FFFFFF]/50  h-[180px] w-[600px] shadow-xl py-6 px-8 mt-7 rounded-xl">
      <p className="font-semibold">Payment Method</p>
      <div className="">
        <div className="flex items-center py-3">
          <Image
            src={require("@/assets/icons/creditcard.png")}
            alt="creditcard"
          />
          <Image
            src={require("@/assets/icons/Ellipse.png")}
            alt="Ellipse"
            width={5.61}
          />
          <Image
            src={require("@/assets/icons/Ellipse.png")}
            alt="Ellipse"
            width={5.61}
          />
          <Image
            src={require("@/assets/icons/Ellipse.png")}
            alt="Ellipse"
            width={5.61}
          />
          <Image
            src={require("@/assets/icons/Ellipse.png")}
            alt="Ellipse"
            width={5.61}
          />
          <p className="opacity-40 text-xs">&nbsp;5360</p>
          <button className="font-semibold text-[10px] bg-[#D7D7D7] px-2  h-[24px] rounded-lg mx-4 ">
            Default
          </button>
          <p className="opacity-60 ml-6">Expires 03/2025</p>
          <Image
            src={require("@/assets/icons/x.png")}
            alt=""
            height={13}
            width={7}
            className="ml-4"
          />
        </div>
        <p className="opacity-60">+ Add Payment method</p>
      </div>
    </div>
  );
};

export default PaymentMethod;
