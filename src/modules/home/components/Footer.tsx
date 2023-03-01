import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/home/My project.png"

function Footer() {
  return (
    <>
    <div>
      <h1 className='text-4xl font-bold absolute top-[210%] mx-[650px] w-[740px]' >Get started now and leverage the power of <span className='bg-[#FFDE2E]/50 mx-40'>influencer marketing!</span></h1>
    </div>
    <div className='bg-[#F2F6FA] w-[100%] h-[40%] absolute top-[230%] '>
        <div className='flex flex-row absolute left-[450px]'>
        <div className='flex flex-col mx-24 mt-16 w-[200px] '>
            <h1 className='text-lg font-bold'>Legal</h1>
            <h1 className='text-lg w-[300px]'>Terms & Conditions</h1>
            <h1 className='text-lg '>Privacy Policy</h1>
            <h1 className='text-lg '>Refund Policy</h1>
        </div>
        <div className='flex flex-col  mt-16 w-[200px] '>
            <h1 className='text-lg font-bold'>Product</h1>
            <h1 className='text-lg '>Book a Demo</h1>
    
        </div>
        <div className='flex flex-col  mt-16  w-[200px]'>
            <h1 className='text-lg font-bold'>Company</h1>
            <h1 className='text-lg '>About us</h1>
    
        </div>
        <div className='flex flex-col  mt-16   w-[200px]'>
            <h1 className='text-lg font-bold'>Learn</h1>
            <h1 className='text-lg '>Demo Video</h1>
            <h1 className='text-lg '>Docs</h1>
            
        </div>
        </div>
        <div>
            <Image src={Logo} width={50} className="absolute left-[550px] top-[80%] " alt=''/>
        </div>
        <div className='text-lg absolute left-[850px] top-[80%] opacity-70'>
            <p>© 2023 HypeGenius, LLC. All rights reserved.</p>
        </div>

    </div>
    </>
  )
}

export default Footer
