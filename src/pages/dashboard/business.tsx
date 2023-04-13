import type { NextPage } from 'next'
import Head from 'next/head'
import { DashboardLayout } from '@/components/Layout'
import DashboardDatePicker from '@/modules/dashboard/components/DashboardDatePicker'
import AnalyticsList from '@/modules/dashboard/components/AnalyticsList'
import AnalyticsTable from '@/modules/dashboard/components/AnalyticsTable'
import DashboardCharts from '@/modules/dashboard/components/DashboardCharts'
import UploadsList from '@/modules/dashboard/components/UploadsList'
import { Suspense } from 'react'
import Loading from '@/components/Loading'
const BusinessDashboardPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Hype Genius - Dashboard</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={'/hype-genius-logo.png'} />
			</Head>

			<DashboardLayout>
				<main className="flex flex-row w-full px-4 overflow-y-hidden gap-7">
					<Suspense fallback={<Loading />}>
						<div className="flex flex-col max-w-[60%] w-full space-y-[20px]">
							<DashboardDatePicker />
							<AnalyticsList />
							<DashboardCharts />
							<AnalyticsTable />
						</div>
						<UploadsList />
					</Suspense>
				</main>
			</DashboardLayout>
		</>
	)
}

export default BusinessDashboardPage

// const getInitialProps =
// 	(store: AppStore) =>
// 	async ({ req, res }: NextPageContext) => {

// 		const cookie = req ? req?.headers.cookie : {};
// 		if (!cookie && res) {
// 			res.writeHead()
// 		}
// 		const parsedCookie = parseCookie(cookie) as unknown as {
// 			"refresh-token"?: string;
// 		};
// 		const refreshToken = parsedCookie["refresh-token"];
// 		if (!refreshToken) {
// 			return {
// 				redirect: {
// 					destination: "/auth/login",
// 					permanent: true,
// 				},
// 			};
// 		}
// 		try {
// 			const { data } = await AuthApi.refreshToken(refreshToken);
// 			store.dispatch(setAccessToken({ token: data.access_token }));
// 			return {
// 				props: {},
// 			};
// 		} catch (error) {
// 			return {
// 				redirect: {
// 					destination: "/auth/login",
// 					permanent: true,
// 				},
// 			};
// 		}
// 	};

// BusinessDashboardPage.getInitialProps =
// 	wrapper.getInitialPageProps(getInitialProps);
