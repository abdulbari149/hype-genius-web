import React from "react";
import Image from "next/image";
import downArrow from "@/assets/icons/downArrow.png";
import AccountSettings from "./AccountSettings";
import BillingsSettings from "./BillingsSettings";
import SettingsOnboarding from "./SettingsOnboarding";

interface settingsProps {}
const SettingsMain: React.FC<settingsProps> = () => {
  return (
    <>
      <div>
        <div className="bg-[#FFFFFF]/50  h-[171px] w-[550px] shadow-xl mt-[20px]  rounded-lg">
          <div className="flex  items-center h-[100px]">
            <p className="px-9  font-semibold">Default Currency</p>

            <button className=" flex items-center gap-2 justify-center px-2 py-2 bg-[#EAEEF3] w-[79px] h-fit rounded-xl ">
              <span>CAD</span>
              <Image
                src={downArrow}
                alt="Down Arrow"
                width={10}
                className="mt-1"
              />
            </button>
          </div>
          <div className="flex justify-start items-center h-[100px] pb-9">
            <p className="px-9 py-4 font-semibold">
              Customer LTV(used to track ROAS)
            </p>
            <button className="flex items-center gap-2 justify-center px-2 py-2  w-[110px] rounded-xl h-fit bg-[#EAEEF3] ">
              <span className="">$</span>
              <input
                placeholder="enter here"
                className="opacity-60 text-md w-[75px] bg-[#EAEEF3] "
              />
            </button>
          </div>
        </div>
        <AccountSettings />
        <BillingsSettings />
      </div>
      <SettingsOnboarding />
    </>
  );
};
export default SettingsMain;
