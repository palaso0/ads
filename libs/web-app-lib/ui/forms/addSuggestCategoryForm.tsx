import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { fetchCreateSuggestedCategory, fetchSearchCategoryByTitle } from '../../services'

interface IProps {
    handleClose: any
}

const AddSuggestedCategoryForm: React.FC<IProps> = ({ handleClose }) => {
    const [errorMessage, setErrorMessage] = React.useState('');

    const createSuggestedCategory = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const suggestedCategory = data.get('suggestedCategoryName');

        fetchSearchCategoryByTitle(suggestedCategory)
            .then(
                data => {
                    if (!data.data.SearchCategoryByTitle) {
                        fetchCreateSuggestedCategory(suggestedCategory)
                            .then(
                                data1 => {
                                    if (data1.data) {
                                        handleClose()
                                    }
                                    else {
                                        setErrorMessage("Category already suggested")
                                    }
                                }
                            )
                    }
                    else {
                        setErrorMessage("Category already added")
                    }
                }
            )
    }
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
            onSubmit={createSuggestedCategory}
        >

            <Typography variant='h5'>Suggest Category</Typography>

            <TextField label="Category name" name="suggestedCategoryName" />
            <Typography color={"red"} >{errorMessage}</Typography>
            <Button type='submit' variant="outlined">Accept</Button>
        </Box>
    )
}

export default AddSuggestedCategoryForm;