import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';
import appSlice from '../slices/appSlice';
import adSlice from '../slices/adSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    app: appSlice,
    ad: adSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
