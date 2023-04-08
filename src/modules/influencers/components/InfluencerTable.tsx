import React, { useMemo } from "react";
import { Row, useTable } from "react-table";
import { columns as influencersColumns } from "../core/columns";
import { useQuery } from "react-query";
import { QUERY_KEYS } from "@/core/constants";
import { BusinessApi } from "@/api/BusinessApi";
import { useDispatch, useSelector } from "react-redux";
import { setInfluencer, showPanel } from "../core/slice";
import { GetInfluencerData } from "@/api/type";
import { AppState } from "@/store";
import { Alerts } from "../core/constants";

interface Props { rows: Row<GetInfluencerData>[]; prepareRow: (row: Row<GetInfluencerData>) => void }

const InfluencerRows: React.FC<Props> = ({ rows, prepareRow }) => {
	const dispatch = useDispatch()
	const influencerId = useSelector((state: AppState) => state.influencers.influencer?.id ?? null)

	const handleRowClick = (influencer: GetInfluencerData) => {
		dispatch(setInfluencer({ influencer }))
		dispatch(showPanel({ panel: 'detail' }))
	};

	const cellClassName = 'py-3 h-[50px] bg-white first:border-solid last:border-solid first:rounded-tl-[16px] first:rounded-bl-[16px] last:rounded-br-[16px] last:rounded-tr-[16px]'

	return <React.Fragment>
		{rows.map((row) => {
			prepareRow(row);
			return (
				<tr
					className="cursor-pointer"
					onClick={() => handleRowClick(row.original)}
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
								className={`${cellClassName} ${row.original.id === influencerId ? 'first:border-l-4 last:border-r-4 border-b-4 border-t-4' : 'border-0'} ${row.original.alert?.name === Alerts.MISSING_DEAL ? 'border-[#FF3434B8]' : 'border-[#3BADFF]'}`}
								{...cell.getCellProps()}
								key={`${cell.row.id}-${idx}`}
							>
								{cell.render("Cell")}
							</td>
						);
					})}
				</tr>
			);
		})}
	</React.Fragment>
}

const InfluencerTable: React.FC<Props> = () => {

	const { data: influencers } = useQuery(QUERY_KEYS.GET_INFLUENCERS, {
		queryFn: BusinessApi.getInfluencers,
		suspense: true,
	});

	const data = useMemo(() => influencers?.data ?? [], [influencers]);
	const columns = useMemo(() => influencersColumns, []);
	const table = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table;

	const { actionRows, noActionRows } = useMemo(() => {
		return {
			actionRows: rows
				.filter((item) => !!item.original.alert)
				.sort(
					(a, b) => b.original.alert!.priority - a.original.alert!.priority
				),
			noActionRows: rows
				.filter((item) => !item.original.alert)
		}
	}, [rows])

	return (
		<table
			{...getTableProps()}
			className="w-full border-separate border-spacing-y-4"
		>
			<thead>
				{headerGroups.map((headerGroup, idx) => (
					<tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
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
				<InfluencerRows rows={actionRows} prepareRow={prepareRow} />
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
				<InfluencerRows rows={noActionRows} prepareRow={prepareRow} />
			</tbody>
		</table>
	);
};

export default InfluencerTable;
