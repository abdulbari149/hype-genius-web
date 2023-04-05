import Card from '@/components/Card';
import React, { Suspense, useState } from 'react';
import Close from '@/components/Close';
import FollowUp from './FollowUp';
import Header from './Header';
import Channel from './Channel';
import Alert from './Alert';
import Metrics from './Metrics';
import Uploads from './Uploads';
import Activities from './Activities';
import EditInfluencerModal from '../EditInfluencerModal';
import { AppState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { setInfluencer } from '../../core/slice';
import Loading from '@/components/Loading';
interface Props { }

const InfluencersDetail: React.FC<Props> = () => {
	const [isEditOpen, setIsEditOpen] = useState(false);

	function openIsEdit() {
		setIsEditOpen(true);
	}

	function closeIsEdit() {
		setIsEditOpen(false);
	}

	const dispatch = useDispatch();

	function handleClose() {
		dispatch(setInfluencer({ influencer: null }));
		closeIsEdit();
	}

	const { channelLink = '', ...data } = useSelector((state: AppState) => {
		const { influencer: data } = state.influencers;
		return {
			influencer: {
				email: data?.influencer.email ?? '',
				name:
					data?.influencer.firstName +
					' ' +
					data?.influencer.lastName ?? '',
				phoneNumber: data?.influencer.phoneNumber ?? '',
			},
			deal: {
				perMonth: data?.contract?.uploadFrequency ?? '',
				perVideo: data?.contract?.amount.toString(10) ?? 0,
			},
			channelLink: data?.channel.link,
		};
	});

	return (
		<Card
			className="relative flex flex-col items-center h-full col-span-3 gap-4 overflow-hidden rounded-xl"
			style={{
				boxShadow:
					'0px 4px 103px rgba(50, 50, 71, 0.01), 0px 4px 59px rgba(50, 50, 71, 0.06)',
			}}
		>
			<Close onClose={handleClose} />
			<Suspense fallback={<Loading />}>
				<div className="flex flex-col items-center h-full gap-6 px-[45px] mt-[50px] mb-[90px] overflow-y-scroll custom-scroll">
					<Header {...data} />
					<FollowUp />
					<Channel link={channelLink} />
					<Alert />
					<Metrics />
					<Uploads />
					<Activities />
				</div>
			</Suspense>

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

			<EditInfluencerModal
				isOpen={isEditOpen}
				handleClose={closeIsEdit}
			/>
		</Card>
	);
};

export default InfluencersDetail;
