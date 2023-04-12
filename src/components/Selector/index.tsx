import React, { forwardRef } from "react";

const defaultTimeOptions = [
	{
		id: 1,
		value: "this-month",
		label: "This Month",
	},
	{
		id: 2,
		value: "next-month",
		label: "Next Month",
	},
	{
		id: 3,
		value: "prev-month",
		label: "Prev Month",
	},
	{
		id: 4,
		value: "custom",
		label: "Custom",
	},
];

export type Option = { id: number | string; value: string | number; label: string };

interface SelectorProps
	extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
	customClassName?: string;
	onChange?: (value: string, e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface TimeSelector {
	type: "time";
	options?: ((defaultOptions: Array<Option>) => Array<Option>) | Option[];
}

interface CustomOptionSelector {
	type: "option";
	options: Option[];
}

type Props = SelectorProps & (TimeSelector | CustomOptionSelector)

const SelectorComponent: React.ForwardRefRenderFunction<HTMLSelectElement, Props> = ({
	style = {},
	className = "",
	customClassName,
	options,
	type,
	onChange = (value, e) => {},
	...props
}, ref) => {
	let selectOptions: Array<Option> = [];
	if (!options) selectOptions = defaultTimeOptions;
	else if (typeof options === "function")
		selectOptions = options(defaultTimeOptions);
	else if (typeof options === "object") selectOptions = options;

	return (
		<select
			ref={ref}
			className={
				!customClassName
					? `bg-[#ffffff] px-4 pr-7 py-2 rounded-xl text-[13px] ${className}`
					: customClassName
			}
			style={{
				boxShadow:
					"0px 1.46939px 37.8367px rgba(50, 50, 71, 0.01), 0px 1.46939px 21.6735px rgba(50, 50, 71, 0.06)",
				appearance: "none",
				MozAppearance: "none",
				WebkitAppearance: "none",
				backgroundImage: `url(/downArrow.png)`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "calc(100% - 15px) center",
				backgroundSize: "10px",
				...style,
			}}
			{...props}
			onChange={(e) => {
				onChange(e.target.value, e)
			}}
		>
			{selectOptions.map((option) => (
				<option key={option.id} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default forwardRef<HTMLSelectElement, Props>(SelectorComponent);
