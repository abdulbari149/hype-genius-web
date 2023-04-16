import Modal from '@/components/Modal'
import React, { useEffect, useState } from 'react'
import Contract from './Contract'
import TagsList from './TagsList'
import { useSelector } from 'react-redux'
import { AppState } from '@/store'
import { useContract } from '../hooks/useContract'
import { ContractState, Tags } from '../core/types'
import { getDiff } from '../helpers/getDiff'
import { useUpdateContract } from '../hooks/useUpdateContract'
import { UpdateContractData } from '@/api/type'
import { pick } from '../helpers/pick'
import { useCreateContract } from '../hooks/useCreateContract'

interface EditInfluencerModalProps {
	isOpen: boolean
	handleClose: () => void
}

const EditInfluencerModal: React.FC<EditInfluencerModalProps> = ({
	isOpen,
	handleClose,
}) => {
	const [budget, setBudget] = useState(0)
	const [tags, setTags] = useState<Tags>([])

	const influencer = useSelector((state: AppState) => {
		const data = state.influencers.influencer
		return {
			name: data?.influencer.firstName + ' ' + data?.influencer.lastName,
			email: data?.influencer.email ?? '',
			phoneNumber: data?.influencer.phoneNumber ?? '',
		}
	})

	const channel = useSelector((state: AppState) => ({
		link: state.influencers.influencer?.channel.link ?? '',
	}))

	const contract = useSelector((state: AppState) => {
		const data = state.influencers.influencer
		return {
			is_one_time: data?.contract?.isOneTime ? 'yes' : 'no',
			amount: data?.contract?.amount ?? 0,
			currency_id: data?.contract?.currencyId ?? 0,
			note: '',
			upload_frequency: data?.contract?.uploadFrequency ?? '1x',
			onboarding_id: -1,
			budget: data?.contract?.budget,
		} as ContractState
	})

	const contractId = useSelector(
		(state: AppState) => state.influencers?.influencer?.contract?.id ?? null,
	)

	const { data, handleChange, setData, resetData } = useContract(contract)

	const business_channel_id = useSelector(
		(state: AppState) => state.influencers.influencer?.id,
	)
	const updateContract = useUpdateContract()
	const createContract = useCreateContract()

	useEffect(() => {
		if (isOpen) {
			setData(contract)
			setBudget(contract.budget)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	const saveContract = async (business_channel_id: number) => {
		if (!contractId) {
			await createContract.mutateAsync({
				amount: data.amount,
				business_channel_id,
				currency_id: data.currency_id,
				is_one_time: data.is_one_time === 'yes',
				upload_frequency: data.upload_frequency,
				budget,
			})
			resetData()
			return
		}
		const updatedData: Partial<ContractState> = getDiff(contract, data)
		const newData: UpdateContractData = {
			id: contractId,
			business_channel_id,
			budget,
			...pick(updatedData, 'amount', 'currency_id', 'upload_frequency'),
		}
		if (updatedData.is_one_time) {
			newData.is_one_time = updatedData.is_one_time === 'yes'
		}
		await updateContract.mutateAsync(newData)
		resetData()
	}

	const saveTags = async (business_channel_id: number) => {
		
	}
	async function onSave() {
		if (!business_channel_id) return
		await Promise.all([
			saveContract(business_channel_id),
			saveTags(business_channel_id),
		])
	}

	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleClose}
			style={{
				content: {
					maxWidth: '1200px',
					height: '95%',
					paddingInline: '50px',
				},
			}}
		>
			<div className="flex flex-col pt-[20px] space-y-[30px] w-full h-full">
				<h3 className="text-[#272830] text-[18px] font-[600] ">
					Edit Influencer Info
				</h3>

				<div className="grid w-full grid-cols-3 gap-[5%]">
					<div className="flex flex-col gap-5">
						<label
							className="text-[#272830] text-[18px] font-[600]"
							htmlFor="name"
						>
							Name
						</label>
						<input
							name="name"
							type="text"
							id="name"
							value={influencer.name}
							disabled={true}
							placeholder="joe shmoe"
							className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[15px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
						/>
					</div>
					<div className="flex flex-col gap-5">
						<label
							className="text-[#272830] text-[18px] font-[600]"
							htmlFor="email"
						>
							Email
						</label>
						<input
							name="email"
							type="text"
							value={influencer.email}
							disabled={true}
							id="joe shmoe"
							placeholder="joeshmoe@email.com"
							className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[15px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
						/>
					</div>
					<div className="flex flex-col gap-5">
						<label
							className="text-[#272830] text-[18px] font-[600]"
							htmlFor="phoneNumber"
						>
							Phone Number
						</label>
						<input
							name="phoneNumber"
							type="text"
							id="phoneNumber"
							value={influencer.phoneNumber}
							disabled={true}
							placeholder="123 - 456 - 7890"
							className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[15px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
						/>
					</div>
					<div className="flex flex-col col-span-2 gap-5 mt-4">
						<label
							className="text-[#272830] text-[18px] font-[600]"
							htmlFor="channelLink"
						>
							Channel Link
						</label>
						<input
							name="channelLink"
							type="text"
							id="channelLink"
							value={channel.link}
							disabled={true}
							placeholder="insert link"
							className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[15px] w-full max-w-[85%] border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
						/>
					</div>
					<div className="flex flex-col gap-5 mt-4">
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
							value={budget}
							onChange={(e) => {
								const value = parseFloat(e.target.value)
								if (isNaN(value)) return
								setBudget(value)
							}}
							placeholder="enter your budg et"
							className="font-normal px-4 py-2 bg-[#ECF0F4] rounded-xl text-[15px] w-full border-none outline-none hover:border-none hover:outline-none focus:outline-none focus-within:outline-none"
						/>
					</div>
				</div>

				<Contract
					data={data}
					handleChange={async (key, value) => {
						handleChange(key, value)
					}}
				/>
				<TagsList tags={tags} setTags={setTags} />

				<button
					onClick={onSave}
					className="bg-[#EF539E] px-4 py-2 w-fit mx-auto rounded-xl text-white"
				>
					Save
				</button>
			</div>
		</Modal>
	)
}

export default EditInfluencerModal
