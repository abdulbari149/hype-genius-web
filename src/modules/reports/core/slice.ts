import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ReportState {
  report_for_all: boolean;
  page: number;
  size: number;
  business_channel_id: number | null
}

const initialState: ReportState = {
  report_for_all: true,
  business_channel_id: null,
  page: 1,
  size: 3,
}

const reportsSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    setReportForAll(state: ReportState, action: PayloadAction<Pick<ReportState, 'report_for_all'>>) {
      state.report_for_all = action.payload.report_for_all
    },
    setBusinessChannel(state: ReportState, action: PayloadAction<Pick<ReportState, 'business_channel_id'>>) {
      state.business_channel_id = action.payload.business_channel_id
    },
    setPage(state: ReportState, action: PayloadAction<Pick<ReportState, 'page'>>) {
      state.page = action.payload.page
    },
    setSize(state: ReportState, action: PayloadAction<Pick<ReportState, 'size'>>) {
      state.size = action.payload.size
    }

  }
})
export const { setBusinessChannel, setPage, setReportForAll, setSize } = reportsSlice.actions
export default reportsSlice