import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24
};

interface IProps {
    openModal: any,
    handleClose: any
    Component: any
}

const ModalContainer: React.FC<IProps> = ({ openModal, handleClose, Component }) => {

    return (
        <Box>
            <Modal
                open={openModal}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Box sx={{ width: "100%", display: "flex", alignContent: "flex-end", justifyContent: "flex-end" }}>
                        <IconButton onClick={handleClose}>
                            <CancelIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ p: 4 }}>
                        <Component handleClose={handleClose} />
                    </Box>
                </Box>
            </Modal>
        </Box>

    );
}

export default ModalContainer