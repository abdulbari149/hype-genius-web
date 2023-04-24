import { Header, Footer } from '@/modules/home'
import React, { PropsWithChildren } from 'react'

const SiteLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className="w-full overflow-x-hidden max-w-screen min-h-[100vh]">
			<Header />
			{children}
			<Footer />
		</main>
	)
}

export default SiteLayout
