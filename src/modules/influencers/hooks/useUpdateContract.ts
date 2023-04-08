import { ContractApi } from "@/api/ContractApi"
import { QUERY_KEYS } from "@/core/constants"
import { useMutation, useQueryClient } from "react-query"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { setContract, hideIsEdit } from "../core/slice"
const { UPDATE_CONTRACT, GET_INFLUENCERS } = QUERY_KEYS

export const useUpdateContract = () => {
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const updateContract = useMutation(UPDATE_CONTRACT, {
    mutationFn: ContractApi.updateContract,
    async onSuccess(data) {
      dispatch(setContract({
        contract: {
          id: data.data.id,
          amount: data.data.amount,
          isOneTime: data.data.is_one_time,
          createdAt: data.data.createdAt,
          updatedAt: data.data.updatedAt,
          deletedAt: data.data.deletedAt,
          currencyId: data.data.currency_id,
          uploadFrequency: data.data.upload_frequency
        }
      }))
      await queryClient.invalidateQueries(GET_INFLUENCERS)
      dispatch(hideIsEdit())
      toast.success(data.message);
    },
  })
  return updateContract;
}