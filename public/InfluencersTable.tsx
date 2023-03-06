import React, { useState } from "react";
interface InfluencersTableProps {}

const InfluencersTable: React.FC<InfluencersTableProps> = () => {
	const [filter, setFilter] = useState<string | undefined>(undefined);
	return (
		<div className="col-span-6">
			<div>
				<select
					className="px-4 py-2 text-[#272830] text-[14px] font-normal bg-[#F8FAFC] rounded-xl"
					style={{
						boxShadow:
							"0px 2.69388px 69.3673px rgba(50, 50, 71, 0.01), 0px 2.69388px 39.7347px rgba(50, 50, 71, 0.06)",
              appearance: 'none',
              MozAppearance: 'none',
              WebkitAppearance: 'none',
              backgroundImage: `url(${require("@/assets/icons/downArrow.png")})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'calc(100% - 3px) center',
              backgroundSize: '10px',

					}}
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					defaultValue={"Filters"}
				>
					<option value={undefined}>Filters</option>
					<option></option>
					<option></option>
				</select>
			</div>
		</div>
	);
};

export default InfluencersTable;
