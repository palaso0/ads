import React from "react";

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box } from '@mui/material';
import AdModal from "../../../ui/adModal/AdModal";

const AdCardFooter = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => {
        setOpenModal(true); 
    };
    const handleCloseModal = () => setOpenModal(false);
    return (
        <Box sx= {{display: 'flex', justifyContent:'space-around'}}>
            <IconButton>
                <FavoriteIcon />
            </IconButton>

            <IconButton onClick={handleOpenModal}>
                <VisibilityIcon />
            </IconButton>

            <AdModal openModal={openModal} handleCloseModal={handleCloseModal} handleOpenModal={handleOpenModal}/>
        </Box>
    )
}

export default AdCardFooter