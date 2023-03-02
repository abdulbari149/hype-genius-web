import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/home/My project.png"

function Footer() {
  return (
<div className=''>
     <div>
      <p className='text-3xl font-bold absolute top-[275%] left-[30%] w-[50%]' >Get started now and leverage the power of <span className='bg-[#FFDE2E]/50 mx-40'>influencer marketing!</span></p>
    </div>
    <div className='bg-[#F2F6FA] w-screen h-[60%] absolute top-[300%] '>
        <div className='flex flex-row absolute left-[25%]  '>
        <div className='flex flex-col  mt-16   '>
            <p className='text-lg font-bold '>Legal</p>
            <p className='text-lg w-[160px]'>Terms & Conditions</p>
            <p className='text-lg '>Privacy Policy</p>
            <p className='text-lg '>Refund Policy</p>
        </div>
        <div className='flex flex-col  mt-16    ml-[20%] '>
            <p className='text-lg font-bold'>Product</p>
            <p className='text-lg w-[150px] '>Book a Demo</p>
    
        </div>
        <div className='flex flex-col  mt-16   ml-[20%] '>
            <p className='text-lg font-bold'>Company</p>
            <p className='text-lg '>About us</p>
    
        </div>
        <div className='flex flex-col mt-16  ml-[20%] '>
            <p className='text-lg font-bold w-[150px]'>Learn</p>
            <p className='text-lg '>Demo Video</p>
            <p className='text-lg '>Docs</p>
            
        </div>
        </div>
        <div>
            <Image src={Logo} width={40} className="absolute left-[27%] top-[70%] " alt='logo'/>
        </div>
        <div className='text-lg absolute left-[45%] top-[70%] opacity-70'>
            <p>© 2023 HypeGenius, LLC. All rights reserved.</p>
        </div>

    </div>
    </div>
   
  )
}

export default Footer
