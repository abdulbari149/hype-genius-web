import React from "react";
import Field from "@/components/Field";

interface LoginProps {}
const Login: React.FC<LoginProps> = () => {
  return (
    <>
      <div className="">
        <Field
          label=""
          id="email"
          name="email"
          type={"email"}
          placeholder="Email"
        />
        <Field
          label=""
          id="password"
          name="password"
          type={"password"}
          placeholder="Password"
        />
      </div>
      <button className=" mt-[30px] font-bold text-white w-[120px] h-[50px] text-lg bg-pink-500  rounded-xl py-1 pr-1">
        Login
      </button>
      <p className="text-lg mt-[40px]">
        Don&apos;t have an account?{" "}
        <span className="text-pink-600 text-lg font-bold">Sign up</span>
      </p>
    </>
  );
};
export default Login;
