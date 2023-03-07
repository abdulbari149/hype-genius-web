import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { columns as reportsColumns } from "../core/columns";
import { ReportsDataType } from "../core/type";

const reportsData: ReportsDataType[] = [
	{
		id: 1,
		influencer: "Joe Rogan",
		videos: [
			{
				id: 1,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
			{
				id: 2,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
			{
				id: 3,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
			{
				id: 4,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
		],
		total: {
			views: 2300400,
			spent: 7800,
			roas: 6.78,
		},
	},
	{
		id: 2,
		influencer: "Joe Rogan",
		videos: [
			{
				id: 1,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
			{
				id: 2,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
			{
				id: 3,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
			{
				id: 4,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
		],
		total: {
			views: 2300400,
			spent: 7800,
			roas: 6.78,
		},
	},
	{
		id: 3,
		influencer: "Joe Rogan",
		videos: [
			{
				id: 1,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
			{
				id: 2,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
			{
				id: 3,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
			{
				id: 4,
				title: "Joe Rogan Explores the Mysteries...",
				views: 158000,
				spent: 2300,
				roas: 6.23,
			},
		],
		total: {
			views: 2300400,
			spent: 7800,
			roas: 6.78,
		},
	},
];
const ReportsTable = () => {
	const columns = useMemo(() => reportsColumns, []);
	const data = useMemo(() => reportsData, []);
	const table = useTable({ columns, data });
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table;
	const [currentPage, setCurrentPage] = useState(1)

	return (
		<div className="bg-white	grid w-full h-full grid-cols-7 py-[20px] shadow-lg rounded-xl">
			<div className="flex flex-col h-full col-span-5 overflow-y-hidden">
				<div className="w-full pl-4 overflow-y-scroll custom-scroll">
					<table
						{...getTableProps()}
						className="w-full border-separate border-spacing-y-4"
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
										key={row.id}
									>
										{row.cells.map((cell, idx) => {
											return (
												<td
													className="py-3 align-top text-start"
													{...cell.getCellProps()}
													key={idx}
												>
													{cell.render("Cell")}
												</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
				<div className="flex ml-auto flex-0 h-[120px] gap-3 my-[20px] mr-[30px]">
					<p>Pages</p>

					{Array(3)
						.fill(0)
						.map((p, i) => i + 1)
						.map((page, index) => {
							return (
								<div
									onClick={() => setCurrentPage(page)}
									className={`px-2 py-[2px] h-fit rounded-lg cursor-pointer text-center ${
										currentPage === page ? "bg-[#D9D9D9]" : ""
									}`}
									key={page}
								>
									{page}
								</div>
							);
						})}
				</div>
			</div>
			<div className="h-full flex items-start col-span-2 py-[30px]">
				<span className="h-full bg-[#4e4d4d] w-[1px] inline-block"></span>

				<div className="mx-auto">
					<p className="mb-[30px] text-[17px] text-[#272830] font-[600]">
						Total for [This Month]
					</p>
					<div className="grid grid-cols-3 px-[10px] gap-[40px]">
						<div className="flex flex-col items-center gap-5">
							<p className="text-[16px] text-[#272830] font-[600]">View</p>
							<p className="font-light">23,000,000</p>
						</div>
						<div className="flex flex-col items-center gap-5">
							<p className="text-[16px] text-[#272830] font-[600]">Spent</p>
							<p className="font-light">$28,000</p>
						</div>
						<div className="flex flex-col items-center gap-2">
							<p className="text-[16px] text-[#272830] font-[600]">ROAS</p>
							<p className="py-2 px-3 text-[15px] font-light bg-[#D7D7D7] rounded-xl">
								6.78
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReportsTable;
