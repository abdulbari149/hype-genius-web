import Field from "@/components/Field";
import React, { FC } from "react";
interface BusinessSignupProps {}
const BusinessSignup: FC<BusinessSignupProps> = (props) => {
	return (
		<>
			<div className="grid grid-cols-2 gap-y-7 gap-x-6">
				<Field
					label="First Name"
					type="text"
					id="first_name"
					placeholder="Name"
				/>
				<Field label="Email" type="email" id="email" placeholder="email" />

				<Field
					label="Password:"
					type="password"
					id="password"
					name="password"
					placeholder="password"
				/>

				<Field
					label="Business Name"
					type="text"
					id="business_name"
					name="business_name"
					placeholder={"Tesla"}
				/>

				<Field
					label="First Name"
					type="text"
					id="first_name"
					placeholder="Name"
				/>
				<Field label="Email" type="email" id="email" placeholder="email" />

				<Field
					label="Password:"
					type="password"
					id="password"
					name="password"
					placeholder="password"
				/>
				<Field
					label="Business Name"
					type="text"
					id="business_name"
					name="business_name"
					placeholder={"Tesla"}
				/>
			</div>

			<button className=" mt-[25px] font-bold text-white w-[120px] h-[50px] text-lg bg-pink-500  rounded-xl py-1 pr-1">
				Signup
			</button>
			<p className="text-lg mt-[30px]">
				Already have an account?{" "}
				<span className="text-pink-600 text-lg font-bold">Sign In</span>
			</p>
		</>
	);
};

export default BusinessSignup;
