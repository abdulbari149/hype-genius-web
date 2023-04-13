import { IVideo } from '@/api/type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DashboardSliceData {
	videoId: number | null
	isDetailsOpen: boolean
	video: IVideo | null
}

const initialState: DashboardSliceData = {
	videoId: null,
	isDetailsOpen: false,
	video: null,
}

const dashboardSlice = createSlice({
	initialState,
	name: 'dashboard',
	reducers: {
		selectVideo: (state, action: PayloadAction<{ video: IVideo }>) => {
			state.videoId = action.payload.video.id
			state.video = action.payload.video
			state.isDetailsOpen = true
		},
		setIsDetailsOpen: (state, action: PayloadAction<boolean>) => {
			state.isDetailsOpen = action.payload
		},
	},
})

export const { selectVideo, setIsDetailsOpen } = dashboardSlice.actions
export default dashboardSlice
