import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store/store';

export interface userState {
    userData: {
        token: string;
        userId: number;
        name: string;
        lastName: string;
        email: string;
        userName: string;

        clientId: number;
        publisherId: number;
        adminId: number;

        photo: string;
        cellphone: string;
    }
}

const initialState: userState = {
    userData: {
        token: "",
        userId: -1,
        name: "",
        lastName: "",
        email: "",
        userName: "",

        clientId: -1,
        publisherId: -1,
        adminId: -1,

        cellphone: "",
        photo: "",
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserState: (state, action) => {
            state.userData.userId = action.payload.userId;
            state.userData.name = action.payload.name;
            state.userData.lastName = action.payload.lastName;
            state.userData.email = action.payload.email;
            state.userData.userName = action.payload.userName;
        },
        setPublisherState: (state, action) => {
            state.userData.cellphone = action.payload.cellphone;
            state.userData.photo = action.payload.photo;
        },
        setUserToken: (state, action) => {
            state.userData.token = action.payload;
            localStorage.setItem("token", state.userData.token);
        },
        setClientId: (state, action) => {
            state.userData.clientId = action.payload
        },
        setPublisherId: (state, action) => {
            state.userData.publisherId = action.payload
        },
        setAdminId: (state, action) => {
            state.userData.adminId = action.payload
        },
        setDefaultValues: (state) => {
            state.userData.token = "";
            state.userData.userId = -1;
            state.userData.name = "";
            state.userData.lastName = "";
            state.userData.email = "";
            state.userData.userName = "";
            state.userData.clientId = -1;
            state.userData.publisherId = -1;
            state.userData.adminId = -1;
            state.userData.cellphone = "";
            state.userData.photo = "";
            localStorage.removeItem("token");
        }
    },
});

export const { setUserState,
    setPublisherState,
    setUserToken,
    setClientId,
    setPublisherId,
    setAdminId,
    setDefaultValues } = userSlice.actions;
export const selectUserData = (state: RootState) => state.user.userData;

export default userSlice.reducer;
