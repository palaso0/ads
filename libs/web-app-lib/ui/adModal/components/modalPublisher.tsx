import { Box, Typography } from '@mui/material';
import React from 'react';
import PersonOutlinedIcon from '@mui/icons-material/Person';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

interface IProps {
    email: string
    lastName: string
    name: string
    cellphone: string
}

const ModalPublisher: React.FC<IProps> = ({ email, lastName, name, cellphone }) => {
    return (
        <Box sx={{ p: "15px 10px" }}>
            <Typography variant="h6" component="h1" style={{ fontWeight: 600 }}>
                Contact info:
            </Typography>

            <Typography variant="h5">
                <PersonOutlinedIcon sx={{ color: "darkBlue" }} /> {name} {lastName}
            </Typography>
            <Typography variant="h5">
                <EmailOutlinedIcon sx={{ color: "darkBlue" }} /> {email}
            </Typography>
            <Typography variant="h5">
                <LocalPhoneOutlinedIcon sx={{ color: "darkBlue" }} /> {cellphone}
            </Typography>
        </Box>
    )
};

export default ModalPublisher