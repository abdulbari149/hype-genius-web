import React from "react";
import leftvec from "@/assets/home/vecleft.png";
import rightvec from "@/assets/home/vecright.png";
import Image from "next/image";


function HowItWorks() {
  
  return (
    
    <div className="bg-white w-screen h-[100%] absolute top-[100%] " id="HowItWorks">
    <Image
      src={leftvec}
      width={250}
      height={200}
      className=" absolute top-[2%] left-[32%]"
      alt="left vec"
    />
    <Image
      src={rightvec}
      width={200}
      height={200}
      alt="right vec"
      className=" absolute top-[2%] left-[56%]"
    />
    <div>
      <p className="font-bold text-lg bg-[#50EAFF]/50 rounded-2xl w-[25%] px-3 py-3 absolute top-[35%] left-[24%]">
        I already work with the Youtube Creators
      </p>
      <div className=" w-[28%] h-[30%] absolute top-[48%] left-[20%]">
        <div className="text-lg leading-2 px-2 ">
          Great! Our software can really help you out then...
          <p className="text-lg leading-2 px-2 mt-6">
            It allows you to seamlessly keep track of all the Youtube
            Channels you sponsor :)
          </p>
          <li className="text-lg leading-2  mt-6 ml-5">
            Track Metrics about sponsored videos (Views, ROAS, Total Spent,
            etc.{" "}
          </li>
          <li className="text-lg leading-2  mt-6 ml-5">
            Manage which partners have been paid, or if payments are due
          </li>
          <li className="text-lg leading-2  mt-6 ml-5">
            Stay up to date with Contracts and Deals with Partners.
          </li>
          <li className="text-lg leading-2  mt-6 ml-5">
            {" "}
            Instant ROAS grading (are you getting a good ROI from your
            partners)
          </li>
        </div>
      </div>
      <div>
        <button className="w-[160px] h-[50px] border-pink-500 rounded-2xl border-solid border-[5px] absolute top-[120%] left-[20%] text-lg font-extrabold ">
          Preview Video
        </button>
        <button className="w-[150px] h-[50px] bg-pink-500 rounded-2xl absolute top-[120%] left-[33%] text-lg font-bold text-white">
          Book Demo
        </button>
      </div>
    </div>

    <div>
      <p className="font-bold text-lg bg-[#93FCB2] rounded-2xl w-[24%] px-3 py-3 absolute top-[35%] left-[58%]">
        I want to work with Youtube Creators
      </p>
      <div className=" w-[28%] h-fit absolute top-[48%] left-[55%]">
        <div className="text-lg leading-2 px-2 ">
          Awesome! Well, we just happen to have a Full Course & Software to
          help with exactly that!
          <p className="text-lg leading-2  mt-6">
            Here’s how it works: )
          </p>
          <p className="font-bold text-lg mt-6">Step1:</p>
          <p className="text-lg leading-2  mt-1">
            Go through our Step-by-step course (it goes over how to find
            creators, reach out to them, sponsor them, manage/ pay them, and
            how to be EXTREMELY profitable doing it)
          </p>
          <p className="font-bold textlgl mt-6">Step2:</p>
          <p className="text-lg leading-2  mt-1">
            Onboard channels to sponsors
          </p>
          <p className="font-bold text-lg mt-6">Step3:</p>
          <p className="text-lg leading-2  mt-1">
            They promote your product / service
          </p>
          <p className="font-bold text-lg mt-6">Step4:</p>
          <p className=" text-lg mt-2 bg-[#FFDE2E]/50 w-fit rounded-lg px-1">
            PROFIT!
          </p>
          <p className="text-lg leading-2  mt-4">
            {" "}
            Best of all we offer an insane Guarantee...
          </p>
          <p className="text-lg leading-1 mt-6 font-bold">
            We guarantee you’ll get a 3X ROAS (Return on Ad Spend) within 3
            months Or we’ll refund every cent you’ve paid!
          </p>
          <button className="w-[180px] h-[50px] bg-pink-500 rounded-2xl absolute top-[110%] left-[25%] text-lg font-bold text-white">
            Book a Call
          </button>
        </div>
      </div>
    </div>
  </div>
      
    
  );
}

export default HowItWorks;
