import React from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	containerClassName?: string;
}

const Field: React.FC<FieldProps> = ({
	label,
	containerClassName = "",
	...props
}) => {
	return (
		<div
			className={"flex flex-col gap-3 max-w-xs w-full " + containerClassName}
		>
			<label htmlFor={props.id} className="font-semibold pl-2">
				{label}
			</label>
			<input
				{...props}
				className="opacity-70 rounded-xl text-md text-[16px] border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none py-2 px-5 shadow-xl"
			/>
		</div>
	);
};

export default Field;
