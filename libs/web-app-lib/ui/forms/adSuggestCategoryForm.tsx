import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { fetchCreateSuggestedCategory } from '../../services'

interface IProps {
    handleClose: any
}
//TODO Solve problem
const AdSuggestCategoryForm: React.FC<IProps> = ({ handleClose }) => {

    const createCategory = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const suggestedCategory = data.get('categoryName');

        fetchCreateSuggestedCategory(suggestedCategory)
            .then(
                data => {
                    if (data.data) {
                        handleClose()
                    }
                }
            )
        return (
            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    alignItems: "center"
                }}
                noValidate
                autoComplete="off"
                onSubmit={createCategory}
            >

                <Typography variant='h5'>Add Category</Typography>

                <TextField label="Category name" name="categoryName" />

                <Button type='submit' variant="outlined">Accept</Button>
            </Box>
        )
    }
}
export default AdSuggestCategoryForm;