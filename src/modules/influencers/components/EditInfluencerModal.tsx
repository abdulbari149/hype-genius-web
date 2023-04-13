import Modal from '@/components/Modal'
import React, { useEffect } from 'react'
import Contract from './Contract'
import TagsList from './TagsList'
import { useSelector } from 'react-redux'
import { AppState } from '@/store'
import { useContract } from '../hooks/useContract'
import { ContractState } from '../core/types'
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
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen])

	async function onSave() {
		if (!business_channel_id) return
		if (!contractId) {
			await createContract.mutateAsync({
				amount: data.amount,
				business_channel_id,
				currency_id: data.currency_id,
				is_one_time: data.is_one_time === 'yes',
				upload_frequency: data.upload_frequency,
			})
			resetData()
			return
		}
		const updatedData: Partial<ContractState> = getDiff(contract, data)
		const newData: UpdateContractData = {
			id: contractId,
			business_channel_id,
			...pick(updatedData, 'amount', 'currency_id', 'upload_frequency'),
		}
		if (updatedData.is_one_time) {
			newData.is_one_time = updatedData.is_one_time === 'yes'
		}
		await updateContract.mutateAsync(newData)
		resetData()
	}

	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleClose}
			style={{
				content: {
					maxWidth: '1200px',
					height: '90%',
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
				<TagsList />

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
