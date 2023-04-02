import React, { useState } from 'react';
import Contract, { ContractProps } from '../Contract';
import TagsList from '../TagsList';
import { useQuery } from 'react-query';
import { QUERY_KEYS } from '@/core/constants';
import { ChannelApi } from '@/api/ChannelApi';
import OnboardingLink from '../OnboardingLink';
import { ContractState } from './Modal';

const { CREATE_ONBOARING } = QUERY_KEYS;

export type HandleChangeType = (
	key: keyof ContractState,
	value: string | number,
) => Promise<void>;

interface Props {
	data: ContractState;
	setData: React.Dispatch<Partial<ContractState>>;
}

const AddInfluencerForm: React.FC<Props> = ({ data, setData }) => {
	const { onboardingId, ...contract } = data;

	const [enabled, setEnabled] = useState(true);
	const { data: onboardingData } = useQuery(CREATE_ONBOARING, {
		queryFn: ChannelApi.createOnboardingRequest,
		suspense: true,
		retry: false,
		refetchOnReconnect: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		enabled,
		onSuccess(data) {
			setData({ onboardingId: data.data.id });
		},
		onSettled() {
			setEnabled(false);
		},
	});

	const handleChange: HandleChangeType = async (key, value) => {
		setData({ [key]: value });
	};

	return (
		<div className="flex flex-col pt-[30px] space-y-[50px] w-full h-full">
			<h3 className="text-[#272830] text-[18px] font-[600]">
				Add Influencer
			</h3>
			<OnboardingLink url={onboardingData?.data.link ?? ''} />
			<Contract data={contract} handleChange={handleChange} />
			<TagsList />
		</div>
	);
};

export default AddInfluencerForm;
