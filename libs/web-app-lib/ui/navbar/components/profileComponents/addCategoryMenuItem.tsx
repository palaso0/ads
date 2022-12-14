import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ModalContainer from '../../../modals/modalContainer'
import AdCategoryForm from '../../../forms/addCategoryForm'

const AdCategoryMenuItem = () => {
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <MenuItem onClick={handleOpenModal}>Add Category</MenuItem>
            <ModalContainer openModal={openModal} handleClose={handleCloseModal}
                Component={AdCategoryForm}
            />
        </>
    )
}

export default AdCategoryMenuItem