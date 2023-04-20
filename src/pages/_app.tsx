import type { AppProps } from 'next/app'
import {
	QueryClient,
	QueryClientProvider,
	useQueryErrorResetBoundary,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactElement, ReactNode, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { NextPage } from 'next'
import { ErrorBoundary } from 'react-error-boundary'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { wrapper } from '@/store'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import createEmotionCache from '../utils/createEmotionCache'
import theme from '../theme/theme'
import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
	emotionCache: EmotionCache
}

const ErrorFallback = () => {
	return <div>Error Occured</div>
}

const clientSideEmotionCache = createEmotionCache()

function App({
	Component,
	emotionCache = clientSideEmotionCache,
	...rest
}: AppPropsWithLayout) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						refetchOnReconnect: false, // default: true
					},
				},
			}),
	)

	const { store, props } = wrapper.useWrappedStore(rest)
	const { pageProps } = props
	const getLayout = Component.getLayout ?? ((page) => page)
	const { reset } = useQueryErrorResetBoundary()

	return (
		<QueryClientProvider client={queryClient}>
			<CacheProvider value={emotionCache}>
				<LocalizationProvider dateAdapter={AdapterMoment}>
					<ThemeProvider theme={theme}>
						<Provider store={store}>
							<ErrorBoundary
								fallbackRender={ErrorFallback}
								onReset={() => reset()}
							>
								{getLayout(<Component {...pageProps} />)}
								<ReactQueryDevtools initialIsOpen={false} />
								<ToastContainer autoClose={2000} />
								<CssBaseline />
							</ErrorBoundary>
						</Provider>
					</ThemeProvider>
				</LocalizationProvider>
			</CacheProvider>
		</QueryClientProvider>
	)
}
export default App
