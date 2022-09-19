import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function selectType() {

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection:"column"}}>
            <Typography variant='h4'>
                Select user Type:
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <Button variant="outlined">Client</Button>
                <Button variant="outlined">Publisher</Button>
                <Button variant="outlined">Admin</Button>

            </Box>

        </Box>
    );
}