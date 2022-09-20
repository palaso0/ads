import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store/store';

export interface appState {
    appData: {
        token: string;
    }
}

const initialState: appState = {
    appData: {
        token: "",
    }
};

export const appSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setState: (state, action) => {
            state.appData.token = action.payload.token;
        },

    },
});

export const { setState } = appSlice.actions;
export const selectAppData = (state: RootState) => state.app.appData;

export default appSlice.reducer;
