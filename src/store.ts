import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "@/modules/auth/core/slice";
import { createWrapper } from "next-redux-wrapper";
import influencerSlice from "./modules/dashboard/core/influencerSlice";

const makeStore = () =>
	configureStore({
		reducer: {
			[authSlice.name]: authSlice.reducer,
			[influencerSlice.name]: influencerSlice.reducer,
		},
		devTools: true,
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
