import { Dispatch, useReducer } from 'react'
import { ContractState, HandleChangeType } from '../core/types'

const initialData: ContractState = {
	is_one_time: 'yes',
	upload_frequency: '1x',
	amount: 0,
	currency_id: -1,
	onboarding_id: null,
	note: '',
} as const

type UseContractReturn = {
	data: ContractState
	handleChange: HandleChangeType
	setData: Dispatch<Partial<ContractState>>
	resetData: () => void
}

type UseContract = (initial?: ContractState) => UseContractReturn

export const useContract: UseContract = (initial = initialData) => {
	const [contract, setContract] = useReducer(
		(state: ContractState, newState: Partial<ContractState>) => {
			if (newState.is_one_time === 'yes') {
				newState.upload_frequency = '1x'
			}
			return {
				...state,
				...newState,
			}
		},
		initial,
	)
	return {
		data: contract,
		handleChange(key, value) {
			setContract({ [key]: value })
		},
		setData: setContract,
		resetData: () => setContract(initialData),
	}
}
