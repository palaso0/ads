import * as React from 'react';
import SignInForm from '../ui/login/signInForm';
import { fetchSignIn, fetchGetUserType } from '../services/log';
import { setUserState, setPublisherState, setUserToken, selectUserData, setClientId, setPublisherId, setAdminId } from '../data-access/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const userData = useSelector(selectUserData)
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
                console.log("Modificando publisher");
                dispatch(setPublisherState(data.data.publisher[0]))
              }
              if (data.data.admin.length > 0) {
                dispatch(setAdminId(data.data.admin[0].adminId))
              }
            })
            navigate("/home")
        }
      })
  };

  return (
    <>
      <SignInForm handleSubmit={handleSubmit} />
      <p> {userData.userId}</p>
      <p>{userData.token}</p>
      <p>{userData.name}</p>
      <p>{userData.lastName}</p>
      <p>clientId: {userData.clientId}</p>
      <p>publisherId: {userData.publisherId}</p>
      <p>adminId: {userData.adminId}</p>

      <p>userName: {userData.userName}</p>
      <p>email: {userData.email}</p>
      <p>photo: {userData.photo}</p>
      <p>cellphone: {userData.cellphone}</p>
    </>
  );
}