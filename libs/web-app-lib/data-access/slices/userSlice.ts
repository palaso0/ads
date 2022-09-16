import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store/store';

export interface userState {
    userData: {
        token: string;
        name: string;
        lastName: string;
        email: string;
        photo: string;
    }
}

const initialState: userState = {
    userData: {
        token: "",
        name: "",
        lastName: "",
        email: "",
        photo: "",
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setState: (state, action) => {
            state.userData.token = action.payload.token;
            state.userData.name = action.payload.email;
            state.userData.email = action.payload.email;
            state.userData.photo = action.payload.photo;
        },
    },
});

export const { setState } = userSlice.actions;
export const selectUserData = (state: RootState) => state.user.userData;

export default userSlice.reducer;
