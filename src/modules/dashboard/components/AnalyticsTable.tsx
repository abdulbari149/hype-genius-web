import React, { useMemo } from "react";
import { useTable } from "react-table";
import { columns as analyticsColumns } from "../core/analytics";
import { AnalyticsDataType } from "../core/type";
import Card from "@/components/Card";

const analyticsData: AnalyticsDataType[] = [
	{  id: 1, influencer: "Joe Rogan", views: 635000, totalSpent: 13000, roas: 6.23 },
	{  id: 2, influencer: "Pwede Pie", views: 2635000, totalSpent: 523000, roas: 7.80 },
	{  id: 3, influencer: "Pwede Pie", views: 2635000, totalSpent: 523000, roas: 7.80 },
	{  id: 4, influencer: "Pwede Pie", views: 2635000, totalSpent: 523000, roas: 7.80 },
	{  id: 5, influencer: "Pwede Pie", views: 2635000, totalSpent: 523000, roas: 7.80 },
];

const AnalyticsTable = () => {
	const data = useMemo(() => analyticsData, []);
	const columns = useMemo(() => analyticsColumns, []);
	const table = useTable({ columns, data });
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table;

	return (
		<Card className="w-full max-h-[350px] h-full flex-1 relative  pt-[15px] pb-[25px] rounded-xl overflow-hidden">
			<div className="w-full h-full overflow-y-scroll px-[70px]">
			<table
				{...getTableProps()}
				className="w-full border-separate"
			>
				<thead>
					{headerGroups.map((headerGroup, idx) => (
						<tr {...headerGroup.getHeaderGroupProps()} key={idx}>
							{headerGroup.headers.map((column) => (
								<th
									className="first:pl-4 last:pr-4"
									{...column.getHeaderProps()}
									key={column.id}
								>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()} className="w-full">
					{rows.map((row) => {
						prepareRow(row);
						return (
							<tr
								className="cursor-pointer"
								{...row.getRowProps()}
								key={row.index}
							>
								{row.cells.map((cell, idx) => {
									return (
										<td
											className="py-[5px] align-middle h-fit"
											{...cell.getCellProps()}
											key={idx}
										>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}{" "}
				</tbody>
			</table>
			</div>
			
			<span className="h-[14px] w-full bg-white absolute bottom-0 right-0 left-0 -translate-y-[100%]"></span>
		</Card>
	);
};

export default AnalyticsTable;
