import React from "react";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	containerClassName?: string;
	icon?: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({
	label,
	containerClassName = "",
	icon,
	...props
}) => {
	return (
		<div
			className={"flex flex-col gap-3 max-w-xs w-full " + containerClassName}
		>
			<label htmlFor={props.id} className="font-normal pl-2">
				{label}
			</label>
			<div className="opacity-70 bg-white py-2 px-4 rounded-xl w-full shadow-xl flex items-center">
				<input
					{...props}
					className="font-normal rounded-xl px-1 text-[16px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
				/>
				{icon ?? null}
			</div>
		</div>
	);
};

export default Field;
