import { useUser } from '@/modules/auth/hooks/useUser'
import React, { useEffect, useState } from 'react'
import { TiEdit } from 'react-icons/ti'

const PayPalEmail = () => {
	const [editPaypalEmail, setEditPaypalEmail] = useState(false)
	const [paypalEmail, setPaypalEmail] = useState('coolemail@gmail.com')
	const { data: user } = useUser({})

	useEffect(() => {
		if (user) {
			setPaypalEmail(user?.data.user.email)
		}
	}, [user])

	return (
		<div className="flex flex-col">
			<p className="text-[17px] text-[#272830] font-[500]">PayPal Email</p>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>
			<div className="flex items-center gap-6 mt-3">
				{editPaypalEmail ? (
					<>
						<input
							className="bg-[#EDF1F5] text-[15px] hover:outline-none focus-within:outline-none focus:outline-none out-of-range: rounded-xl opacity-60 px-3 py-2 max-w-md"
							value={paypalEmail}
							onChange={(e) => setPaypalEmail(e.target.value)}
						/>
						<button
							onClick={() => setEditPaypalEmail(false)}
							className="px-3 py-2 text-[13px] text-white rounded-xl bg-[#EF539E]"
						>
							Submit
						</button>
					</>
				) : (
					<>
						<p className="text-[15px] text-[#272830] font-normal">
							{paypalEmail}
						</p>
						<TiEdit
							className="cursor-pointer"
							onClick={() => setEditPaypalEmail(true)}
							size={18}
						/>
					</>
				)}
			</div>
		</div>
	)
}

export default PayPalEmail
