import Modal from '@/components/Modal';
import React from 'react';
import Contract from './Contract';
import TagsList from './TagsList';
import { useSelector } from 'react-redux';
import { AppState } from '@/store';
import { useContract } from '../hooks/useContract';

interface EditInfluencerModalProps {
	isOpen: boolean;
	handleClose: () => void;
}

const EditInfluencerModal: React.FC<EditInfluencerModalProps> = ({
	isOpen,
	handleClose,
}) => {
	const { data, handleChange } = useContract()

	const { influencer, channel } = useSelector((state: AppState) => {
		const data = state.influencers.influencer;
		return {
			influencer: {
				name:
					data?.influencer.firstName +
					' ' +
					data?.influencer.lastName,
				email: data?.influencer.email ?? '',
				phoneNumber: data?.influencer.phoneNumber ?? '',
			},
			channel: { link: data?.channel.link },
		};
	});

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
			<div className="flex flex-col pt-[30px] space-y-[50px] w-full h-full">
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
			</div>
		</Modal>
	);
};

export default EditInfluencerModal;
