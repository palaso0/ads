import * as React from 'react';
import Box from '@mui/material/Box';
import AddSuggestedCategoryMenuItem from './profileComponents/addSuggestedCategoryMenuItem';
import Logout from './profileComponents/logoutMenuItem';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../data-access/slices/userSlice';
import AddCategoryMenuItem from './profileComponents/addCategoryMenuItem';
import AddAdMenuItem from './profileComponents/addAdMenuItem';
import ReviewSuggestedCategoryMenuItem from './profileComponents/reviewCategoryMenuItem';
export default function UserButtons() {
    const userData = useSelector(selectUserData)

    function getItems() {

        if (userData.publisherId > 0) {
            return (<AddSuggestedCategoryMenuItem />)
        }
        if (userData.adminId > 0) {
            return (
                <>
                    <AddCategoryMenuItem />
                    <AddAdMenuItem />
                    <ReviewSuggestedCategoryMenuItem />
                </>
            )
        }
        return <></>
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "row" }}>

            {getItems()}
            <Logout />
        </Box>
    )
}