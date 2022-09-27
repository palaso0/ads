import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
interface IProps {
    title: string,
    photo: string,
    date: string,
    userName: string,
    category: string
}

const ModalHeader: React.FC<IProps> = ({ title, photo, date, userName, category }) => (
    <Box sx={{ display: 'flex', flexDirection:"row", justifyContent:"space-between" }}>

        <Avatar sx={{ width: '80px', height: '80px' }}>
            <img
                src={photo}
                style={{ width: '100%' }}
                alt="Profile"
            ></img>
        </Avatar>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:"center" }}>
            <Typography variant="h4">
                {title}
            </Typography>
            <Typography variant="subtitle1">
                published on: {date}
            </Typography>
            <Typography variant="subtitle2">
                by: {userName}
            </Typography>
        </Box>


        <Chip variant="outlined" color="secondary" icon={<DiscountIcon />} label={category}/>

    </Box>
)

export default ModalHeader