import { CellProps, Column } from "react-table";
import React from "react";
import PaymentStatus from "@/modules/settings/components/PaymentStatus";
import Tag from "@/components/Tag";
import { IVideo } from "@/api/type";

const Header: React.FC<{ title: string; className?: string }> = ({
	title,
	className = "",
}) => (
	<p
		className={`text-start text-[18px] font-normal text-[#272830] ${className}`}
	>
		{title}
	</p>
);

export const columns: ReadonlyArray<Column<IVideo>> = [
	{
		id: "title",
		Header: <Header title="Video Title" />,
		Cell: (props: CellProps<IVideo>) => (
			<p className="pl-3 text-[17px] max-w-[300px] w-fit text-[#272830] opacity-75 font-normal">
				{props.data[props.row.index].title}
			</p>
		),
	},
	{
		id: "view",
		Header: <Header title="View Video" />,
		Cell: (props: CellProps<IVideo>) => {
			const video = props.data[props.row.index];
			return (
				<div className="grid w-[80px]">
					<a
						href={video.link}
						target="_blank"
						className="bg-[#7187FB80] mx-auto px-4 rounded-xl text-[13px] py-2 cursor-pointer"
					>
						View
					</a>
				</div>
			);
		},
	},
	{
		id: "status",
		Header: <Header title="Payment Status" />,
		Cell: (props: CellProps<IVideo>) => {
			const video = props.data[props.row.index];
			return (
				<PaymentStatus status={video.is_payment_due ? "unpaid" : "paid"} />
			);
		},
	},
	{
		id: "alert",
		Header: <Header title="Alert" />,
		Cell: (props: CellProps<IVideo>) => {
			return props.data[props.row.index].is_payment_due ? (
				<Tag
					text="Payment Due"
					color="#FFDE2E80"
					className="w-fit text-[13px] px-5"
				/>
			) : null;
		},
	},
];
