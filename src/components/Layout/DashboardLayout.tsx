import React, { PropsWithChildren, useEffect } from 'react'
import Sidebar from '../Sidebar'
import { useUser } from '@/modules/auth/hooks/useUser'
import { useRouter } from 'next/router'
import Loading from '../Loading'

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()
	const { isLoading, isError, error } = useUser({})

	useEffect(() => {
		if (isError && error) {
			router.replace('/auth/login')
		}
	}, [isError, error])

	if (isLoading || isError) {
		return <Loading />
	}

	return (
		<main
			id="root"
			className="flex flex-row w-screen gap-5 p-3 h-screen overflow-hidden bg-[#F2F6FA]"
		>
			<Sidebar />
			{children}
		</main>
	)
}

export default DashboardLayout
