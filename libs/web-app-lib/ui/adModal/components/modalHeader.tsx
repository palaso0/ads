import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import { margin } from '@mui/system';
import styles from './styles.module.css';
import Typography from '@mui/material/Typography';

interface IProps {
    title: string,
    photo: string,
    date: string,
}

const ModalHeader: React.FC<IProps> = ({ title, photo, date }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Avatar sx={{ width: '80px', height: '80px' }}>
                <img src={photo}
                    style={{ width: '100%' }}
                ></img>
            </Avatar>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Typography variant="h6">
                    published on: {date}
                </Typography>
            </Box>
        </Box>
    )
}

export default ModalHeader