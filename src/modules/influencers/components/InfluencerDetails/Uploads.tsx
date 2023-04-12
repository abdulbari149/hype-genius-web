import React from 'react';
import Selector from '@/components/Selector';
import { useVideoUploads } from '../../hooks/useVideoUploads';
import { useSelector } from 'react-redux';
import { AppState } from '@/store';
import { MONTHS, QUERY_KEYS } from '@/core/constants';
import { GetVideos } from '@/api/type';

function select(data: GetVideos) {
	const videos = data.data.map((item) => {
		const uploadDate = new Date(item?.createdAt ?? '');
		return {
			...item,
			amount: item?.payment?.business_amount ?? 0,
			date: {
				day: uploadDate.getDate(),
				year: uploadDate.getFullYear(),
				month: MONTHS[uploadDate.getMonth()],
			},
		};
	});

	return {
		...data,
		data: videos,
	};
}

const Uploads = () => {
	const businessChannelId = useSelector(
		(state: AppState) => state.influencers?.influencer?.id ?? NaN
	);
	const { data: uploads, isSuccess } = useVideoUploads(
		`${QUERY_KEYS.GET_VIDEOS}/${businessChannelId}`,
		{
			businessChannelId,
			fields: ['payment'],
		},
		{
			select,
		}
	);
	return (
		<div className="flex flex-col w-full">
			<div className="flex items-center gap-2 mb-[3px]">
				<p className="text-[18px] text-[#272830] font-[600]">
					Uploads
				</p>
				<Selector
					type="time"
					customClassName="bg-[#ECF0F4] pr-5 pl-3 mb-1 py-2 rounded-xl text-[13px]"
					style={{
						backgroundPosition: 'calc(100% - 8px) center',
					}}
				/>{' '}
			</div>
			<span className="inline-block w-full opacity-50 bg-stone-400 h-[2px]"></span>

			<div className="flex flex-col gap-1 mt-[10px]">
				{uploads?.data?.map((upload) => {
					return (
						<div
							key={upload.id}
							className="flex flex-row items-center justify-between"
						>
							<div className="text-[#272830]">
								<span className="text-[17px] font-500">
									{upload.date.month}{' '}
									{upload.date.day},
								</span>
								<span className="text-[13px] font-300 px-[3px]">
									{upload.date.year}
								</span>
							</div>

							<p className="text-[13px] text-[#272830]">
								{upload.link.length < 35
									? upload.link
									: upload.link.slice(0, 35) + '...'}
							</p>
							<p className="text-[17px] text-[#1C921A]">
								${upload?.amount}
							</p>
							<div className="flex items-center gap-1">
								<span className="text-[17px] text-[#3BACFE]">
									{upload.views.toLocaleString(
										'en-US'
									)}
								</span>
								<span className="text-[11px] text-[#272830]">
									Views
								</span>
							</div>
						</div>
					);
				})}
				{isSuccess && uploads?.data.length === 0 && 'NA'}
			</div>
		</div>
	);
};

export default Uploads;
