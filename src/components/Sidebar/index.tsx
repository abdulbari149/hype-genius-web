import Image from 'next/image'
import React, { PropsWithChildren } from 'react'
import HypeGeniusLogo from '@/assets/logos/hype-genius-logo-with-text.png'
import { useRouter } from 'next/router'
import SidebarItem, { SidebarItemProps } from './SidebarItem'
import { useSelector } from 'react-redux'
import { AppState } from '@/store'
import { RoleType } from '@/modules/auth/core/types'

const SidebarWrapper: React.FC<PropsWithChildren> = ({ children }) => {
	const router = useRouter()
	return (
		<div className="bg-white flex flex-col items-center w-full max-w-[250px] h-full rounded-xl pt-[50px] pb-2 shadow-xl">
			<div className="mb-[60px]">
				<Image src={HypeGeniusLogo} alt="hype-genius-logo" />
			</div>

			{children}

			<div className="w-full pb-[10px] pl-[16px] pr-[25px] mt-auto flex items-center justify-between">
				<button
					onClick={() => router.replace('/settings')}
					className={`flex items-start  px-4 py-3 rounded-xl ${
						router.route.startsWith('/settings') ? 'bg-[#EEF2F7]' : ''
					}`}
				>
					<Image
						src={require('@/assets/icons/setting-icon.png')}
						alt="settings"
					/>
					<p className="text-[17px] text-[#1E2875] pl-3">Settings</p>
				</button>
				<button className="w-[25px] h-[25px]">
					<Image
						src={require('@/assets/icons/night-mode-icon.png')}
						alt="night mode"
					/>
				</button>
			</div>
		</div>
	)
}

const sidebarItemsForRoles: Record<
	Exclude<RoleType, 'superadmin'>,
	Array<SidebarItemProps & { id: number }>
> = {
	business_admin: [
		{
			id: 1,
			href: '/dashboard/business',
			icon: require('@/assets/icons/dashboard-icon.png'),
			text: 'Dashboard',
		},
		{
			id: 2,
			href: '/influencer',
			icon: require('@/assets/icons/influencer-icon.png'),
			text: 'Influencers',
		},
		{
			id: 3,
			href: '/report',
			icon: require('@/assets/icons/report-icon.png'),
			text: 'Reports',
		},
	],
	influencer: [
		{
			id: 1,
			href: '/dashboard/influencer',
			icon: require('@/assets/icons/dashboard-icon.png'),
			text: 'Dashboard',
		},
	],
}

const Sidebar = () => {
	const user = useSelector((state: AppState) => state.auth.user)
	if (!user) {
		return <SidebarWrapper></SidebarWrapper>
	}
	const sidebarItems =
		user.role in sidebarItemsForRoles && user.role !== 'superadmin'
			? sidebarItemsForRoles[user.role]
			: []
	return (
		<SidebarWrapper>
			{sidebarItems.map((sidebarItemProps) => (
				<SidebarItem
					key={sidebarItemProps.id}
					text={sidebarItemProps.text}
					href={sidebarItemProps.href}
					icon={sidebarItemProps.icon}
				/>
			))}
		</SidebarWrapper>
	)
}

export default Sidebar
