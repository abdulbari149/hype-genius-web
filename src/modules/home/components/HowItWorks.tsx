import React from "react";
import leftvec from "@/assets/home/vecleft.png";
import rightvec from "@/assets/home/vecright.png";
import Image from "next/image";


function HowItWorks() {
  return (
    
      <div className="bg-white w-[100%] h-[600px] absolute top-[750px]" id="HowItWorks">
        <Image
          src={leftvec}
          width={250}
          height={200}
          alt=""
          className=" absolute top-[-20px] left-[35%]"
        />
        <Image
          src={rightvec}
          width={200}
          height={200}
          alt=""
          className=" absolute top-[-20px] left-[54%]"
        />
        <div>
          <h1 className="font-bold text-xl bg-[#50EAFF]/50 rounded-2xl w-[410px] px-3 py-3 absolute top-[220px] left-[24%]">
            I already work with the Youtube Creators
          </h1>
          <div className=" w-[24%] h-[450px] absolute top-[320px] left-[460px]">
            <div className="text-xl leading-2 px-2 ">
              Great! Our software can really help you out then...
              <p className="text-xl leading-2 px-2 mt-6">
                It allows you to seamlessly keep track of all the Youtube
                Channels you sponsor :)
              </p>
              <li className="text-xl leading-2 px-2 mt-6">
                Track Metrics about sponsored videos (Views, ROAS, Total Spent,
                etc.{" "}
              </li>
              <li className="text-xl leading-2 px-2 mt-6">
                Manage which partners have been paid, or if payments are due
              </li>
              <li className="text-xl leading-2 px-2 mt-6">
                Stay up to date with Contracts and Deals with Partners.
              </li>
              <li className="text-xl leading-2 px-2 mt-6">
                {" "}
                Instant ROAS grading (are you getting a good ROI from your
                partners)
              </li>
            </div>
          </div>
          <div>
            <button className="w-[160px] h-[50px] border-pink-500 rounded-2xl border-solid border-[5px] absolute top-[790px] left-[500px] text-xl font-extrabold ">
              Preview Video
            </button>
            <button className="w-[150px] h-[50px] bg-pink-500 rounded-2xl absolute top-[790px] left-[690px] text-xl font-bold text-white">
              Book Demo
            </button>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-xl bg-[#93FCB2] rounded-2xl w-[380px] px-3 py-3 absolute top-[220px] left-[54%]">
            I want to work with Youtube Creators
          </h1>
          <div className=" w-[24%] h-[650px] absolute top-[320px] left-[54%]">
            <div className="text-xl leading-2 px-2 ">
              Awesome! Well, we just happen to have a Full Course & Software to
              help with exactly that!
              <p className="text-xl leading-2 px-1 mt-1">
                Here’s how it works: )
              </p>
              <h1 className="font-bold text-xl mt-6">Step1:</h1>
              <p className="text-xl leading-2  mt-1">
                Go through our Step-by-step course (it goes over how to find
                creators, reach out to them, sponsor them, manage/ pay them, and
                how to be EXTREMELY profitable doing it)
              </p>
              <h1 className="font-bold text-xl mt-6">Step2:</h1>
              <p className="text-xl leading-2  mt-1">
                Onboard channels to sponsors
              </p>
              <h1 className="font-bold text-xl mt-6">Step3:</h1>
              <p className="text-xl leading-2  mt-1">
                They promote your product / service
              </p>
              <h1 className="font-bold text-xl mt-6">Step4:</h1>
              <h1 className=" text-xl mt-2 bg-[#FFDE2E]/50 w-[75px] rounded-lg px-1">
                PROFIT!
              </h1>
              <p className="text-xl leading-2 px-2 mt-4">
                {" "}
                Best of all we offer an insane Guarantee...
              </p>
              <p className="text-xl leading-2 px-2 mt-6 font-bold">
                We guarantee you’ll get a 3X ROAS (Return on Ad Spend) within 3
                months Or we’ll refund every cent you’ve paid!
              </p>
              <button className="w-[170px] h-[50px] bg-pink-500 rounded-2xl absolute top-[700px] left-[170px] text-xl font-bold text-white">
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>
      
      
    
  );
}

export default HowItWorks;
