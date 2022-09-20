import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ModalContainer from '../../../modals/modalContainer'
import AddAdForm from '../../../forms/addAdForm'

interface IProps {
    handleClose: any
}

const AdCategoryMenuItem: React.FC<IProps> = ({ handleClose }) => {
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => setOpenModal(true);

    return (
        <>
            <MenuItem onClick={handleOpenModal}>Add Ad</MenuItem>
            <ModalContainer openModal={openModal} handleClose={handleClose}
                Component={AddAdForm}
            />
        </>
    )
}

export default AdCategoryMenuItem