import React from "react";
import Field from "@/components/Field";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import AuthButton from "./AuthButton";
import Link from "next/link";

interface LoginProps {}
const Login: React.FC<LoginProps> = () => {
	return (
		<>
			<div className="flex flex-col gap-2">
				<Field
					label=""
					id="email"
					name="email"
					type={"email"}
					placeholder="Email"
					icon={<MdOutlineAlternateEmail size={18} />}
				/>
				<Field
					label=""
					id="password"
					name="password"
					type={"password"}
					placeholder="Password"
					icon={<RiLockPasswordLine size={18} />}
				/>
			</div>
			<AuthButton content="Login" />
			<p className="text-lg">
				Don&apos;t have an account?{" "}
				<Link
					href={"/auth/signup-business"}
					className="pl-1 text-pink-600 text-lg font-bold cursor-pointer"
				>
					Sign up
				</Link>
			</p>
		</>
	);
};
export default Login;
