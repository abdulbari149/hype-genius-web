import Field from "@/components/Field";
import React, { FC } from "react";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { BusinessSignupData } from "../core/types";
import { businessSignupSchema } from "../core/schema";
import AuthButton from "./AuthButton";
import Link from "next/link";
interface BusinessSignupProps {}

const BusinessSignup: FC<BusinessSignupProps> = () => {
	const formik = useFormik<BusinessSignupData>({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
			passwordAgain: "",
			businessName: "",
			businessLink: "",
		},
		validationSchema: toFormikValidationSchema(businessSignupSchema),
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
					name="firstName"
					value={formik.values.firstName}
					onChange={formik.handleChange}
				/>
				<Field
					label="Last Name"
					type="text"
					id="lastName"
					placeholder="Musk"
					name="lastName"
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
					label="Business Name"
					type="text"
					id="businessName"
					name="businessName"
					placeholder={"Tesla"}
					value={formik.values.businessName}
					onChange={formik.handleChange}
				/>

				<Field
					label="Business Link"
					type="text"
					id="businessLink"
					name="businessLink"
					placeholder={"tesla.com"}
					value={formik.values.businessLink}
					onChange={formik.handleChange}
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

export default BusinessSignup;
