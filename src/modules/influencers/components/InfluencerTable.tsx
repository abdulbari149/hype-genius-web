import React, { useMemo } from "react";
import { useTable } from "react-table";
import { InfluencerData } from "../core/types";
import { columns as influencersColumns } from "../core/columns";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/core/constants";
import { BusinessApi } from "@/api/BusinessApi";
import { GetInfluencers } from "@/api/type";

interface Props {
	setSelectedInfluencer: React.Dispatch<React.SetStateAction<number | null>>;
}

const selectGetInfluencers = (data: GetInfluencers) => {
	return data.data.map<InfluencerData>((item) => {
		const influencerDataItem: InfluencerData = {
			id: item.id,
			influencer: {
				name: item.influencer.firstName + ' ' + item.influencer.lastName,
				circle: false,
			},
			paymentStatus: item.paymentStatus
		};
		if (item.alert) {
			influencerDataItem.alert = {
				text: item.alert.name
					.replace("_", " ")
					.split(" ")
					.map((i) => `${i.charAt(0).toUpperCase()}${i.substring(1)}`)
					.join(" "),
				color: item.alert.color,
				priority: item.alert.priority,
			};
		}
		if (item.contract) {
			influencerDataItem.currentDeal = {
				perVideo: item.contract.amount.toString(),
				perMonth: item.contract.uploadFrequency.toString()
			}
		}
		if (item.tags) {
			influencerDataItem.tags = item.tags.map(tag => ({ text: tag.name, color: tag.color }))
		}
		return influencerDataItem;
	});
};

const InfluencerTable: React.FC<Props> = ({ setSelectedInfluencer }) => {
	const { data: influencers } = useQuery(QUERY_KEYS.GET_INFLUENCERS, {
		queryFn: BusinessApi.getInfluencers,
		select: selectGetInfluencers,
		suspense: true,
	});

	const data = useMemo(() => influencers ?? [], [influencers]);
	const columns = useMemo(() => influencersColumns, []);
	const table = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table;

	const handleRowClick = (id: number) => {
		setSelectedInfluencer(id);
	};

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
				{rows
					.filter((item) => !!item.original.alert)
					.sort(
						(a, b) => b.original.alert!.priority - a.original.alert!.priority
					)
					.map((row) => {
						prepareRow(row);
						return (
							<tr
								className="cursor-pointer"
								onClick={() => handleRowClick(row.original.id)}
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
											key={cell.column.id + cell.row.original.id}
										>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}

				<tr className="w-full" key={"action required"}>
					<td
						colSpan={5}
						className="px-2 py-2 space-y-1"
						key={"action required td"}
					>
						<p className="text-[#272830] opacity-70 pb-1 font-light text-[13px] px-2">
							Action Required
						</p>
						<div className="w-full h-[2px] opacity-20 bg-[#272830]"></div>
					</td>
				</tr>

				{rows
					.filter((item) => !item.original.alert)
					.map((row) => {
						prepareRow(row);
						return (
							<tr
								className="cursor-pointer"
								onClick={() => setSelectedInfluencer(row.original.id)}
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

export default InfluencerTable;
