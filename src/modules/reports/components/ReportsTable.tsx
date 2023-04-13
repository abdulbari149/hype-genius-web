import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { columns as reportsColumns } from '../core/columns'
import { useGetReport } from '../hooks/useGetReport'
import { setPage } from '../core/slice'
import { AppState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAnalytics } from '@/modules/dashboard/hooks/useGetAnalytics'
const ReportsTable = () => {
	const currentPage = useSelector((state: AppState) => state.report.page)
	const reportFilters = useSelector((state: AppState) => state.report)

	const { data: reportList } = useGetReport(reportFilters)
	const data = useMemo(
		() => reportList?.data?.reports ?? [],
		[reportList?.data?.reports],
	)
	const dispatch = useDispatch()
	const columns = useMemo(() => reportsColumns, [])
	const table = useTable({ columns, data })
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table

	const { data: analytics } = useGetAnalytics()

	return (
		<div className="bg-white	grid w-full h-full grid-cols-7 py-[20px] shadow-lg rounded-xl">
			<div className="flex flex-col h-full col-span-5 overflow-y-hidden">
				<div className="w-full pl-4 overflow-y-scroll custom-scroll">
					<table
						{...getTableProps()}
						className="w-full border-separate border-spacing-y-4"
					>
						<thead>
							{headerGroups.map((headerGroup) => {
								const { key, ...headerGroupProps } =
									headerGroup.getHeaderGroupProps()
								return (
									<tr {...headerGroupProps} key={key}>
										{headerGroup.headers.map((column) => (
											<th
												className="first:pl-4 last:pr-4"
												{...column.getHeaderProps()}
												key={column.id}
											>
												{column.render('Header')}
											</th>
										))}
									</tr>
								)
							})}
						</thead>
						<tbody {...getTableBodyProps()} className="w-full">
							{rows.map((row) => {
								prepareRow(row)
								const { key, ...rowProps } = row.getRowProps()
								return (
									<tr className="cursor-pointer" {...rowProps} key={key}>
										{row.cells.map((cell) => {
											const { key, ...cellProps } = cell.getCellProps()
											return (
												<td
													className="py-3 align-top text-start"
													{...cellProps}
													key={key}
												>
													{cell.render('Cell')}
												</td>
											)
										})}
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
				<div className="flex h-fit mt-auto gap-3 my-[20px] mx-[30px] ">
					<div className="flex gap-3">
						<p>Pages</p>

						{Array(reportList?.data?.metadata.totalNoOfPages ?? 1)
							.fill(0)
							.map((p, i) => i + 1)
							.map((page) => {
								return (
									<div
										onClick={() => dispatch(setPage({ page }))}
										className={`px-2 py-[2px] h-fit rounded-lg cursor-pointer text-center ${
											currentPage === page ? 'bg-[#D9D9D9]' : ''
										}`}
										key={page}
									>
										{page}
									</div>
								)
							})}
					</div>
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
							<p className="font-light">
								{analytics?.data?.total_views.toLocaleString('en-US')}
							</p>
						</div>
						<div className="flex flex-col items-center gap-5">
							<p className="text-[16px] text-[#272830] font-[600]">Spent</p>
							<p className="font-light">
								${analytics?.data?.spent.toLocaleString('en-US')}
							</p>
						</div>
						<div className="flex flex-col items-center gap-2">
							<p className="text-[16px] text-[#272830] font-[600]">ROAS</p>
							<p className="py-2 px-3 text-[15px] font-light bg-[#D7D7D7] rounded-xl">
								{analytics?.data?.roas}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReportsTable
