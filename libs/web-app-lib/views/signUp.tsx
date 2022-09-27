import * as React from 'react';
import { fetchSignUp, fetchCreateAdmin, fetchCreatePublisher, fetchCreateClient } from '../services/logServices';
import { useDispatch } from 'react-redux';
import { setUserState, setUserToken, setClientId, setAdminId, setPublisherId, setPublisherState } from '../data-access/slices/userSlice';
import SignUpForm from '../ui/login/signUpForm';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [userType, setUserType] = React.useState('CLIENT');
    const [errorMessage, setErrorMessage] = React.useState("");
    const dispatch = useDispatch();
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
                else {
                    setErrorMessage("Not valid User");
                }

            })

    };



    return (
        <SignUpForm
            handleSubmit={handleSubmit}
            userType={userType}
            setUserType={setUserType}
            errorMessage={errorMessage}
        />
    );
}