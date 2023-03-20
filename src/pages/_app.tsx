import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { wrapper } from "@/store";
import { Provider } from "react-redux";
import Auth from "@/components/Routes/PrivateRoutes";

function App({ Component, ...rest }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Component {...pageProps} />
				<ReactQueryDevtools initialIsOpen={false} />
				<ToastContainer autoClose={2000} />
			</Provider>
		</QueryClientProvider>
	);
}
export default App;
