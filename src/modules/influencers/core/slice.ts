import { GetInfluencerData, ITag } from '@/api/type'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { PanelType } from './types'

interface State {
	influencer: null | GetInfluencerData
	panel?: PanelType
	isEditOpen: boolean
}

const initialState: State = {
	influencer: null,
	isEditOpen: false,
}

const influencersSlice = createSlice({
	name: 'influencers',
	initialState,
	reducers: {
		setInfluencer(
			state: State,
			action: PayloadAction<Pick<State, 'influencer'>>,
		) {
			state.influencer = action.payload.influencer
		},
		showPanel(
			state: State,
			action: PayloadAction<Required<Pick<State, 'panel'>>>,
		) {
			state.panel = action.payload.panel
		},
		hidePanel(state: State) {
			state.panel = undefined
		},
		showIsEdit(state: State) {
			state.isEditOpen = true
		},
		hideIsEdit(state: State) {
			state.isEditOpen = false
		},
		setContract(
			state: State,
			action: PayloadAction<{
				contract: GetInfluencerData['contract']
			}>,
		) {
			if (state.influencer) {
				state.influencer.contract = action.payload.contract
			}
		},
		setTags(state: State, action: PayloadAction<{ tags: Array<ITag> }>) {
			if (state.influencer && action.payload.tags) {
				state.influencer.tags = action.payload.tags
			}
		},
	},
})

export const {
	setInfluencer,
	showPanel,
	hidePanel,
	setContract,
	showIsEdit,
	hideIsEdit,
	setTags,
} = influencersSlice.actions

export default influencersSlice
