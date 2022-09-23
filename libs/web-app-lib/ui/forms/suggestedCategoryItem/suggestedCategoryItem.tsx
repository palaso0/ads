import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, IconButton } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { fetchRemoveSuggestedCategory, fetchCreateCategory } from '../../../services'

interface IProps {
    data: {
        suggestedCategoryId: number,
        title: string
    },
    loadFormData: any,
}

const SuggestedCategoryItem: React.FC<IProps> = ({ data, loadFormData }) => {

    const removeSuggestedCategoryItem = async () => {
        const dataObtained = await fetchRemoveSuggestedCategory(data.suggestedCategoryId);
        const dataObtainedJson = await dataObtained.json()

        if (dataObtainedJson.data) {
            loadFormData()
        }
    }

    const addCategoryItem = async () => {
        const dataObtained = await fetchRemoveSuggestedCategory(data.suggestedCategoryId);
        const dataObtainedJson = await dataObtained.json()
        if (dataObtainedJson.data) {
            const dataAdded = await fetchCreateCategory(data.title)
            if (dataAdded.data) {
                loadFormData()
            }
        }
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            bgcolor: "transparent",
            borderRadius: "5px",
            p: "2px 10px"
        }}
        >
            <Typography>{data.title}</Typography>

            <Box>
                <IconButton  >
                    <CheckCircleOutlineOutlinedIcon onClick={addCategoryItem} />
                </IconButton>
                <IconButton>
                    <CancelOutlinedIcon onClick={removeSuggestedCategoryItem} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default SuggestedCategoryItem;