import { IVideo } from '@/api/type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface DashboardSliceData {
	videoId: number | null
	isDetailsOpen: boolean
	video: IVideo | null
	dateFilters: {
		start_date: string
		end_date: string
	}
}

const initialState: DashboardSliceData = {
	videoId: null,
	isDetailsOpen: false,
	video: null,
	dateFilters: {
		start_date: '',
		end_date: '',
	},
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
		setDateFilter: (
			state: DashboardSliceData,
			action: PayloadAction<Partial<DashboardSliceData['dateFilters']>>,
		) => {
			state.dateFilters = {
				...state.dateFilters,
				...action.payload,
			}
		},
	},
})

export const { selectVideo, setIsDetailsOpen, setDateFilter } =
	dashboardSlice.actions
export default dashboardSlice
