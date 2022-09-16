import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { CardContent, Typography } from '@mui/material';

interface IProps {
    text: string
}

const AdCardBody: React.FC<IProps> = ({text}) => {
    return (
        <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
    )
}

export default AdCardBody