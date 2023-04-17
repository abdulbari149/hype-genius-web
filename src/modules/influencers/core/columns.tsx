import { CellProps, Column } from 'react-table'
import Tag from '@/components/Tag'
import PaymentStatus from '@/modules/settings/components/PaymentStatus'
import { GetInfluencers } from '@/api/type'

const Header: React.FC<
	{ title: string } & React.HTMLAttributes<HTMLParagraphElement>
> = ({ title, className = '', ...props }) => (
	<p
		{...props}
		className={`px-2 text-start font-normal text-[#272830] text-[17px] ${className}`}
	>
		{title}
	</p>
)

type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never

type ColumnData = ArrayElement<GetInfluencers['data']>

export const columns: Readonly<Array<Column<ColumnData>>> = [
	{
		id: 'influencer',
		Header: <Header title={'Influencer'} />,
		accessor: 'influencer',
		maxWidth: 100,
		Cell: (props: CellProps<ColumnData>) => {
			const { influencer } = props.data[props.row.index]
			return (
				<div className="flex items-center px-4">
					{influencer.firstName + ' ' + influencer.lastName}{' '}
					{/* {influencer.circle ? (
						<span
							className={`rounded-full ml-3 w-5 h-5 inline-block`}
							style={{ background: influencer.circleColor }}
						></span>
					) : (
						""
					)} */}
				</div>
			)
		},
	},
	{
		id: 'tags',
		Header: <Header title={'Tags'} />,
		accessor: 'tags',
		maxWidth: 120,
		Cell: (props) => {
			const tags = props.data[props.row.index].tags
			if (!tags) return <div></div>
			return (
				<div className="flex flex-row items-center gap-2">
					{tags.map((tag) => (
						<Tag text={tag.text} color={tag.color} key={tag.id} />
					))}
				</div>
			)
		},
	},
	{
		id: 'currentDeal',
		Header: <Header title={'Current Deal'} />,
		accessor: 'contract',
		maxWidth: 100,
		Cell: (props) => {
			const currentDeal = props.data[props.row.index].contract
			return typeof currentDeal !== 'undefined' && currentDeal ? (
				<div className="flex items-center gap-3">
					<div className="text-[#272830]">
						<span className="text-[15px] font-[500]">
							${parseFloat(currentDeal.amount.toString()).toFixed(2)}
						</span>
						/<span className="text-[12px] font-normal">video</span>
					</div>
					<span className="font-normal">|</span>
					<div className="text-[#272830]">
						<span className="text-[15px] font-[500] tracking-[1px]">
							{currentDeal.uploadFrequency.toUpperCase()}
						</span>
						/<span className="text-[12px] font-normal">mo</span>
					</div>
				</div>
			) : null
		},
	},
	{
		Header: <Header title="Payment Status" />,
		Cell: (props) => {
			const status = props.data[props.row.index].paymentStatus
			if (!status) return <></>
			return <PaymentStatus containerClassName="pl-[30px]" status={status} />
		},
		accessor: 'paymentStatus',
		id: 'paymentStatus',
	},
	{
		Header: <Header title="Alert" className="text-end" />,
		Cell: (props) => {
			const alert = props.data[props.row.index].alert

			if (!alert) return <></>

			const data = {
				text: alert.name
					.replace('_', ' ')
					.split(' ')
					.map((i) => `${i.charAt(0).toUpperCase()}${i.substring(1)}`)
					.join(' '),
				color: alert.color,
				priority: alert.priority,
			}

			return (
				<div className="flex items-center justify-end pr-4">
					<Tag {...data} />
				</div>
			)
		},
		accessor: 'alert',
		id: 'alert',
	},
]
