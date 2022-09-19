import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
interface IProps {
    handleOpenFormModal: () => void,
    handleCloseFormModal: () => void,
    openFormModal: boolean
    data: {
        name: string,
        lastName: string,
        email: string,
        userName: string
    }
}
const AdFormModal: React.FC<IProps> = ({ handleOpenFormModal, handleCloseFormModal, openFormModal, data }) => {

    return (
        <Modal
            open={openFormModal}
            onClose={handleCloseFormModal}
        >
            <Box
                component="form"
                sx={{
                    width: "500px",
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        label="Name"
                        defaultValue=""
                    />
                    <TextField
                        label="Last Name"
                        defaultValue=""
                    />
                    <TextField
                        label="email"
                        defaultValue=""
                    />
                    <TextField
                        label="User Name"
                        defaultValue=""
                    />
                </div>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    <Button variant="contained">Accept</Button>
                    <Button color="error" variant="contained">Cancel</Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default AdFormModal;  