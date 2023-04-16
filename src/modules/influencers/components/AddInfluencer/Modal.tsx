import Modal from '@/components/Modal'
import React, { Suspense } from 'react'
import { QUERY_KEYS } from '@/core/constants'
import Loading from '@/components/Loading'
import ReactModal from 'react-modal'
import { toast } from 'react-toastify'
import { UpdateOnboardingRequestData } from '@/api/type'
import AddInfluencerForm from './Form'
import { useMutation, useQueryClient } from 'react-query'
import { ChannelApi } from '@/api/ChannelApi'
import { ContractState } from '../../core/types'
import { useContract } from '../../hooks/useContract'

const { UPDATE_ONBOARDING, CREATE_ONBOARING } = QUERY_KEYS

interface Props {
	isOpen: boolean
	handleClose: () => void
}

const modalStyles: ReactModal.Styles = {
	content: {
		maxWidth: '1200px',
		height: '95%',
		paddingInline: '50px',
	},
}

const initialData: ContractState = {
	is_one_time: 'yes',
	upload_frequency: '1x',
	amount: 0,
	currency_id: -1,
	onboarding_id: null,
	note: '',
	budget: 0,
}

const AddInfluencerModal: React.FC<Props> = (props) => {
	const { isOpen, handleClose } = props
	const queryClient = useQueryClient()

	const { data, handleChange, setData } = useContract()

	const updateContract = useMutation(UPDATE_ONBOARDING, {
		mutationFn: ChannelApi.updateOnboardingRequest,
		onSuccess() {
			handleClose()
			setData(initialData)
		},
		onError() {
			const message = `Sorry, there was an error setting up the onboarding request. Please try again with a new link.`
			toast.error(message)
			queryClient.invalidateQueries(CREATE_ONBOARING)
			setData(initialData)
		},
	})

	const handleAddModalClose = async () => {
		if (
			data.amount === 0 ||
			data.currency_id === -1 ||
			data.onboarding_id === null
		) {
			return toast.error('Please complete the contract details first.')
		}
		const updatedData: UpdateOnboardingRequestData = {
			amount: data.amount,
			is_one_time: data.is_one_time === 'yes' ? true : false,
			onboarding_id: data.onboarding_id,
			currency_id: data.currency_id,
			upload_frequency: data.upload_frequency,
			budget: data.budget,
		}
		if (data.note !== '') {
			updatedData.note = data.note
		}
		await updateContract.mutateAsync(updatedData)
	}

	return (
		<Modal
			isOpen={isOpen}
			handleClose={handleAddModalClose}
			style={modalStyles}
		>
			<Suspense fallback={<Loading />}>
				<AddInfluencerForm data={data} handleChange={handleChange} />
			</Suspense>
		</Modal>
	)
}

export default AddInfluencerModal
