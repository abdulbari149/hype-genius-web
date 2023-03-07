import { Column, CellPropGetter, CellProps } from "react-table";
import { ReportsDataType } from "./type";

interface ReportsColumn {
	influencer: string;
	videos: string[];
	views: number[];
	spent: number[];
	roas: number[];
}

const Header: React.FC<{ title: string; className?: string }> = ({
	title,
	className = "",
}) => (
	<p className={`text-[18px] font-[600] text-[#272830] mb-4 ${className}`}>
		{title}
	</p>
);

export const columns: ReadonlyArray<Column<ReportsDataType>> = [
	{
		id: "influencers",
		Header: <Header title="Influencers" className="text-start" />,
		maxWidth: 120,
		width: 120,
		Cell: (props: CellProps<ReportsDataType>) => (
			<p className="text-[17px] pl-[16px] font-light text-start">
				{props.data[props.row.index].influencer}
			</p>
		),
	},
	{
		id: "videos",
		Header: <Header title="Videos" className="text-start" />,
		maxWidth: 350,
		width: 350,
		Cell: (props: CellProps<ReportsDataType>) => {
			return (
				<div className="flex flex-col max-w-[340px] w-full gap-10">
					<div className="flex flex-col gap-4">
						{props.data[props.row.index].videos.map((video) => (
							<div className="flex items-center gap-5" key={video.id}>
								<p className="text-[17px] font-light text-center">
									{video.title}
								</p>
								<button className="px-2 py-1 text-[15px] text-white rounded-xl bg-[#EF539E] shadow-lg">
									View
								</button>
							</div>
						))}
					</div>
					<p className="px-2 py-[4px] text-end text-[17px] text-[#272830] font-500">
						Total
					</p>
				</div>
			);
		},
	},
	{
		id: "views",
		Header: <Header title="Views" className="text-center" />,
		maxWidth: 250,
		width: 250,
		Cell: (props: CellProps<ReportsDataType>) => {
			return (
				<div className="max-w-[170px] flex flex-col items-center gap-10 w-full">
					<div className="flex flex-col gap-[16px]">
						{props.data[props.row.index].videos.map((video) => (
							<p
								className="text-[17px] font-light py-[3px] text-center"
								key={video.id}
							>
								{video.views.toLocaleString("en-US")}
							</p>
						))}
					</div>
					<p className="px-2 text-center text-[17px] text-[#272830] font-500">
						{props.data[props.row.index].total.views.toLocaleString("en-US")}
					</p>
				</div>
			);
		},
	},
	{
		id: "spent",
		Header: <Header title="Spent" className="text-center" />,
		maxWidth: 250,
		width: 250,
		Cell: (props: CellProps<ReportsDataType>) => {
			return (
				<div className="max-w-[170px] flex flex-col items-center gap-10 w-full">
					<div className="flex flex-col gap-[16px]">
						{props.data[props.row.index].videos.map((video) => (
							<p
								className="text-[17px] font-light py-[3px] text-center"
								key={video.id}
							>
								${video.spent.toLocaleString("en-US")}
							</p>
						))}
					</div>
					<p className="px-2 text-center text-[17px] text-[#272830] font-500">
						${props.data[props.row.index].total.spent.toLocaleString("en-US")}
					</p>
				</div>
			);
		},
	},
	{
		id: "roas",
		Header: <Header title="ROAS" className="text-center" />,
		maxWidth: 50,
		Cell: (props: CellProps<ReportsDataType>) => {
			return (
				<div className="flex flex-col items-center pr-[15px] gap-8 max-w-[150px]">
					<div className="flex flex-col items-center gap-3">
						{props.data[props.row.index].videos.map((video) => (
							<p
								className="bg-[#F3EA02] px-2 py-[6px] rounded-xl w-fit text-[15px] font-light text-center"
								key={video.id}
							>
								{video.roas}
							</p>
						))}
					</div>
					<p
						className="bg-[#F3EA02] px-2 py-[6px] rounded-xl w-fit text-[15px] font-light text-center"
						key={props.data[props.row.index].total.roas}
					>
						{props.data[props.row.index].total.roas}
					</p>
				</div>
			);
		},
	},
];
