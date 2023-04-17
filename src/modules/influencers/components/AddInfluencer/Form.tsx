import React from 'react'
import Contract from '../Contract'
import TagsList from '../TagsList'
import OnboardingLink from '../OnboardingLink'
import { ContractState, HandleChangeType, Tags } from '../../core/types'
import { useCreateOnboarding } from '../../hooks/useCreateOnboarding'

interface Props {
	contract: ContractState
	handleChange: HandleChangeType
	tags: Tags
	setTags: React.Dispatch<React.SetStateAction<Tags>>
}

const AddInfluencerForm: React.FC<Props> = ({
	contract,
	handleChange,
	tags,
	setTags,
}) => {
	const { data: onboardingData } = useCreateOnboarding({
		onSuccess(data) {
			handleChange('onboarding_id', data.data.id)
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
					value={contract.budget}
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
					amount: contract.amount,
					currency_id: contract.currency_id,
					is_one_time: contract.is_one_time,
					note: contract.note,
					upload_frequency: contract.upload_frequency,
					budget: contract.budget,
				}}
				handleChange={handleChange}
			/>
			<TagsList tags={tags} setTags={setTags} />
		</div>
	)
}

export default AddInfluencerForm
