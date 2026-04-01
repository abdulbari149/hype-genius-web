import { useField } from 'formik'
import React from 'react'

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string
	name: string
	containerClassName?: string
	icon?: React.ReactNode
}

const Field: React.FC<FieldProps> = ({
	label,
	containerClassName = '',
	icon,
	...props
}) => {
	const [field, meta] = useField(props.name)
	return (
		<div
			className={'flex flex-col gap-3 max-w-xs w-full ' + containerClassName}
		>
			<label htmlFor={props.id} className="pl-2 font-normal">
				{label}
			</label>
			<div className="flex items-center w-full px-4 py-2 bg-white shadow-xl opacity-70 rounded-xl">
				<input
					{...props}
					{...field}
					className="font-normal rounded-xl px-1 text-[16px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
				/>
				{icon ?? null}
			</div>
			{meta.touched && meta.error && (
				<p className="px-1 text-[13px] text-red-500">{meta.error}</p>
			)}
		</div>
	)
}

export default Field
