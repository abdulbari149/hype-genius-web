import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { VscPinned } from 'react-icons/vsc'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { AppState } from '@/store'
import { QUERY_KEYS } from '@/core/constants'
import { NotesApi } from '@/api/NotesApi'
import CreateActivityForm from './CreateActivityForm'

const { GET_ACTIVITIES } = QUERY_KEYS
const Activities = () => {
	const [isCreateActivity, setIsCreateActivity] = useState(false)
	const businessChannelId = useSelector<AppState, number | null>(
		(state) => state.influencers.influencer?.id ?? null,
	)

	const { data: activityList } = useQuery(
		`${GET_ACTIVITIES}/${businessChannelId}`,
		{
			queryFn: () => {
				if (!businessChannelId || businessChannelId === null) {
					throw new Error('Please select an influencer first')
				}
				return NotesApi.getActivites(businessChannelId)
			},
			suspense: true,
		},
	)

	return (
		<div className="flex flex-col w-full min-h-[150px] mb-[70px]">
			<p className="text-[18px] text-[#272830] font-[600]">Activities</p>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>
			<div className="flex items-center justify-between my-2">
				<button
					onClick={() => setIsCreateActivity(true)}
					className="text-[13px] text-center flex gap-1 items-center px-3 py-2 rounded-xl bg-[#ECF0F4]"
				>
					<AiOutlinePlus size={13} /> Add Note
				</button>
				<p className="text-[13px]">View all</p>
			</div>

			<div className="flex flex-col gap-3 mb-[10px]">
				{isCreateActivity ? (
					<CreateActivityForm onHide={() => setIsCreateActivity(false)} />
				) : null}
				{activityList?.data
					.sort((a, b) => Number(b.pinned) - Number(a.pinned))
					.map((activity) => {
						return (
							<div
								key={activity.id}
								className={`relative ${
									activity.pinned ? 'bg-[#A3F0FB]' : 'bg-[#EDF1F5]'
								} p-6 w-full rounded-xl`}
							>
								<div className="absolute top-3 right-3">
									<VscPinned
										width={10}
										className="rotate-45 text-[#191a1f] opacity-60"
									/>
								</div>
								<p className="absolute right-3 bottom-3 text-[10px] text-[#191a1f] opacity-60">
									{activity?.createdAt
										? new Date(activity?.createdAt).toDateString()
										: ''}
								</p>
								<p className="text-[14px] text-[#272830]">{activity?.body}</p>
							</div>
						)
					})}
			</div>
		</div>
	)
}

export default Activities
