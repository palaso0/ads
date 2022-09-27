import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store/store';

export interface adState {
    adData: [{
        adId: number,
        title: string,
        photo: string,
        date: string,
        text: string,
        image: string,
    }]
}

const initialState: any = {
    adData: []
};

export const adSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {
        setAdState: (state, action) => {
            state.adData = action.payload;
        },
        refreshData: (state, action) => {
            state.adData = [...state.adData]
        },
        addAd: (state,action) => {
            console.log("LLego ",action.payload);
            state.adData = [...state.adData,action.payload]
            console.log("En el estado",state.adData);
        }
    },
});

export const { setAdState,
    refreshData,
    addAd,
 } = adSlice.actions;
export const selectAdData = (state: RootState) => state.ad.adData;

export default adSlice.reducer;
