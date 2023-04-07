import { GetInfluencerData } from "@/api/type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PanelType } from "./types";

interface State {
  influencer: null | GetInfluencerData,
  panel?: PanelType;
}

const initialState: State = {
  influencer: null,
}

const influencersSlice = createSlice({
  name: 'influencers',
  initialState,
  reducers: {
    setInfluencer(state: State, action: PayloadAction<Pick<State, 'influencer'>>) {
      state.influencer = action.payload.influencer
    },
    showPanel(state: State, action: PayloadAction<Required<Pick<State, 'panel'>>>) {
      state.panel = action.payload.panel
    },
    hidePanel(state: State, action: PayloadAction) {
      state.panel = undefined
    }
  }
})

export const { setInfluencer, showPanel, hidePanel } = influencersSlice.actions;

export default influencersSlice;