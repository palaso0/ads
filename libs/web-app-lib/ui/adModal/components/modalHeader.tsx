import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface IProps {
    title: string,
    photo: string,
    date: string,
    userName: string
}

const ModalHeader: React.FC<IProps> = ({ title, photo, date, userName }) => (
    <Box sx={{ display: 'flex', gap:"15px"}}>

        <Avatar sx={{ width: '80px', height: '80px' }}>
            <img 
                src={photo}
                style={{ width: '100%' }}
                alt="Profile"
            ></img>
        </Avatar>

        <Box sx={{ display: 'flex', flexDirection: 'column' ,justifyContent: "space-around" }}>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography variant="subtitle2">
                published on: {date}
            </Typography>
            <Typography variant="subtitle2">
                by: {userName}
            </Typography>
        </Box>
    </Box>
)

export default ModalHeader