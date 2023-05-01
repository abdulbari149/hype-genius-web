import { BusinessApi } from '@/api/BusinessApi'
import { GetBusinessReport, GetReportData } from '@/api/type'
import { QUERY_KEYS } from '@/core/constants'
import { UseQueryOptions, useQuery } from '@tanstack/react-query'

type UseGetReportFilters = Partial<GetReportData>
type UseGetReportsOption<T> = UseQueryOptions<
	GetBusinessReport,
	unknown,
	T,
	[string, UseGetReportFilters]
>

const { GET_REPORT } = QUERY_KEYS

export const useGetReport = <T = GetBusinessReport>(
	filters: UseGetReportFilters,
	options: UseGetReportsOption<T> = {},
) => {
	return useQuery({
		queryKey: [GET_REPORT, filters],
		queryFn: () => {
			return BusinessApi.getBusinessReport(filters)
		},
		suspense: true,
		keepPreviousData: true,
		...options,
	})
}
