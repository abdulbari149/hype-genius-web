import Modal from '@/components/Modal';
import React, { Suspense, useReducer } from 'react';
import { QUERY_KEYS } from '@/core/constants';
import Loading from '@/components/Loading';
import ReactModal from 'react-modal';
import { toast } from 'react-toastify';
import { ContractUploadFrequency, UpdateOnboardingRequestData } from '@/api/type';
import AddInfluencerForm from './Form';
import { useMutation, useQueryClient } from 'react-query';
import { ChannelApi } from '@/api/ChannelApi';
import { handleError } from '@/modules/auth/core/utils';

const { UPDATE_ONBOARDING, CREATE_ONBOARING } = QUERY_KEYS;

interface Props {
	isOpen: boolean;
	handleClose: () => void;
}

const modalStyles: ReactModal.Styles = {
	content: {
		maxWidth: '1200px',
		height: '90%',
		paddingInline: '50px',
	},
};

export type ContractState = {
	isOneTime: 'yes' | 'no',
	uploadFrequency: ContractUploadFrequency,
	amount: number,
	currencyId: number,
	onboardingId: number | null,
	note: string;
};

const initialData: ContractState = {
	isOneTime: 'yes',
	uploadFrequency: '1x',
	amount: 0,
	currencyId: -1,
	onboardingId: null,
	note: ''
};

const AddInfluencerModal: React.FC<Props> = (props) => {
	const { isOpen, handleClose } = props;
	const queryClient = useQueryClient();

	const [contract, setContract] = useReducer(
		(state: ContractState, newState: Partial<ContractState>) => {
			if (newState.isOneTime === 'yes') {
				newState.uploadFrequency = '1x';
			}
			return {
				...state,
				...newState,
			};
		},
		initialData
	);

	const updateContract = useMutation(UPDATE_ONBOARDING, {
		mutationFn: ChannelApi.updateOnboardingRequest,
		onSuccess() {
			handleClose();
			setContract(initialData);
		},
		onError() {
			const message = `Sorry, there was an error setting up the onboarding request. Please try again with a new link.`;
			toast.error(message);
			queryClient.invalidateQueries(CREATE_ONBOARING);
			setContract(initialData);
		},
	});

	const handleAddModalClose = async () => {
		if (
			contract.amount === 0 ||
			contract.currencyId === -1 ||
			contract.onboardingId === null
		) {
			return toast.error(
				'Please complete the contract details first.'
			);
		}
		const data: UpdateOnboardingRequestData = {
			amount: contract.amount,
			is_one_time: contract.isOneTime === 'yes' ? true : false,
			onboarding_id: contract.onboardingId,
			currency_id: contract.currencyId,
			upload_frequency: contract.uploadFrequency,
		}
		if (contract.note !== '') {
			data.note = contract.note
		}
		await updateContract.mutateAsync(data);
	};

	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleAddModalClose}
			style={modalStyles}
		>
			<Suspense fallback={<Loading />}>
				<AddInfluencerForm data={contract} setData={setContract} />
			</Suspense>
		</Modal>
	);
};

export default AddInfluencerModal;
