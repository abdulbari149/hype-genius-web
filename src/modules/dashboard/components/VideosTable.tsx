import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import { columns as videosColumns } from '../core/videos'
import { useDispatch } from 'react-redux'
import { selectVideo } from '../core/slice'
import { IVideo } from '@/api/type'
import { useGetVideos } from '../hooks/useGetVideos'

const VideosTable = () => {
	const { data: videos } = useGetVideos()

	const data = useMemo(() => videos?.data ?? [], [videos?.data])
	const columns = useMemo(() => videosColumns, [])
	const table = useTable({ columns, data })
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		table
	const dispatch = useDispatch()

	function handleSelectVideo(video: IVideo) {
		dispatch(selectVideo({ video }))
	}

	return (
		<table
			{...getTableProps()}
			className="w-full border-separate border-spacing-y-4"
		>
			<thead>
				{headerGroups.map((headerGroup) => {
					const { key, ...headerGroupProps } = headerGroup.getHeaderGroupProps()
					return (
						<tr {...headerGroupProps} key={key}>
							{headerGroup.headers.map((column) => (
								<th
									className="first:pl-7 last:pr-4"
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
				{data.length !== 0 ? (
					rows.map((row) => {
						prepareRow(row)
						return (
							<tr
								className="cursor-pointer"
								style={{
									boxShadow:
										'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
								}}
								{...row.getRowProps()}
								key={row.original.id}
								onClick={() => handleSelectVideo(row.original)}
							>
								{row.cells.map((cell) => {
									const { key, ...cellProps } = cell.getCellProps()
									return (
										<td
											className="py-3 h-[50px] bg-white first:border-solid  last:border-solid first:rounded-tl-[16px] first:rounded-bl-[16px] last:rounded-br-[16px] last:rounded-tr-[16px]"
											{...cellProps}
											key={key}
										>
											{cell.render('Cell')}
										</td>
									)
								})}
							</tr>
						)
					})
				) : (
					<tr
						className="cursor-pointer"
						style={{
							boxShadow:
								'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
						}}
					>
						<td
							colSpan={4}
							className="py-4 text-center h-[50px] bg-white  first:border-solid  last:border-solid first:rounded-tl-[16px] first:rounded-bl-[16px] last:rounded-br-[16px] last:rounded-tr-[16px]"
						>
							No Videos Uploaded
						</td>
					</tr>
				)}
			</tbody>
		</table>
	)
}

export default VideosTable
