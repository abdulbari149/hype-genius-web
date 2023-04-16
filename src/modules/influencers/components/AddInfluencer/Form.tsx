import React, { useState } from 'react'
import Contract from '../Contract'
import TagsList from '../TagsList'
import { useQuery } from 'react-query'
import { QUERY_KEYS } from '@/core/constants'
import { ChannelApi } from '@/api/ChannelApi'
import OnboardingLink from '../OnboardingLink'
import { ContractState, HandleChangeType } from '../../core/types'

const { CREATE_ONBOARING } = QUERY_KEYS

interface Props {
	data: ContractState
	handleChange: HandleChangeType
}

const AddInfluencerForm: React.FC<Props> = ({ data, handleChange }) => {
	const [enabled, setEnabled] = useState(true)
	const { data: onboardingData } = useQuery(CREATE_ONBOARING, {
		queryFn: ChannelApi.createOnboardingRequest,
		suspense: true,
		retry: false,
		refetchOnReconnect: false,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		enabled,
		onSuccess(data) {
			handleChange('onboarding_id', data.data.id)
		},
		onSettled() {
			setEnabled(false)
		},
	})

	return (
		<div className="flex flex-col pt-[30px] space-y-[50px] w-full h-full">
			<h3 className="text-[#272830] text-[18px] font-[600]">Add Influencer</h3>
			<OnboardingLink url={onboardingData?.data.link ?? ''} />
			<div className="flex flex-col max-w-md gap-5 mt-4">
				<label
					className="text-[#272830] text-[18px] font-[600]"
					htmlFor="budget"
				>
					Budget
				</label>
				<input
					name="budget"
					type="number"
					id="budget"
					value={data.budget}
					onChange={(e) => {
						const value = parseFloat(e.target.value)
						handleChange('budget', value)
					}}
					placeholder="enter your budget"
					className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[15px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
				/>
			</div>
			<Contract
				data={{
					amount: data.amount,
					currency_id: data.currency_id,
					is_one_time: data.is_one_time,
					note: data.note,
					upload_frequency: data.upload_frequency,
					budget: data.budget,
				}}
				handleChange={handleChange}
			/>
			<TagsList />
		</div>
	)
}

export default AddInfluencerForm
