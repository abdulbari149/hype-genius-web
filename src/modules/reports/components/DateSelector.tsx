import React from "react";

const DateSelector = () => {
	return (
		<select
			className="bg-[#ffffff] px-4 pr-7 py-2 rounded-xl text-[13px]"
			style={{
				boxShadow:
					"0px 1.46939px 37.8367px rgba(50, 50, 71, 0.01), 0px 1.46939px 21.6735px rgba(50, 50, 71, 0.06)",
				appearance: "none",
				MozAppearance: "none",
				WebkitAppearance: "none",
				backgroundImage: `url(/downArrow.png)`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "calc(100% - 12px) center",
				backgroundSize: "10px",
			}}
		>
			<option>This Month</option>
			<option>Next Month</option>
			<option>Prev Month</option>
			<option>Full Report</option>
			<option>Custom</option>
		</select>
	);
};

export default DateSelector;
