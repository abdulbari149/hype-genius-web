import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { InfluencerData } from "../core/types";
import { columns as influencersColumns } from "../core/columns";

interface InfluencersTableProps {
	selectedInfluencer: number | null;
	setSelectedInfluencer: React.Dispatch<React.SetStateAction<number | null>>;
}

export const influencersData: InfluencerData[] = [
	{
		id: 1,
		influencer: { name: "Mr Beast", circle: true, circleColor: "#F3EA02" },
		tags: [{ text: "Partner", color: "#7187FB80" }],
		currentDeal: {
			perVideo: "100",
			perMonth: "4x",
		},
		alert: { text: "Payment Due", color: "#FFDE2E80" },
		paymentStatus: "unpaid",
	},

	{
		id: 2,
		influencer: { name: "PewDiepie", circle: false },
		tags: [
			{ text: "Emailed", color: "#FFDE2E80" },
			{ text: "Onboarding", color: "#2EFF6880" },
		],
		alert: { text: "Follow - Up", color: "#ABABAB80" },
		paymentStatus: "paid",
	},

	{
		id: 3,
		influencer: { name: "Joe Rogan", circle: true, circleColor: "#F3EA02" },
		tags: [{ text: "Partner", color: "#7187FB80" }],
		currentDeal: {
			perVideo: "100",
			perMonth: "4x",
		},
		alert: { text: "New Video", color: "#A4F2FD" },
		paymentStatus: "paid",
	},

	{
		id: 4,
		influencer: { name: "Danny Duncan", circle: false },
		tags: [{ text: "Lost Partner", color: "#FF2E2E80" }],
		alert: { text: "Follow - Up", color: "#ABABAB80" },
		paymentStatus: "paid",
	},
	{
		id: 5,
		influencer: { name: "Matt D'Avella", circle: true, circleColor: "#CC7321" },
		tags: [{ text: "Partner", color: "#7187FB80" }],
		currentDeal: {
			perVideo: "100",
			perMonth: "4x",
		},
		alert: { text: "Upload Frequency", color: "#FB2EFF80" },
		paymentStatus: "paid",
	},
];

const InfluencersTable: React.FC<InfluencersTableProps> = ({
	selectedInfluencer,
	setSelectedInfluencer,
}) => {
	const [filter, setFilter] = useState<string | undefined>(undefined);
	const data = useMemo(() => influencersData, []);
	const columns = useMemo(() => influencersColumns, []);
	const table = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table;

	const [currentPage, setCurrentPage] = useState(1)

	return (
		<div
			className={`h-screen w-full flex flex-col w-full overflow-hidden ${selectedInfluencer === null ? `col-span-full` : `col-span-5`}`}
		>
			<select
				className="pl-3 pr-8 py-2 mt-5 w-fit text-[#272830] text-[14px] font-normal bg-[#F8FAFC] rounded-xl"
				style={{
					boxShadow:
						"0px 2.69388px 69.3673px rgba(50, 50, 71, 0.01), 0px 2.69388px 39.7347px rgba(50, 50, 71, 0.06)",
					appearance: "none",
					MozAppearance: "none",
					WebkitAppearance: "none",
					backgroundImage: `url(/downArrow.png)`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "calc(100% - 10px) 16px",
					backgroundSize: "12px",
				}}
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
				defaultValue={"Filters"}
			>
				<option value={undefined}>Filters</option>
				<option>Tags</option>
				<option>ROAS</option>
			</select>
			<div className="w-full overflow-y-scroll custom-scroll px-[10px]">
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

						{rows.map((row) => {
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
			</div>
			<div className="flex items-center gap-4 min-h-[50px] mb-[15px] mr-[10px] ml-auto">
				<p>Pages</p>

				{Array(3)
					.fill(0)
					.map((p, i) => i + 1)
					.map((page, index) => {
						return (
							<div
								onClick={() => setCurrentPage(page)}
								className={`px-2 py-[2px] rounded-lg cursor-pointer text-center ${currentPage === page ? 'bg-[#D9D9D9]' : ''}`}
								key={page}
							>
								{page}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default InfluencersTable;
