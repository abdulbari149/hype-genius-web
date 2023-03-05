import React from "react";
import InvoiceHistory from "./InvoiceHistory";
import PaymentMethod from "./PaymentMethod";
interface BillingProps {}
const Subscription_Billing: React.FC<BillingProps> = () => {
  return (
    <div className="flex flex-col ">
      <button className="bg-[#D7D7D7] w-[60px] py-1  rounded-xl">Back</button>
      <div className="bg-[#FFFFFF]/50  h-[220px] w-[600px] shadow-xl mt-[20px]  rounded-lg flex flex-col px-9 gap-1 ">
        <div className="flex justify-between mt-6">
          <p className="font-semibold ">Current Plan</p>
          <button className="bg-white border-black border-2 text-xs h-[33px] w-[85px]  font-semibold  rounded-xl">
            Cancel Plan
          </button>
        </div>

        <p>
          Pro <span className="px-3 ">|</span>$ 78 monthly
        </p>
        <p>Next payment on August 29th 2023</p>

        <div className="flex mt-4 ">
          <button className="bg-[#EF539E] w-[170px]  rounded-xl  text-white py-2 ">
            Upgrade to Yearly
          </button>
          <button className="bg-[#D7D7D7] w-[60px] text-xs  rounded-lg  h-[24px] relative right-6 bottom-3 font-semibold">
            Save 30%
          </button>
        </div>
      </div>
      <PaymentMethod />
      <InvoiceHistory />
    </div>
  );
};
export default Subscription_Billing;
