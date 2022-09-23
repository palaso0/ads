import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ModalContainer from '../../../modals/modalContainer'
import AddSuggestedCategoryForm from '../../../forms/addSuggestCategoryForm';

const AddSuggestedCategoryMenuItem = () => {
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <MenuItem onClick={handleOpenModal}>Suggest Category</MenuItem>
            <ModalContainer openModal={openModal} handleClose={handleCloseModal}
                Component={AddSuggestedCategoryForm}
            />
        </>
    )
}

export default AddSuggestedCategoryMenuItem