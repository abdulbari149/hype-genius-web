import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { columns as analyticsColumns } from '../core/analytics'
import Card from '@/components/Card'
import { useGetReport } from '@/modules/reports/hooks/useGetReport'

const AnalyticsTable = () => {
	const { data: analyticsData } = useGetReport(
		{ report_for_all: true },
		{
			select(data) {
				return data.data.reports
					.sort((a, b) => b.total.views - a.total.views)
					.map((r) => {
						return {
							id: r.id,
							influencer: r.influencer.firstName + ' ' + r.influencer.lastName,
							views: r.total.views,
							totalSpent: r.total.amount,
							roas: Number(r.total.roas),
						}
					})
			},
		},
	)
	const data = useMemo(() => analyticsData ?? [], [analyticsData])
	const columns = useMemo(() => analyticsColumns, [])
	const table = useTable({ columns, data })
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table

	return (
		<Card className="w-full max-h-[350px] h-full flex-1 relative  pt-[15px] pb-[25px] rounded-xl overflow-hidden">
			<div className="w-full h-full overflow-y-scroll px-[70px]">
				<table {...getTableProps()} className="w-full border-separate">
					<thead>
						{headerGroups.map((headerGroup) => {
							const { key, ...headerGroupProps } =
								headerGroup.getHeaderGroupProps()
							return (
								<tr {...headerGroupProps} key={key}>
									{headerGroup.headers.map((column) => {
										const { key, ...headerProps } = column.getHeaderProps()
										return (
											<th
												className="first:pl-4 last:pr-4"
												key={key}
												{...headerProps}
											>
												{column.render('Header')}
											</th>
										)
									})}
								</tr>
							)
						})}
					</thead>
					<tbody {...getTableBodyProps()} className="w-full">
						{rows.map((row) => {
							prepareRow(row)
							const { key, ...rowProps } = row.getRowProps()
							return (
								<tr className="cursor-pointer" key={key} {...rowProps}>
									{row.cells.map((cell) => {
										const { key, ...cellProps } = cell.getCellProps()
										return (
											<td
												className="py-[5px] align-middle h-fit"
												key={key}
												{...cellProps}
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
			<span className="h-[14px] w-full bg-white absolute bottom-0 right-0 left-0 -translate-y-[100%]"></span>
		</Card>
	)
}

export default AnalyticsTable
