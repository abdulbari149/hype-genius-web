import Image from "next/image";
import React from "react";
import Contract from "./Contract";
import InputFields from "./InputFields";
import Tags from "./Tags";

const EditInfluencerModal = () => {
  
  return (
    <div className="flex justify-center ">
      <div className=" shadow-2xl rounded-xl w-[1000px] h-[900px]  mt-10 ml-10  px-20 ">
        <div className="flex justify-between py-6  mt-2">
          <p className="font-semibold text-xl">Edit Influencer Details</p>
          <div className="bg-[#E7E7E7]/40 w-[27px] h-[25px] flex items-center rounded-md justify-center pr-1">
            <Image
              src={require("@/assets/icons/x.png")}
              alt="cancel"
              className="w-[12px] h-[12px] opacity-70 cursor-pointer "
            />
          </div>
        </div>
       <InputFields/>
       <Contract/>
       <Tags/>
      </div>
    </div>
  );
};

export default EditInfluencerModal;
