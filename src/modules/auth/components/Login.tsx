import React from "react";
import Field from "@/components/Field";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { Formik, FormikHelpers, useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { loginSchema } from "../core/schema";
import { LoginData } from "../core/types";
import { AuthApi } from "../../../api/AuthApi";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { ACCESS_TOKEN, REFRESH_TOKEN, handleError } from "../core/utils";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "../core/slice";

interface LoginProps {}
const Login: React.FC<LoginProps> = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const login = useMutation("login", {
		mutationFn: AuthApi.login,
		onSuccess(data, variables, context) {
			localStorage.setItem(ACCESS_TOKEN, data.data.access_token);
			localStorage.setItem(REFRESH_TOKEN, data.data.refresh_token)
			dispatch(setUser({ user:  data.data.user }))
			toast(data.message, { type: "success" });
			if (data.data.user.role === "business_admin") {
				router.replace("/dashboard/business");
			} else if (data.data.user.role === "influencer") {
				router.replace("/dashboard/influencer");
			}
		},
		onError(error, variables, context) {
			const message = handleError(error);
			toast(message, { type: "error" });
		},
	});

	async function onSubmit(
		values: LoginData,
		formikHelpers: FormikHelpers<LoginData>
	) {
		await login.mutateAsync(values);
	}
	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={toFormikValidationSchema(loginSchema)}
			onSubmit={onSubmit}
		>
			{(formik) => {
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
								value={formik.values.email}
								onChange={formik.handleChange}
							/>
							<Field
								label=""
								id="password"
								name="password"
								type={"password"}
								placeholder="Password"
								icon={<RiLockPasswordLine size={18} />}
								value={formik.values.password}
								onChange={formik.handleChange}
							/>
						</div>
						<pre>{JSON.stringify(formik.values, null, 2)}</pre>
						<AuthButton
							type="submit"
							onClick={() => {
								formik.handleSubmit();
							}}
							content="Login"
						/>
						<p className="text-lg">
							Don&apos;t have an account?{" "}
							<Link
								href={"/auth/signup-business"}
								className="pl-1 text-lg font-bold text-pink-600 cursor-pointer"
							>
								Sign up
							</Link>
						</p>
					</>
				);
			}}
		</Formik>
	);
};
export default Login;
