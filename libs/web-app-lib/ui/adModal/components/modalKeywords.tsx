import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import DiscountIcon from '@mui/icons-material/Discount';
interface IProps {
    keywords: string[],
}


const ModalKeywords: React.FC<IProps> = ({ keywords }) => (
    <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "center" }}>
        {
            keywords.map((keyword) => {
                return (
                    <Chip color="success" label={keyword} key={keyword} />
                )
            })}
    </Box>
)

export default ModalKeywords