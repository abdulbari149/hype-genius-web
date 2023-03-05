import React from "react";
import Field from "@/components/Field";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { useFormik } from "formik"
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { loginSchema } from "../core/schema";
import { LoginData } from "../core/types";


interface LoginProps {}
const Login: React.FC<LoginProps> = () => {

  const formik = useFormik<LoginData>({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: toFormikValidationSchema(loginSchema),
    onSubmit(values, formikHelpers) {
      console.log(values)
    }
  })

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
