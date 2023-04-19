import { Column, CellProps } from 'react-table'
import { ReportsData } from './type'

const Header: React.FC<{ title: string; className?: string }> = ({
	title,
	className = '',
}) => (
	<p className={`text-[18px] font-[600] text-[#272830] mb-4 ${className}`}>
		{title}
	</p>
)

export const columns: ReadonlyArray<Column<ReportsData>> = [
	{
		id: 'influencers',
		Header: <Header title="Influencers" className="text-start" />,
		maxWidth: 120,
		width: 120,
		Cell: (props: CellProps<ReportsData>) => {
			const { influencer, videos } = props.data[props.row.index]
			return (
				<p
					className={`text-[17px] pl-[16px] font-light text-start ${
						videos.length > 0 ? 'pt-2' : ''
					}`}
				>
					{influencer.firstName + ' ' + influencer.lastName}
				</p>
			)
		},
	},
	{
		id: 'videos',
		Header: <Header title="Videos" className="text-start" />,
		maxWidth: 250,
		width: 350,
		Cell: (props: CellProps<ReportsData>) => {
			const videos = props.data[props.row.index].videos
			return (
				<div className="flex flex-col max-w-[340px] h-full w-full justify-between">
					{videos.length > 0
						? videos.map((video) => (
								<div
									className="flex flex-1 items-center justify-between w-full"
									key={video.id}
								>
									<p className="text-[17px] font-light text-left">
										{video.title.trim()}
									</p>
									<button className="px-2 py-1 text-[15px] text-white rounded-xl bg-[#EF539E] shadow-lg">
										View
									</button>
								</div>
						  ))
						: null}

					<p className="px-2 py-[4px] text-end text-[17px] text-[#272830] font-500">
						Total
					</p>
				</div>
			)
		},
	},
	{
		id: 'views',
		Header: <Header title="Views" className="text-center" />,
		maxWidth: 250,
		width: 250,
		Cell: (props: CellProps<ReportsData>) => {
			const videos = props.data[props.row.index].videos
			return (
				<div className="max-w-[170px] flex h-full justify-between flex-col items-center gap-10 w-full">
					{videos.length > 0
						? videos.map((video) => (
								<p
									className="text-[17px] font-light py-[3px] text-center"
									key={video.id}
								>
									{video.views.toLocaleString('en-US')}
								</p>
						  ))
						: null}
					<p className="px-2 text-center text-[17px] text-[#272830] font-500">
						{props.data[props.row.index].total.views.toLocaleString('en-US')}
					</p>
				</div>
			)
		},
	},
	{
		id: 'spent',
		Header: <Header title="Spent" className="text-center" />,
		maxWidth: 250,
		width: 250,
		Cell: (props: CellProps<ReportsData>) => {
			const videos = props.data[props.row.index].videos
			return (
				<div className="max-w-[170px] h-full justify-between flex flex-col items-center gap-10 w-full">
					{videos.length > 0
						? videos.map((video) => (
								<p
									className="text-[17px] font-light py-[3px] text-center"
									key={video.id}
								>
									${video.amount.toLocaleString('en-US')}
								</p>
						  ))
						: null}

					<p className="px-2 text-center text-[17px] text-[#272830] font-500">
						${props.data[props.row.index].total.amount.toLocaleString('en-US')}
					</p>
				</div>
			)
		},
	},
	{
		id: 'roas',
		Header: <Header title="ROAS" className="text-center" />,
		maxWidth: 50,
		Cell: (props: CellProps<ReportsData>) => {
			const videos = props.data[props.row.index].videos
			return (
				<div className="flex flex-col w-full h-[100%] items-center pr-[15px] justify-between">
					{videos?.length > 0
						? videos.map((video) => (
								<p
									className={`
										${
											video.roas < 7
												? 'bg-[#D7D7D7]'
												: videos.roas < 10
												? 'bg-[#F3EA02]'
												: 'bg-[#C87C0A]'
										} px-2 py-[6px] rounded-xl min-w-[30px] w-fit text-[15px] font-light text-center
									`}
									key={video.id}
								>
									{parseFloat(video.roas.toString()).toFixed(2)}
								</p>
						  ))
						: null}

					<p
						className="bg-[#F3EA02] px-2 place-end py-[6px] rounded-xl w-fit text-[15px] font-light text-center"
						key={props.data[props.row.index].total.roas}
					>
						{props.data[props.row.index].total.roas}
					</p>
				</div>
			)
		},
	},
]
