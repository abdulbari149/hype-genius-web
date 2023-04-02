import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "@/modules/auth/core/slice";
import { createWrapper } from "next-redux-wrapper";
import dashboardSlice from "./modules/dashboard/core/slice";

const makeStore = () =>
	configureStore({
		reducer: {
			[authSlice.name]: authSlice.reducer,
			[dashboardSlice.name]: dashboardSlice.reducer,
		},
		devTools: true,
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
