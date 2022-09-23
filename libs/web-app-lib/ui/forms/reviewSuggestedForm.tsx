import * as React from 'react';
import Box from '@mui/material/Box';
import { fetchGetSuggestedCategories } from '../../services'
import { useEffect } from 'react';
import SuggestedCategoryItem from './suggestedCategoryItem/suggestedCategoryItem'
import { Typography } from '@mui/material';

interface IProps {
    handleClose: any
}

interface ISuggestedCategories {
    suggestedCategoryId: string,
    title: number,
}

const ReviewSuggestedCategoryForm: React.FC<IProps> = ({ handleClose }) => {
    const [suggestedCategories, setSuggestedCategories] = React.useState<ISuggestedCategories[]>([]);

    const loadFormData = async () => {
        const suggestedCategoriesObtained = await fetchGetSuggestedCategories();
        const suggestedCategoriesJson = await suggestedCategoriesObtained.json();
        setSuggestedCategories(suggestedCategoriesJson.data.suggestedCategories);
    }

    useEffect(() => {
        loadFormData()
    }, [])
    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
                justifyContent: "space-around"
            }}
        >
            <Typography variant='h5'>{
                suggestedCategories.length > 0 ?
                    "Suggested Categories " :
                    "No data"
            }</Typography>

            {
                suggestedCategories.map((sugCat: any) => {
                    return (
                        <SuggestedCategoryItem data={sugCat} loadFormData={loadFormData} />
                    )
                })
            }
        </Box>
    )
}

export default ReviewSuggestedCategoryForm;