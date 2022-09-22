import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import { profileStyle } from './styles';
import AddSuggestedCategoryMenuItem from './profileComponents/addSuggestedCategoryMenuItem';
import Logout from './profileComponents/logoutMenuItem';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../data-access/slices/userSlice';
import { MenuItem, Typography } from '@mui/material';
import AddCategoryMenuItem from './profileComponents/addCategoryMenuItem';
import AddAdMenuItem from './profileComponents/addAdMenuItem';

export default function UserButtons() {
    const userData = useSelector(selectUserData)

    const [displayModal,setDisplayModal] = React.useState(false)
    const handleClose = () => setDisplayModal(false)

    function getItems() {

        if (userData.publisherId > 0) {
            return (<AddSuggestedCategoryMenuItem/>)
        }
        if (userData.adminId > 0) {
            return (
                <>
                    <AddCategoryMenuItem />
                    <AddAdMenuItem  />

                    <MenuItem onClick={handleClose}>Review Suggestion</MenuItem>
                </>
            )
        }
        return <></>
    }


    const getUserType = () => {
        if (userData.publisherId > 0) {
            return "Publisher"
        }
        else if (userData.adminId > 0) {
            return "Admin"
        }
        else if (userData.clientId > 0) {
            return "Client"
        }
        return ""
    }


    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>
            
            {getItems()}
            <Logout />
        </Box>
    )
}