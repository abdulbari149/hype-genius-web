import Field from "@/components/Field";
import React from "react";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { ChannelSignupData } from "../core/types";
import { channelSignupSchema } from "../core/schema";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface ChannelSignupProps {}

const ChannelSignup: React.FC<ChannelSignupProps> = () => {
	const formik = useFormik<ChannelSignupData>({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			passwordAgain: "",
			channelName: "",
			channelLink: "",
		},
		validationSchema: toFormikValidationSchema(channelSignupSchema),
		onSubmit(values, formikHelpers) {
			console.log(values);
		},
	});
	return (
		<>
			<div className="grid grid-cols-2 gap-y-7 gap-x-6">
				<Field
					label="First Name"
					type="text"
					id="firstName"
					placeholder="Elon"
					value={formik.values.firstName}
					onChange={formik.handleChange}
				/>

				<Field
					label="Last Name"
					type="text"
					id="last_name"
					name="lastName"
					placeholder="Musk"
					value={formik.values.lastName}
					onChange={formik.handleChange}
				/>

				<Field
					label="Email"
					type="email"
					id="email"
					name="email"
					placeholder={"elonmusk@tesla.com"}
					value={formik.values.email}
					onChange={formik.handleChange}
				/>

				<Field
					label="Phone Number"
					type="text"
					id="phone_number"
					name="phoneNumber"
					placeholder="123-456-7890"
					value={formik.values.phoneNumber}
					onChange={formik.handleChange}
				/>

				<Field
					label="Password"
					type="password"
					id="password"
					name="password"
					placeholder="password"
					value={formik.values.password}
					onChange={formik.handleChange}
				/>

				<Field
					label="Password Again"
					type="password"
					id="passwordAgain"
					name="passwordAgain"
					placeholder="password"
					value={formik.values.passwordAgain}
					onChange={formik.handleChange}
				/>
				<Field
					label="Channel Name"
					type="text"
					id="channelName"
					name="channelName"
					placeholder="Mr.Beast"
					containerClassName="col-span-2"
					value={formik.values.channelName}
					onChange={formik.handleChange}
				/>

				<Field
					label="Channel Link"
					type="text"
					id="channelLink"
					name="channelLink"
					placeholder={"youtube.com/fgdhersdq"}
					value={formik.values.channelLink}
					onChange={formik.handleChange}
					containerClassName="max-w-[520px] w-full col-span-2"
				/>
			</div>

			<AuthButton content="Signup" />

			<p className="text-lg">
				Already have an account?
				<Link
					href={"/auth/login"}
					className="pl-1 text-pink-600 text-lg font-bold cursor-pointer"
				>
					Sign In
				</Link>
			</p>
		</>
	);
};

export default ChannelSignup;
