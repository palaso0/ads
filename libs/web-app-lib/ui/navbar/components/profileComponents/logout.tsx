import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { selectUserData, setDefaultValues } from '../../../../data-access/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(setDefaultValues())
        navigate("/")    
    }

    return (
        <MenuItem onClick={logout}>logout</MenuItem>
    )
}