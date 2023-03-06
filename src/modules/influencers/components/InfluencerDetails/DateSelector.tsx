import React from "react";

const DateSelector = () => {
	return (
		<select
			className="bg-[#ECF0F4] pl-2 mb-1 py-2 rounded-xl text-[13px]"
			style={{
				boxShadow:
					"0px 1.46939px 37.8367px rgba(50, 50, 71, 0.01), 0px 1.46939px 21.6735px rgba(50, 50, 71, 0.06)",
			}}
		>
			<option>This Month</option>
			<option>Next Month</option>
			<option>Prev Month</option>
			<option>Custom</option>
		</select>
	);
};

export default DateSelector;
