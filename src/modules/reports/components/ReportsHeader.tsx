import React, { useMemo } from 'react';
import Selector, { type Option } from '@/components/Selector';
import { useGetInfluencers } from '@/modules/influencers/hooks/useGetInfluencers';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@/store';
import { setBusinessChannel, setReportForAll } from '../core/slice';
import { useQueryClient } from 'react-query';
import { QUERY_KEYS } from '@/core/constants';

const ReportsHeader = () => {
	const { data: influencers } = useGetInfluencers();
	const dispatch = useDispatch();
	const businessChannel = useSelector((state: AppState) => {
		const id = state.report.business_channel_id;
		if (id === null) return 0;
		return id;
	});
	const options = useMemo(() => {
		const defaultOptions = [
			{
				id: 'full-report',
				value: 0,
				label: 'Full Report',
			},
		];
		if (!influencers) return defaultOptions;
		const businessChannelOptions = influencers.data.map((i) => {
			return {
				id: i.id.toString(),
				label: i.influencer.firstName + ' ' + i.influencer.lastName,
				value: i.id,
			};
		});
		return [...defaultOptions, ...businessChannelOptions];
	}, [influencers]);

	const queryClient = useQueryClient();

	const handleChange = async (value: string) => {
		let business_channel_id: number | null = parseInt(value);
		let report_for_all: boolean = false;
		if (isNaN(business_channel_id)) return;
		if (business_channel_id === 0) {
			business_channel_id = null;
			report_for_all = true;
		}
		dispatch(setReportForAll({ report_for_all }));
		dispatch(setBusinessChannel({ business_channel_id }));
	};

	return (
		<>
			<h1 className="text-[#272830] text-[18px] font-500">
				Please select the data you would like to export
			</h1>
			<div className="flex items-center gap-3">
				<p className="text-[15px] font-light">
					I would like to view
				</p>
				<Selector
					type="option"
					options={options}
					onChange={handleChange}
					value={businessChannel}
				/>
				<p className="text-[15px] font-light">From</p>
				<Selector type="time" />
				<button className="text-white bg-[#EF539E] px-3 py-2 shadow-lg rounded-lg text-[13px] ml-3">
					Export
				</button>
			</div>
		</>
	);
};

export default ReportsHeader;
