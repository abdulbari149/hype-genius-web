import React from 'react'

const Tags = () => {
  return (
    <div>
    <div className='flex py-6'><p className='font-semibold text-2xl'>Tags</p><button className='bg-[#7187FB]/50  px-2 rounded-lg w-fit text-[10px] h-[22px] mt-2 ml-2' >Partner</button></div>
    <div className='grid grid-flow-col grid-col-2 grid-rows-4 justify-start gap-y-5 gap-x-28'>
        
      <button className='bg-[#7187FB80]/50 py-1 px-2 rounded-lg w-fit'>Partner</button>
      <button className='bg-[#FF2E2E80]/50 py-1 px-2 rounded-lg w-fit'>Lost Partner</button>
      <button className='bg-[#FFDE2E80]/50 py-1 px-2 rounded-lg w-fit'>Emailed</button>
      <button className='bg-[#2EFF6880]/50 py-1 px-2 rounded-lg w-fit'>Onboarding</button>
      <button className='bg-[#2EF2FF80]/50 py-1 px-2 rounded-lg w-fit'>Affiliate Only</button>
      <p className='text-[#EF539E]'>+ Add / &nbsp;Remove tags</p>
    </div>
    </div>
  )
}

export default Tags
