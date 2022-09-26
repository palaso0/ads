import React from "react";

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box } from '@mui/material';
import AdModal from "../../adModal/AdModal";

interface IProps {
    adId: number
}

const AdCardFooter: React.FC<IProps> = ({ adId }) => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => setOpenModal(false);
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap:3 }}>

            <IconButton onClick={handleOpenModal}>
                <VisibilityIcon />
            </IconButton>

            <AdModal openModal={openModal} handleCloseModal={handleCloseModal} adId={adId} />
        </Box>
    )
}

export default AdCardFooter