import React from "react";
import AnalyticsCard from "./AnalyticsCard";

const AnalyticsList = () => {
	return (
		<div className="flex flex-row flex-wrap h-max mb-[20px] flex-shrink gap-y-2 gap-x-3">
			<AnalyticsCard
				icon={require("@/assets/icons/3-User.png")}
				title="Active Partners"
				value={10}
				variation={true}
				changeInPercent={25}
			/>

			<AnalyticsCard
				icon={require("@/assets/icons/eye-icon.png")}
				title="Views"
				value={"167,000"}
				variation={true}
				changeInPercent={8}
      />

			<AnalyticsCard
				icon={require("@/assets/icons/budgeting-icon.png")}
				title="Total Spent"
				value={"$6,389"}
				variation={true}
				changeInPercent={16}
			/>
			<AnalyticsCard
				icon={require("@/assets/icons/profit-icon.png")}
				title="ROAS"
				value={"7.3"}
				variation={false}
				changeInPercent={8}
			/>
		</div>
	);
};

export default AnalyticsList;
