import { GetInfluencerData } from "@/api/type";
import { AppState } from "@/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface State {
  influencer: null | GetInfluencerData
}

const initialState: State = {
  influencer: null

}

const influencersSlice = createSlice({
  name: 'influencers',
  initialState,
  reducers: {
    setInfluencer(state: State, action: PayloadAction<Pick<State, 'influencer'>>) {
      state.influencer = action.payload.influencer
    }
  }
})

export const { setInfluencer } = influencersSlice.actions;

export default influencersSlice;