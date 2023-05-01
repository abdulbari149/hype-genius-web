import Image from 'next/image'
import React from 'react'

const PaymentMethod = () => {
	return (
		<div
			className="bg-[#FFFFFF]/50  h-[180px] w-[600px] shadow-xl py-6 px-8 mt-7 rounded-xl"
			style={{
				boxShadow:
					'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
			}}
		>
			<p className="font-semibold">Payment Method</p>
			<div className="">
				<div className="flex items-center py-3 gap-1">
					<Image
						src={require('@/assets/icons/creditcard.png')}
						alt="creditcard"
					/>
					<Image
						src={require('@/assets/icons/Ellipse.png')}
						alt="Ellipse"
						width={6}
					/>
					<Image
						src={require('@/assets/icons/Ellipse.png')}
						alt="Ellipse"
						width={6}
					/>
					<Image
						src={require('@/assets/icons/Ellipse.png')}
						alt="Ellipse"
						width={6}
					/>
					<Image
						src={require('@/assets/icons/Ellipse.png')}
						alt="Ellipse"
						width={6}
					/>
					<p className="opacity-50 text-[15px]">&nbsp;5360</p>
					<button className="font-normal text-[12px] bg-[#D7D7D7] px-3  h-[30px] rounded-lg mx-4 ">
						Default
					</button>
					<p className="opacity-60 ml-6">Expires 03/2025</p>
					<Image
						src={require('@/assets/icons/x.png')}
						alt=""
						height={13}
						width={7}
						className="ml-4"
					/>
				</div>
				<p className="opacity-60 mt-2 cursor-pointer">+ Add Payment method</p>
			</div>
		</div>
	)
}

export default PaymentMethod
