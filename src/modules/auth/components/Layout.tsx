import React from 'react'
import Logo from "@/assets/home/HypeGenius logo.png"
import Image from 'next/image'
import whiteArrow from "@/assets/home/newwhite.png"

function Layout(props: { title: string |  React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; label1: string |  React.ReactFragment | React.ReactPortal | null | undefined; placeholder1: string | undefined; label2: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; placeholder2: string | undefined }) {
  
  return (
    <>
    <div className='flex flex-nowrap'>
    <div className='bg-[#EF539E]  w-1/2 h-screen'>
      
    </div>
    <div className='bg-[#F2F6FA]  w-1/2 h-screen '>
      <div className='absolute left-[67%] top-[5%] '>
        <Image src={Logo} width={250} alt="logo" />
      </div>
      <div className='text-center mt-[13%] font-bold text-3xl'>
        <p>{props.title}</p>
      </div>
      
      <div><p className=' text-md absolute left-[68%] top-[21%]'>Fill out the information below:)</p>
      </div>
      
     <div className='flex flex-wrap justify-between   '>
          <form action="/send-data-here" method="post" className='flex flex-col w-[28%] justify-center h-[600px] ml-[20%] -mt-[10%] '>
      <label htmlFor="first" className='mt-[5%] font-semibold'>First name:</label>
      <input type="text" id="first" name="first" placeholder='Elon' className='opacity-70 rounded-xl text-md py-1 px-4 shadow-xl mt-2' />
      
      <label htmlFor="email" className='mt-[6%] font-semibold'>Email:</label>
      <input type='email' id="email" name="email"  placeholder='ElonMusk@gmail.com' className='opacity-70 rounded-lg text-md py-1 px-4 shadow-xl mt-3' />
      <label htmlFor="password" className='mt-[6%] font-semibold'>Password:</label>
      <input type="password" id="password" name="password"  placeholder='password' className='opacity-70 rounded-lg text-md py-1 px-4 shadow-xl mt-3' />
      <label htmlFor="business name" className='mt-[6%] font-semibold'>{props.label1}</label>
      <input type="text" id="business name" name="business name" placeholder={props.placeholder1} className='opacity-70 rounded-lg text-md py-1 px-4 shadow-xl mt-3'/>
      
    </form>
    <form action="/send-data-here" method="post" className='flex flex-col w-[28%] justify-center h-[600px] mr-[15%]  -mt-[10%]  '>
      <label htmlFor="first" className='mt-[6%] font-semibold'>First name:</label>
      <input type="text" id="first" name="first" placeholder='Elon' className='opacity-70 rounded-xl text-md py-1 px-4 shadow-xl mt-3' />
      
      <label htmlFor="email" className='mt-[5%] font-semibold'>Email:</label>
      <input type='email' id="email" name="email"  placeholder='ElonMusk@gmail.com' className='opacity-70 rounded-lg text-md py-1 px-4 shadow-xl mt-3' />
      <label htmlFor="password" className='mt-[6%] font-semibold'>Password:</label>
      <input type="password" id="password" name="password"  placeholder='password' className='opacity-70 rounded-lg text-md py-1 px-4 shadow-xl mt-3' />
      <label htmlFor="business name" className='mt-[6%] font-semibold'>{props.label2}</label>
      <input type="text" id="business name" name="business name"  placeholder={props.placeholder2} className='opacity-70 rounded-lg text-md py-1 px-4 shadow-xl mt-3'/>
      
    </form>    
    <div className=''>
    <button className='font-bold text-white w-[120px] h-[50px] text-lg bg-pink-500  rounded-xl py-1 pr-1  absolute right-[20%] top-[80%]'>Signup</button>
        {/* <Image src={whiteArrow} width={17} height={5} className=" absolute top-[91%] left-[55%] ml-1" alt='Book a Call'/> */}
      </div>
      <div className='ml-[35%] -mt-[3%] '>
        <p className='text-lg'>Already have an account? <span className='text-pink-600 text-lg font-bold'>Sign In</span></p>
      </div>
    </div>
    


    </div>
    </div>
    </>
  )
}

export default Layout
