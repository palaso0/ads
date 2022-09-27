import React from 'react';
import CardMedia from '@mui/material/CardMedia';

interface IProps {
    image: string
}

const AdCardImage: React.FC<IProps> = ({image}) => {
    return (
        <CardMedia
        component="img"
        
        image={image}
        alt="Ad"
        sx={{ height:"194px"}}
      />
    )
}

export default AdCardImage