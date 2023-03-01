import React from 'react'
import Image from 'next/image'
import blacklogo from "@/assets/home/black.png"
import redlogo from "@/assets/home/red.png"
import whiteArrow from "@/assets/home/newwhite.png"
import Hand from "@/assets/home/point 2.png"


function Content() {
  return (
    <>
    <div className='bg-[#F2F6FA]  flex flex-row h-[800px] w-[100%]'>
      <div className='bg-[#FFFFFF] w-[1200px] h-[400px] flex mx-[400px] shadow-sm '>
        <div className=' flex justify-center'>
          <h1 className='font-bold text-3xl text-center mt-12 w-[630px] h-[80px] mx-[250px] '>Supercharge Your Marketing and<span className='text-pink-500 leading-[45px]'> Easily Achieve 6+ ROAS</span></h1> </div>  
          <div className='w-[800px] h-[200px] mt-40 flex absolute left-[580px]'>
        <h1 className='text-xl mt-2'>Discover the Game-Changing Benefits of Partnering with <span className='text-pink-500 font-bold'>Youtube Creators</span> to Generate <span className='bg-[#2EFF68]/50 rounded-xl px-2 py-1'>High-Quality Leads and Sales</span> Growth with Our <span className='bg-[#FFDE2E]/50 rounded-xl px-2 leading-[45px] py-1'>Expert Influencer Marketing Solutions!</span></h1>
        <div>
        <button className='font-bold text-white w-[148px] h-[50px] text-lg bg-pink-500 absolute top-28 left-[40%] rounded-2xl py-2 '>Book A Call</button>
        <Image src={whiteArrow} width={17} height={5} className=" absolute top-[129px] left-[55%] mx-[7px]"  alt='abc'/>
      </div>
      </div>  
      <div>
        <Image src={blacklogo} width={129} className=" absolute left-[360px] mt-12" alt='abc'/>
        </div>  
        <div>
          <Image src={redlogo} width={177} className="absolute mt-48" alt='abc'/>
        </div>

      </div>
      <div>
          <Image src={Hand} width={60} className="absolute left-[36%] top-[69%]" alt='abc'/>
        </div>
        <div>

        </div>
      
      <div>
          <Image src={Hand} width={60} className="absolute left-[57%] top-[69%]" alt=""/>
        </div>
       <h1 className='text-4xl font-bold absolute top-[70%] left-[40%] '>Here's how it works</h1>
      </div> 
    
      </>
  )
}

export default Content
