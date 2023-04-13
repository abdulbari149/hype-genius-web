import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AppState } from '@/store'
import { HYDRATE } from 'next-redux-wrapper'
import { IUser } from './types'

export interface AuthState {
	isLoggedIn: boolean
	accessToken: string
	user: IUser | null
}

const initialState: AuthState = {
	isLoggedIn: false,
	accessToken: '',
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthState(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
			state.isLoggedIn = action.payload.isLoggedIn
		},
		setAccessToken(state, action: PayloadAction<{ token: string }>) {
			state.accessToken = action.payload.token
		},
		setUser(state, action: PayloadAction<{ user: IUser | null }>) {
			state.user = action.payload.user
		},
	},
	extraReducers(builder) {
		builder.addCase(HYDRATE, (state, action: any) => {
			return {
				...state,
				...action.payload,
			}
		})
	},
})

export const { setAuthState, setAccessToken, setUser } = authSlice.actions

export const getLoginStatus = (state: AppState) => state.auth.isLoggedIn

export default authSlice.reducer
