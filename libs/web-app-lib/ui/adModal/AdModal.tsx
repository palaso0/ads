import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AdModalBox from './AdModalBox';

interface IProps {
    adId: number,
    handleCloseModal: () => void,
    openModal: boolean
}



const AdModal: React.FC<IProps> = ({ adId, handleCloseModal, openModal }) => {
    return (
        <Box>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
            >
                <AdModalBox handleCloseModal={handleCloseModal} adId={adId}/>
            </Modal>
        </Box>
    );
}

export default AdModal;  