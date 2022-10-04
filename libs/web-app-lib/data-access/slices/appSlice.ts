import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store/store';

export interface appState {
    appData: {
        token: string;
        sortBy: string;
        sortLabel: string;
    }
}

const initialState: appState = {
    appData: {
        token: "",
        sortBy: "",
        sortLabel: ""
    }
};

export const appSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setState: (state, action) => {
            state.appData.token = action.payload.token;
        },
        setSortBy: (state, action) => {
            state.appData.sortBy = action.payload
        },
        setSortLabel: (state, action) => {
            state.appData.sortLabel = action.payload
        },
    },
});

export const {
    setState,
    setSortBy,
    setSortLabel
} = appSlice.actions;

export const selectAppData = (state: RootState) => state.app.appData;

export default appSlice.reducer;
