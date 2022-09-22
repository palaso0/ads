import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { setDefaultValues } from '../../../../data-access/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";



const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(setDefaultValues())
        navigate("/")
    }

    return (
        <>
            <MenuItem onClick={logout}>Logout</MenuItem>
        </>
    )
}

export default Logout;