import * as React from 'react';
import SignInForm from '../ui/login/signInForm';
import { fetchSignIn, fetchGetUserType } from '../services/logServices';
import { setUserState, setPublisherState, setUserToken, setClientId, setPublisherId, setAdminId } from '../data-access/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const password = data.get('password')

    fetchSignIn(email, password)
      .then(data => {
        if (data.data) {
          dispatch(setUserToken(data.data.login.token))
          dispatch(setUserState(data.data.login.user))
          fetchGetUserType(data.data.login.user.userId)
            .then(data => {
              if (data.data.client.length > 0) {
                dispatch(setClientId(data.data.client[0].clientId))
              }
              if (data.data.publisher.length > 0) {
                dispatch(setPublisherState(data.data.publisher[0]))
                dispatch(setPublisherId(data.data.publisher[0].publisherId))
              }
              if (data.data.admin.length > 0) {
                dispatch(setAdminId(data.data.admin[0].adminId))
              }
            })
          navigate("/home")
        }
        else {
          setErrorMessage("User not found")
        }
      })
  };

  return (
    <SignInForm handleSubmit={handleSubmit} errorMessage={errorMessage} />
  );
}