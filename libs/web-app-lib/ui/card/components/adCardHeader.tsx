import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface IProps {
    title: string,
    photo: string,
    date: string,
}

const AdCardHeader: React.FC<IProps> = ({title,photo,date}) => {
    return (
        <CardHeader
            avatar={
                <Avatar aria-label="recipe">
                    <img src={photo}
                        style={{ width: '100%' }}
                        alt={"avatar"}
                    ></img>
                </Avatar>
            }
            title={title}
            subheader={date.split("T")[0]}
        />
    )
}

export default AdCardHeader