import { Column } from "react-table";
import { InfluencerData } from "./types";
import Tag from "@/components/Tag";
import PaymentStatus from "@/modules/settings/components/PaymentStatus";

const Header: React.FC<
	{ title: string } & React.HTMLAttributes<HTMLParagraphElement>
> = ({ title, className = "", ...props }) => (
	<p
		{...props}
		className={`px-2 text-start font-normal text-[#272830] text-[17px] ${className}`}
	>
		{title}
	</p>
);

export const columns: Readonly<Array<Column<InfluencerData>>> = [
	{
		Header: <Header title={"Influencer"} />,
		accessor: "influencer",
		maxWidth: 100,
		Cell: (props) => {
			const { influencer } = props.data[props.row.index];
			return (
				<div className="flex items-center px-4">
					{influencer.name}{" "}
					{influencer.circle ? (
						<span
							className={`rounded-full ml-3 w-5 h-5 inline-block`}
							style={{ background: influencer.circleColor }}
						></span>
					) : (
						""
					)}
				</div>
			);
		},
	},
	{
		Header: <Header title={"Tags"} />,
		accessor: "tags",
		maxWidth: 120,
		Cell: (props) => {
			return (
				<div className="flex flex-row items-center gap-2">
					{props.data[props.row.index].tags.map((tag) => (
						<Tag {...tag} key={tag.title} />
					))}
				</div>
			);
		},
	},
	{
		Header: <Header title={"Current Deal"} />,
		accessor: "currentDeal",
		maxWidth: 100,
		Cell: (props) => {
			const currentDeal = props.data[props.row.index].currentDeal;
			return typeof currentDeal !== "undefined" ? (
				<div className="flex items-center gap-3">
					<div className="text-[#272830]">
						<span className="text-[15px] font-[500]">
							${parseFloat(currentDeal.perVideo).toFixed(2)}
						</span>
						/<span className="text-[12px] font-normal">video</span>
					</div>
					<span className="font-normal">|</span>
					<div className="text-[#272830]">
						<span className="text-[15px] font-[500] tracking-[1px]">
							{currentDeal.perMonth.toUpperCase()}
						</span>
						/<span className="text-[12px] font-normal">mo</span>
					</div>
				</div>
			) : null;
		},
	},
	{
		Header: <Header title="Payment Status" />,
		Cell: (props) => (
			<PaymentStatus
				containerClassName="pl-[30px]"
				status={props.data[props.row.index].paymentStatus}
			/>
		),
		accessor: "paymentStatus",
		id: "paymentStatus",
	},
	{
		Header: <Header title="Alert" className="text-end" />,
		Cell: (props) => (
			<div className="flex items-center justify-end pr-4">
				<Tag
					color={props.data[props.row.index].alert.color}
					title={props.data[props.row.index].alert.title}
				/>
			</div>
		),
		accessor: "alert",
		id: "alert",
	},
];
