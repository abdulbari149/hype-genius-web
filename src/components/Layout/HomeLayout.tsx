import { Header, Footer } from '@/modules/home'
import React, { PropsWithChildren } from 'react'

const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="w-full overflow-x-hidden max-w-screen">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default HomeLayout