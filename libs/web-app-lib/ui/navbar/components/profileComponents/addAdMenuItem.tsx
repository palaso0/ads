import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ModalContainer from '../../../modals/modalContainer'
import AddAdForm from '../../../forms/addAdForm'

const AdCategoryMenuItem: React.FC = () => {
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false)
    return (
        <>
            <MenuItem onClick={handleOpenModal}>Add Ad</MenuItem>
            <ModalContainer openModal={openModal} handleClose={handleCloseModal}
                Component={AddAdForm}
            />
        </>
    )
}

export default AdCategoryMenuItem