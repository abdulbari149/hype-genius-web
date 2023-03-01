import React from 'react'

import Image from 'next/image'
import dropdown from "@/assets/home/dpdown.webp"

import Link from 'next/link'

function Header() {
    
  return (
    <>
    <div className='bg-[#F2F6FA] flex flex-row h-[150px] '>
      <div className="mt-16 mx-20">
       <Image src={require("@/assets/logos/hype-genius-logo-with-text.png")} width={200} alt={"HypeGenius Logo"}/> 
      </div>
      <div className="mt-[68px]">
        <ul className='flex flex-row w-[100%] relative left-[900px] justify-end '>
          <Link href={"#HowItWorks"}>
            <li className='mx-8  font-bold cursor-pointer'>How it works
            <Image src={dropdown} width={15} height={10} className="relative left-[102px] bottom-4" alt={"DropDown"} />
            </li>
            </Link>
          
            
            <li className='mx-8 font-bold cursor-pointer '>Contact us</li>
            <Link href="/auth/signin">
            <li className='mx-8 font-bold cursor-pointer'>Sign in</li>
            </Link>
            <button className='mx-8 font-bold  bg-[#EF539E] text-[#F2F6FA] w-[110px] h-[40px] rounded-2xl -mt-2 hover:bg-pink-400'>
                Get Started
            </button>
        </ul>

      </div>
      
    </div>
    </>
  )
}

export default Header
