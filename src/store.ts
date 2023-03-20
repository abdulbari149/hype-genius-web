import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "@/modules/auth/core/slice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
	configureStore({
		reducer: {
			[authSlice.name]: authSlice.reducer,
		},
		devTools: true,
	});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;

export const wrapper = createWrapper<AppStore>(makeStore);
