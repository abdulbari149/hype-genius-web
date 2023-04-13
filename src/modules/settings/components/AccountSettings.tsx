import Card from '@/components/Card'
import React, { useEffect, useState } from 'react'
import { useUser } from '@/modules/auth/hooks/useUser'
// import { useUpdateUser } from '../hooks/useUpdateUser'

const AccountSettings = () => {
	const { data } = useUser({
		cacheTime: 10000,
	})
	const [email, setEmail] = useState('')
	useEffect(() => {
		if (data?.data?.user?.email) {
			setEmail(data?.data?.user?.email)
		}
	}, [data])

	// const updateUser = useUpdateUser()

	return (
		<Card
			className="flex flex-col bg-[#FFFFFF]/50 py-6 h-fit w-full px-9 gap-2 rounded-lg"
			style={{
				boxShadow:
					'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
			}}
		>
			<p className="font-semibold">Account</p>
			<p>Manage your account details</p>
			<label htmlFor="Email" className="font-semibold">
				Email
			</label>
			<input
				value={email}
				type={'email'}
				name="email"
				id="email"
				onChange={(e) => setEmail(e.target.value)}
				placeholder="test123@gmail.com"
				className="w-[300px] py-2 px-5 outline-none hover:outline-none focus:outline-none focus-within:outline-none bg-[#EAEEF3] rounded-[20px]"
			/>
			<div className="flex gap-2 my-3">
				<button className="bg-[#EF539E] px-4 py-2 rounded-xl text-white">
					Save Account Details
				</button>
				<button
					onClick={() => setEmail(data?.data?.user.email ?? '')}
					className="bg-[#D7D7D7] px-4 py-2 rounded-xl "
				>
					Discard Changes
				</button>
			</div>
		</Card>
	)
}

export default AccountSettings
