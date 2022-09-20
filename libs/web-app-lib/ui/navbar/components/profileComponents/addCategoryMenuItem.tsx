import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ModalContainer from '../../../modals/modalContainer'
import AdCategoryForm from '../../../forms/addCategoryForm'

interface IProps {
    handleClose: any
}

const AdCategoryMenuItem: React.FC<IProps> = ({ handleClose }) => {
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => setOpenModal(true);

    return (
        <>
            <MenuItem onClick={handleOpenModal}>Add Category</MenuItem>
            <ModalContainer openModal={openModal} handleClose={handleClose}
                Component={AdCategoryForm}
            />
        </>
    )
}

export default AdCategoryMenuItem