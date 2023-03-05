import React from "react";

const SettingsOnboarding = () => {
  return (
    <div className="flex  bg-[#FFFFFF]/50 rounded-lg  w-[450px] h-[120px] mt-[20px] ml-4 shadow-xl px-9 py-6">
      <div>
        <p className="font-semibold ">Onboarding Link</p>
        <div className="flex gap-3 mt-4">
          <p className="text-[#5C6FFF] w-fit cursor-pointer">
            hypegenius.com/businessnamehere
          </p>
          <button className="bg-[#EF539E] w-[60px] h-[31px] rounded-xl px-2 text-white ml-4 ">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsOnboarding;
