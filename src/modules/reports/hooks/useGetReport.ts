import { BusinessApi } from "@/api/BusinessApi"
import { QUERY_KEYS } from "@/core/constants"
import { AppState } from "@/store"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"

export const useGetReport = () => {
  const data = useSelector((state: AppState) => state.report);
  return useQuery({
    queryKey: [QUERY_KEYS.GET_REPORT, data],
    queryFn: () => {
      return BusinessApi.getBusinessReport(data);
    },
    suspense: true,
    keepPreviousData: true
  })
}