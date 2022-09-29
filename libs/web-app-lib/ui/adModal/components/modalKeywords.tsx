import React from 'react';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
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