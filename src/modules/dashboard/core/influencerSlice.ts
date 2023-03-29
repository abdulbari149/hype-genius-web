import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVideo } from "./type";

interface InfluencerSliceData {
	videoId: number | null;
	isDetailsOpen: boolean;
	video: IVideo | null;
}

const initialState: InfluencerSliceData = {
	videoId: null,
	isDetailsOpen: false,
	video: null,
};

const influencerSlice = createSlice({
	initialState,
	name: "influencer",
	reducers: {
		selectVideo: (state, action: PayloadAction<{ video: IVideo }>) => {
			state.videoId = action.payload.video.id;
			state.video = action.payload.video;
			state.isDetailsOpen = true;
		},
		setIsDetailsOpen: (state, action: PayloadAction<boolean>) => {
			state.isDetailsOpen = action.payload;
		},
	},
});

export const { selectVideo, setIsDetailsOpen } = influencerSlice.actions;
export default influencerSlice;
