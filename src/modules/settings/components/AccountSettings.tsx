import Field from "@/components/Field";
import React from "react";

const AccountSettings = () => {
  return (
    <div className="flex flex-col bg-[#FFFFFF]/50 py-6 h-[250px] w-full px-9 shadow-xl gap-2 mt-6 rounded-lg">
      <p className="font-semibold">Account</p>
      <p>Manage your account details</p>
      <label htmlFor="Email" className="font-semibold">
        Email
      </label>
      <input
        type={"email"}
        name="email"
        id="email"
        placeholder="test123@gmail.com"
        className="w-[250px] py-1 px-2 bg-[#EAEEF3] rounded-xl"
      />
      <div className="flex gap-2 my-3">
        <button className="bg-[#EF539E] w-[160px] rounded-xl text-white h-[33px]">
          Save Account Details
        </button>
        <button className="bg-[#D7D7D7] w-[160px]  rounded-xl ">
          Discard Changes
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;
