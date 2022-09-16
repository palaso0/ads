import React from 'react';
import CardMedia from '@mui/material/CardMedia';

interface IProps {
    image: string
}

const AdCardImage: React.FC<IProps> = ({image}) => {
    return (
        <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Ad Image"
      />
    )
}

export default AdCardImage