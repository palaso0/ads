import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { selectUserData } from '../../../../data-access/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Logout from './logoutMenuItem'
import AddCategoryMenuItem from './addCategoryMenuItem'
import AddAdMenuItem from './addAdMenuItem'
interface IProps {
    handleClose: any
}

const MenuItems: React.FC<IProps> = ({ handleClose }) => {
    const userData = useSelector(selectUserData)

    function getItems() {

        if (userData.publisherId > 0) {
            return (<MenuItem onClick={handleClose}>Suggest Category</MenuItem>)
        }
        if (userData.adminId > 0) {
            return (
                <>
                    <AddCategoryMenuItem handleClose={handleClose} />
                    <AddAdMenuItem handleClose={handleClose} />
                    
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
        <>
            <MenuItem> {getUserType()} {userData.name} {userData.lastName} </MenuItem>
            {getItems()}
            <Logout />
        </>
    )
}

export default MenuItems