import { Column, CellProps } from "react-table";
import { AnalyticsDataType } from "./type";

type AnalyticsCellProps = CellProps<AnalyticsDataType>;

export const columns: ReadonlyArray<Column<AnalyticsDataType>> = [
	{
		Header: () => (
			<p className="text-start text-[17px] text-[#272830] font-[500] my-[20px]">
				Influencer
			</p>
		),
		id: "influencer",
		Cell: (props: AnalyticsCellProps) => (
			<p className="pl-3 text-start text-[17px]">
				{props.data[props.row.index].influencer}
			</p>
		),
	},
	{
		Header: () => (
			<p className="text-center text-[17px] text-[#272830] font-[500] my-[20px]">
				Views
			</p>
		),
		id: "views",
		Cell: (props: AnalyticsCellProps) => (
			<p className="text-center text-[17px]">
				{props.data[props.row.index].views.toLocaleString("en-US")}
			</p>
		),
	},
	{
		Header: () => (
			<p className="text-center text-[17px] text-[#272830] font-[500] my-[20px]">
				Total Spent
			</p>
		),
		id: "totalSpent",
		Cell: (props: AnalyticsCellProps) => (
			<p className="text-center text-[17px] text-[#1C921A]">
				${props.data[props.row.index].totalSpent.toLocaleString("en-US")}
			</p>
		),
	},
	{
		Header: () => (
			<p className="text-end text-[17px] text-[#272830] font-[500] my-[20px]">
				ROAS
			</p>
		),
		id: "roas",
		Cell: (props: AnalyticsCellProps) => (
			<p className="py-1 rounded-xl text-[15px] w-[50px] bg-[#C87C0A] w-fit ml-auto mr-3 text-center">
				{props.data[props.row.index].roas}
			</p>
		),
	},
];
