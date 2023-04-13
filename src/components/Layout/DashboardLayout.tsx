import React, { PropsWithChildren } from 'react'
import Sidebar from '../Sidebar'
import { useUser } from '@/modules/auth/hooks/useUser'
import { useRouter } from 'next/router'
import Loading from '../Loading'

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()
	const { isLoading } = useUser({
		onError(err) {
			if (err instanceof Error) {
				router.replace('/auth/login')
			}
		},
	})

	if (isLoading) {
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
