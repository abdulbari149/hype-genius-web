import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface ReportState {
	report_for_all: boolean
	page: number
	size: number
	business_channel_id: number | null
	start_date: string
	end_date: string
	date_option: string
}

const initialState: ReportState = {
	report_for_all: true,
	business_channel_id: null,
	page: 1,
	size: 3,
	start_date: '',
	end_date: '',
	date_option: '',
}

const reportsSlice = createSlice({
	name: 'report',
	initialState,
	reducers: {
		setReportForAll(
			state: ReportState,
			action: PayloadAction<Pick<ReportState, 'report_for_all'>>,
		) {
			state.report_for_all = action.payload.report_for_all
		},
		setBusinessChannel(
			state: ReportState,
			action: PayloadAction<Pick<ReportState, 'business_channel_id'>>,
		) {
			state.business_channel_id = action.payload.business_channel_id
		},
		setPage(
			state: ReportState,
			action: PayloadAction<Pick<ReportState, 'page'>>,
		) {
			state.page = action.payload.page
		},
		setSize(
			state: ReportState,
			action: PayloadAction<Pick<ReportState, 'size'>>,
		) {
			state.size = action.payload.size
		},
		setStartDate(
			state: ReportState,
			action: PayloadAction<Pick<ReportState, 'start_date'>>,
		) {
			state.start_date = action.payload.start_date
		},
		setEndDate(
			state: ReportState,
			action: PayloadAction<Pick<ReportState, 'end_date'>>,
		) {
			state.end_date = action.payload.end_date
		},
		setDateOption(
			state: ReportState,
			action: PayloadAction<Pick<ReportState, 'date_option'>>,
		) {
			state.date_option = action.payload.date_option
		},
	},
})
export const {
	setBusinessChannel,
	setPage,
	setReportForAll,
	setSize,
	setEndDate,
	setStartDate,
	setDateOption,
} = reportsSlice.actions
export default reportsSlice
