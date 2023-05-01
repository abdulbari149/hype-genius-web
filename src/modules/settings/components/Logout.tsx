import Card from '@/components/Card'
import { setAuthState, setUser } from '@/modules/auth/core/slice'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/modules/auth/core/utils'
import { useRouter } from 'next/router'
import React from 'react'
import { BiLogOutCircle } from 'react-icons/bi'
import { useQueryClient } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'

const Logout = () => {
	const dispatch = useDispatch()
	const router = useRouter()
	const queryClient = useQueryClient()
	const logout = () => {
		router.replace('/')
		localStorage.removeItem(ACCESS_TOKEN)
		localStorage.removeItem(REFRESH_TOKEN)
		dispatch(setUser({ user: null }))
		dispatch(setAuthState({ isLoggedIn: false }))
		queryClient.clear()
	}
	return (
		<Card
			className="flex flex-col bg-[#FFFFFF]/50 py-6 h-fit w-full px-9 gap-2 rounded-lg"
			style={{
				boxShadow:
					'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
			}}
		>
			<button
				onClick={logout}
				className="bg-[#EF539E] w-fit flex gap-2 items-center hover:bg-pink-400 px-4 py-2 rounded-xl text-white"
			>
				<BiLogOutCircle /> Logout
			</button>
		</Card>
	)
}

export default Logout
