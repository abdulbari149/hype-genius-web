import React from 'react'

const SubscriptionBilling: React.FC = () => {
	return (
		<div
			className="bg-[#FFFFFF]/50 shadow-xl rounded-lg px-3 py-[40px] flex flex-col px-9 gap-2"
			style={{
				boxShadow:
					'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
			}}
		>
			<div className="flex justify-between">
				<p className="font-semibold text-[18px]">Current Plan</p>
				<button className="bg-white border-black border-2 text-[14px] px-2 py-1 font-semibold  rounded-xl">
					Cancel Plan
				</button>
			</div>
			<div className="text-[17px] font-light flex flex-col gap-1">
				<p>
					Pro <span className="px-3">|</span>$ 78 monthly
				</p>
				<p>Next payment on August 29th 2023</p>
			</div>
			<button className="bg-[#EF539E] max-w-fit px-4 py-3 rounded-xl mt-[20px] text-white relative">
				Upgrade to Yearly
				<span className="bg-[#D7D7D7] text-[10px]  text-[#272830] absolute top-0 right-0 translate-x-[30%] -translate-y-[50%] block w-fit px-2 py-1 rounded-lg font-normal">
					Save 30%
				</span>
			</button>
		</div>
	)
}
export default SubscriptionBilling
