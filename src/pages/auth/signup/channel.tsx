import { AuthLayout } from '@/components/Layout'
import { ChannelSignup } from '@/modules/auth'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

const title = (
	<>
		Join <span className="text-[#EF539E]">TraderEdge&apos;s</span> Partner
		Program!
	</>
)

const SignupChannel: NextPage<{ token: string }> = ({ token }) => {
	return (
		<>
			<Head>
				<title>Hype Genius - Channel Signup</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={'/hype-genius-logo.png'} />
			</Head>
			<AuthLayout title={title} subTitle={`Fill out the information below :)`}>
				<ChannelSignup token={token} />
			</AuthLayout>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({
	req,
	query,
}) => {
	const token = query.token as string
	if (!token)
		return {
			redirect: { destination: '/', permanent: true },
		}
	return {
		props: { token },
	}
}

export default SignupChannel
