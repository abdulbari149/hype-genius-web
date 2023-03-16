import Card from "@/components/Card";
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { columns as videosColumns } from "../core/videos";
import { VideoDataType } from "../core/type";

const videosData: Array<VideoDataType> = [
	{
		id: 1,
		title: "#videotitle here",
		paymentStatus: "unpaid",
    url: "https://youtube.com/?v=sadnaskdnasd"
	},
	{
		id: 2,
		title: "#videotitle here",
		paymentStatus: "paid",
    url: "https://youtube.com/?v=sadnaskdnasd"
	},
	{
		id: 3,
		title: "#videotitle here",
		paymentStatus: "paid",
    url: "https://youtube.com/?v=sadnaskdnasd"
	},
	{
		id: 4,
		title: "#videotitle here",
		paymentStatus: "paid",
    url: "https://youtube.com/?v=sadnaskdnasd"
	},
];

const VideosTable = () => {
	const data = useMemo(() => videosData, []);
	const columns = useMemo(() => videosColumns, []);
	const table = useTable({ columns, data });
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table;

	return (
		<table
			{...getTableProps()}
			className="w-full border-separate border-spacing-y-4"
		>
			<thead>
				{headerGroups.map((headerGroup, idx) => (
					<tr {...headerGroup.getHeaderGroupProps()} key={idx}>
						{headerGroup.headers.map((column) => (
							<th
								className="first:pl-7 last:pr-4"
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
							style={{
								boxShadow:
									"0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)",
							}}
							{...row.getRowProps()}
							key={row.original.id}
						>
							{row.cells.map((cell, idx) => {
								return (
									<td
										className="py-3 h-[50px] bg-white first:border-solid  last:border-solid first:rounded-tl-[16px] first:rounded-bl-[16px] last:rounded-br-[16px] last:rounded-tr-[16px]"
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
	);
};

export default VideosTable;
