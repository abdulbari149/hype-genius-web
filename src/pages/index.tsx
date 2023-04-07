import Head from "next/head";
import { NextPageWithLayout } from "./_app";
import { HomeLayout } from "@/components/Layout";
import { Content, HowItWorks } from "@/modules/home";

const Home: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Home - HypeGenius</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/hype-genius-logo.png" />
			</Head>
			<HomeLayout>
				<Content />
				<HowItWorks />
			</HomeLayout>
		</>
	);
}

export default Home;