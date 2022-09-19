import React, { useEffect, useState } from 'react';
import SignIn from "../../../../libs/web-app-lib/views/signIn"
import SignUp from "../../../../libs/web-app-lib/views/signUp"
import ClientPage from "../../../../libs/web-app-lib/views/userPage"
import Body from "../../../../libs/web-app-lib/views/body"
import SelectType from "../../../../libs/web-app-lib/views/selectType"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Select } from '@mui/material';


export const App = () => {

  return (
    <>

      <SelectType />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />}></Route>
          <Route path='signIn' element={<SignIn />}></Route>
          <Route path='signUp' element={<SignUp />}></Route>
          <Route path='home' element={<ClientPage />}></Route>
          
        </Routes>

      </BrowserRouter> */}

    </>
  );
};

export default App;
