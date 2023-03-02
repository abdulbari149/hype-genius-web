import React from 'react'
import Image from 'next/image'
import blacklogo from "@/assets/home/black.png"
import redlogo from "@/assets/home/red.png"
import whiteArrow from "@/assets/home/newwhite.png"
import Hand from "@/assets/home/point 2.png"


function Content() {
  return (
    
      <div className='bg-[#F2F6FA]  flex flex-row h-screen w-[100%] overflow-x-hidden'>
      <div className='bg-[#FFFFFF] w-[69%] h-[50%] flex mx-[15%] shadow-sm mt-12'>
        <div className=' flex justify-center '>
          <p className='font-bold text-3xl text-center mt-12 w-[60%] h-[5%] mx-[252px] '>Supercharge Your Marketing and<span className='text-pink-500 leading-[45px]'> Easily Achieve 6+ ROAS</span></p> </div>  
          <div className='w-[55%] h-[20%] mt-40 flex absolute left-[25%]'>
        <p className='text-xl mt-2'>Discover the Game-Changing Benefits of Partnering with <span className='text-pink-500 font-bold'>Youtube Creators</span> to Generate <span className='bg-[#2EFF68]/50 rounded-xl px-2 py-1'>High-Quality Leads and Sales</span> Growth with Our <span className='bg-[#FFDE2E]/50 rounded-xl px-2 leading-[45px] py-1'>Expert Influencer Marketing Solutions!</span></p>
        <div>
        <button className='font-bold text-white w-[160px] h-[50px] text-lg bg-pink-500 absolute top-28 left-[40%] rounded-2xl py-2 pr-3 '>Book A Call</button>
        <Image src={whiteArrow} width={17} height={5} className=" absolute top-[93%] left-[55%] ml-1" alt='Book a Call'/>
      </div>
      </div>  
      <div>
        <Image src={blacklogo} width={109} className=" absolute left-[12%] mt-12" alt='Youtube Logo Black'/>
        </div>  
        <div>
          <Image src={redlogo} width={140} className="absolute mt-48 right-[10%]" alt='Youtube Red Logo'/>
        </div>

      </div>
      <div>
          <Image src={Hand} width={60} className="absolute left-[34.5%] top-[89%]" alt='Hand Logo'/>
        </div>
        <div>

        </div>
      
      <div>
          <Image src={Hand} width={60} className="absolute left-[63%] top-[89%]" alt='Hand Logo'/>
        </div>
       <p className='text-4xl font-bold absolute top-[90%] left-[40%] '>Here&apos;s how it works</p>
      </div> 
      
      
  )
}

export default Content
