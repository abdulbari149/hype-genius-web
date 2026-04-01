import Card from '@/components/Card'
import { QUERY_KEYS } from '@/core/constants'
import { useVideoUploads } from '@/modules/influencers/hooks/useVideoUploads'
import { Inter } from 'next/font/google'
import React, { useMemo } from 'react'
import moment from 'moment'
import { GetVideos } from '@/api/type'
import Tag from '@/components/Tag'

const inter = Inter({
	weight: '500',
	style: 'normal',
	subsets: ['greek'],
})

type Props = {
	name: string
	title: string
	views: string | number
	uploadedTime: Date | null
}

const UploadColumn: React.FC<Props> = ({
	name,
	title,
	views,
	uploadedTime,
}) => {
	return (
		<div className="flex items-center gap-5 mb-6 h-max">
			<div className="flex flex-col max-w-[70%] w-full">
				<p className="text-[#344054] text-[15px]" style={inter.style}>
					{name}
					<span className="text-[12px] text-[#667085] pl-2">
						{uploadedTime === null ? moment(uploadedTime).fromNow() : ' '}
					</span>
				</p>
				<p className="w-full text-[#667085] text-[15px] leading-[18px]">
					{title}
				</p>
			</div>
			<p className="max-w-[30%] w-full text-[17px]">
				{views ? views?.toLocaleString('en-US') : '0'}
			</p>
		</div>
	)
}

function select(data: GetVideos) {
	const uploads = data?.data.sort((x, y) => {
		if (x.is_payment_due === y.is_payment_due) return 0
		if (x.is_payment_due) return -1
		return 1
	})
	return {
		...data,
		data: uploads,
	}
}

const { GET_UPLOADS } = QUERY_KEYS

const UploadsList = () => {
	const { data: uploads } = useVideoUploads(
		[GET_UPLOADS],
		{
			fields: ['influencer'],
		},
		{
			select,
		},
	)
	const noOfPaymentsDue = useMemo(() => {
		return uploads !== undefined
			? uploads?.data?.reduce((acc, upload) => {
					if (upload.is_payment_due) {
						return acc + 1
					}
					return acc
			  }, 0) ?? 0
			: 0
	}, [uploads])

	return (
		<div className="flex flex-col items-start gap-2 max-w-[40%] w-full pr-3">
			<Tag
				tagType="danger"
				text={
					noOfPaymentsDue === 0
						? 'Payments Cleared'
						: `${noOfPaymentsDue} Payments Due`
				}
			/>
			<Card className="flex-1 py-[25px] pl-[50px] w-full h-full overflow-y-scroll custom-scroll rounded-[15px]">
				<div className="flex items-start gap-5 mb-7">
					<p className="max-w-[70%] w-full text-[17px]">Uploads</p>
					<p className="max-w-[30%] w-full text-[17px]">Views</p>
				</div>
				{uploads?.data.map((item) => {
					const upload = {
						name: item?.influencer
							? `${item?.influencer?.firstName} ${item?.influencer?.lastName}`
							: '',
						title: item.title,
						views: item.views,
						uploadedTime: item.createdAt ? new Date(item.createdAt) : null,
					}
					return <UploadColumn key={item.id} {...upload} />
				})}
			</Card>
		</div>
	)
}

export default UploadsList
