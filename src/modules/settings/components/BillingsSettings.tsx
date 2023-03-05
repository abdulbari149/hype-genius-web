import React from "react";

const BillingsSettings = () => {
  return (
    <div className="flex flex-col bg-[#FFFFFF]/50 h-[155px] w-full px-9 shadow-xl gap-2 rounded-lg py-6 mt-6">
      <p className="font-semibold">Subscription & Billing</p>
      <p>
        You are currently subscribed to the{" "}
        <span className="font-semibold">Pro plan at $78 monthly</span>
      </p>
      <button className="bg-[#EF539E] w-[160px] rounded-xl text-white h-[33px] my-2 py-1">
        Manage Subscription
      </button>
    </div>
  );
};

export default BillingsSettings;
