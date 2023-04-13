import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ReactElement, ReactNode, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { wrapper } from '@/store'
import { Provider } from 'react-redux'
import { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const Error = () => {
	return <div>Error Occured</div>
}

function App({ Component, ...rest }: AppPropsWithLayout) {
	const [queryClient] = useState(() => new QueryClient())
	const { store, props } = wrapper.useWrappedStore(rest)
	const { pageProps } = props
	const getLayout = Component.getLayout ?? ((page) => page)
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<ErrorBoundary fallbackRender={Error}>
					{getLayout(<Component {...pageProps} />)}
					<ReactQueryDevtools initialIsOpen={false} />
					<ToastContainer autoClose={2000} />
				</ErrorBoundary>
			</Provider>
		</QueryClientProvider>
	)
}
export default App
