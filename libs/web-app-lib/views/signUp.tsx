import * as React from 'react';

import { fetchSignUp, fetchCreateAdmin, fetchCreatePublisher, fetchCreateClient } from '../services/log';

import { useDispatch, useSelector } from 'react-redux';
import { setUserState, setUserToken, setClientId, setAdminId, setPublisherId, selectUserData, setPublisherState } from '../data-access/slices/userSlice';
import SignUpForm from '../ui/login/signUpForm';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [userType, setUserType] = React.useState('CLIENT');
    const dispatch = useDispatch();
    const userData = useSelector(selectUserData)
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const name = formData.get('firstName');
        const lastName = formData.get('lastName');
        const userName = formData.get('userName');
        const photo = formData.get('photo')?.toString() || "";
        const cellphone = formData.get('cellphone')?.toString() || "";

        fetchSignUp(name, lastName, userName, email, password)
            .then(data => {
                if (data.data) {
                    dispatch(setUserToken(data.data.signup.token))
                    dispatch(setUserState(data.data.signup.user))
                    switch (userType) {
                        case "CLIENT": {
                            console.log("Creanto Cliente");
                            fetchCreateClient(data.data.signup.user.userId)
                                .then(data => {
                                    if (data.data) {
                                        dispatch(setClientId(data.data.addClient.clientId))
                                    }
                                })
                            break;
                        }
                        case "PUBLISHER": {
                            fetchCreatePublisher(data.data.signup.user.userId, photo, cellphone)
                                .then(data => {
                                    if (data.data) {
                                        console.log("Datos Recibidos", data.data);
                                        dispatch(setPublisherId(data.data.addPublisher.publisherId))
                                        dispatch(setPublisherState({ photo, cellphone }))
                                    }
                                })
                            break;
                        }
                        case "ADMIN": {
                            fetchCreateAdmin(data.data.signup.user.userId)
                                .then(data => {
                                    if (data.data) {
                                        dispatch(setAdminId(data.data.addAdmin.adminId))
                                    }
                                })
                            break;
                        }
                    }
                    navigate("/home")
                }

            })

    };



    return (
        <>
            <SignUpForm
                handleSubmit={handleSubmit}
                userType={userType}
                setUserType={setUserType}
            />

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