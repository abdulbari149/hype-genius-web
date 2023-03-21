import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { number } from "zod";

interface InfluencerSliceData {
	videoId: number | null;
	isDetailsOpen: boolean;
}

const initialState: InfluencerSliceData = {
	videoId: null,
	isDetailsOpen: false,
};

const influencerSlice = createSlice({
	initialState,
	name: "influencer",
	reducers: {
		selectVideo: (
			state,
			action: PayloadAction<{ id: number }>
		) => {
			state.videoId = action.payload.id;
			state.isDetailsOpen = true;
		},
		setIsDetailsOpen: (state, action: PayloadAction<boolean>) => {
			state.isDetailsOpen = action.payload;
		},
	},
});

export const { selectVideo, setIsDetailsOpen } = influencerSlice.actions;
export default influencerSlice;
