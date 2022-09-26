import * as React from 'react'
import { Provider } from 'react-redux';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {BrowserRouter as Router} from 'react-router-dom';

import userSlice from '../../data-access/slices/userSlice'
import appSlice from '../../data-access/slices/appSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    app: appSlice
  },
});

interface IProps{
  Component: any
}
const AppWrapper: React.FC<IProps> = ({Component}) => {
  return(
        <Provider store={store}>
          <Router>
            <Component />
          </Router>
        </Provider>
    );
}

export default AppWrapper;