import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ModalContainer from '../../../modals/modalContainer'
import ReviewSuggestedCategoryForm from '../../../forms/reviewSuggestedForm';

const ReviewSuggestedCategoryMenuItem = () => {
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <MenuItem onClick={handleOpenModal}>Suggested Categories</MenuItem>
            <ModalContainer openModal={openModal} handleClose={handleCloseModal}
                Component={ReviewSuggestedCategoryForm}
            />
        </>

    )
}

export default ReviewSuggestedCategoryMenuItem