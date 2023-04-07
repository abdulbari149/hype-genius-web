import { useReducer } from "react";
import { ContractState, HandleChangeType } from "../core/types";

const initialData: ContractState = {
  is_one_time: 'yes',
  upload_frequency: '1x',
  amount: 0,
  currency_id: -1,
  onboarding_id: null,
  note: ''
} as const;

type UseContract = () => ({ data: ContractState, handleChange: HandleChangeType, setData: React.Dispatch<React.SetStateAction<ContractState>> })

export const useContract: UseContract = () => {
  const [contract, setContract] = useReducer(
    (state: ContractState, newState: Partial<ContractState>) => {
      if (newState.is_one_time === 'yes') {
        newState.upload_frequency = '1x';
      }
      return {
        ...state,
        ...newState,
      };
    },
    initialData
  );
  return {
    data: contract,
    handleChange(key, value) {
      setContract({ [key]: value })
    },
    setData: setContract,
  }
}