import React from 'react';
import Field from '@/components/Field';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import AuthButton from './AuthButton';
import Link from 'next/link';
import { Formik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { loginSchema } from '../core/schema';
import { useLogin } from '../hooks/useLogin';

const Login: React.FC = () => {
	const login = useLogin();
	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={toFormikValidationSchema(loginSchema)}
			onSubmit={values => login.mutateAsync(values)}
		>
			{(formik) => (
				<form className='flex flex-col items-center'>
					<div className="flex flex-col gap-2">
						<Field
							label=""
							id="email"
							name="email"
							type={'email'}
							placeholder="Email"
							icon={<MdOutlineAlternateEmail size={18} />}
							value={formik.values.email}
							onChange={formik.handleChange}
						/>
						<Field
							label=""
							id="password"
							name="password"
							type={'password'}
							placeholder="Password"
							icon={<RiLockPasswordLine size={18} />}
							value={formik.values.password}
							onChange={formik.handleChange}
						/>
					</div>
					<pre>{JSON.stringify(formik.values, null, 2)}</pre>
					<AuthButton
						type="submit"
						onClick={(e) => {
							e.preventDefault()
							formik.handleSubmit();
						}}
						content="Login"
					/>
					<p className="text-lg">
						Don&apos;t have an account?{' '}
						<Link
							href={'/auth/signup-business'}
							className="pl-1 text-lg font-bold text-pink-600 cursor-pointer"
						>
							Sign up
						</Link>
					</p>
				</form>
			)}
		</Formik>
	);
};
export default Login;
