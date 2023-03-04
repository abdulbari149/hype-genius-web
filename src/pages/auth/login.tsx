import Login from "@/modules/auth/components/Login";
import type { NextPage } from "next";
import {Layout} from "@/modules/auth";
import Head from "next/head";
const Loginpage:NextPage=()=>{
    return(
        <>
        <Head>
				<title>Hype Genius - Login</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={"/hype-genius-logo.png"} />
			</Head>
            	<Layout
				title="Welcome Back"
				subTitle="Enter your login details :)"
			>
				<Login/>
			</Layout>
            </>
    )
}
export default Loginpage;