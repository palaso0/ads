import React, { useEffect, useState } from 'react';
import SignIn from "../../../../libs/web-app-lib/views/signIn"
import SignUp from "../../../../libs/web-app-lib/views/signUp"
import ClientPage from "../../../../libs/web-app-lib/views/userPage"
import Body from "../../../../libs/web-app-lib/ui/body/body"
import { selectUserData } from '../../../../libs/web-app-lib/data-access/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export const App = () => {
  const userData = useSelector(selectUserData)
  const dispatch = useDispatch()
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<SignIn />}></Route>
          <Route path='signIn' element={<SignIn />}></Route>
          <Route path='signUp' element={<SignUp />}></Route>
          <Route path='home' element={<ClientPage />}></Route>
        </Routes>

      </BrowserRouter>

    </>
  );
};

export default App;
