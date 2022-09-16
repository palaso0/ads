import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {modalStyle} from './modalStyle'
import ModalHeader from './components/modalHeader'
interface IProps {
    text: string
}

const AdModal: React.FC = () => {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {setOpen(true);console.log(typeof(open));
    };
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalStyle}>
                    <ModalHeader date="24/12/12" photo="https://images-na.ssl-images-amazon.com/images/I/71+mDoHG4mL.png" title="Ad1"/>


                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default AdModal;  