import React, { useState } from 'react'
import FollowUp from './FollowUp'
import Header from './Header'
import Channel from './Channel'
import Alert from './Alert'
import Metrics from './Metrics'
import Uploads from './Uploads'
import Activities from './Activities'
import EditInfluencerModal from '../EditInfluencerModal'
import { AppState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import InfluencerSidePanel from '../InfluencerSidePanel'
import { hideIsEdit, showIsEdit } from '../../core/slice'

interface Props {}

const InfluencersDetail: React.FC<Props> = () => {
	const isEditOpen = useSelector(
		(state: AppState) => state.influencers.isEditOpen,
	)
	const dispatch = useDispatch()
	function openIsEdit() {
		dispatch(showIsEdit())
	}
	function closeIsEdit() {
		dispatch(hideIsEdit())
	}

	const { channelLink = '', ...data } = useSelector((state: AppState) => {
		const { influencer: data } = state.influencers
		const tags = data?.tags && Array.isArray(data?.tags) ? data.tags : []
		return {
			influencer: {
				email: data?.influencer.email ?? '',
				name:
					data?.influencer.firstName + ' ' + data?.influencer.lastName ?? '',
				phoneNumber: data?.influencer.phoneNumber ?? '',
			},
			deal: {
				perMonth: data?.contract?.uploadFrequency ?? '',
				perVideo: data?.contract?.amount.toString(10) ?? 0,
			},
			tag:
				tags.length > 0 ? { text: tags[0].name, color: tags[0].color } : null,
			channelLink: data?.channel.link,
		}
	})

	return (
		<InfluencerSidePanel onClose={closeIsEdit}>
			<div className="flex flex-col items-center h-full gap-6 px-[55px] mt-[50px] mb-[90px] overflow-y-scroll custom-scroll w-full">
				<Header {...data} />
				<FollowUp />
				<Channel link={channelLink} />
				<Alert />
				<Metrics />
				<Uploads />
				<Activities />
			</div>

			<span
				className="bg-[#F8FAFC] absolute bottom-5 inline-block w-full h-[80px]"
				style={{ filter: 'blur(10px)' }}
			></span>
			<button
				onClick={openIsEdit}
				className="px-3 py-2 text-white bg-[#EF539E] absolute bottom-8 rounded-xl"
			>
				Edit Info
			</button>

			<EditInfluencerModal isOpen={isEditOpen} handleClose={closeIsEdit} />
		</InfluencerSidePanel>
	)
}

export default InfluencersDetail
