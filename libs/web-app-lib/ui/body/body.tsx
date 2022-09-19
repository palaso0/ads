import AdCard from "../card/adCard";
import AdModal from "../adModal/AdModal";
import { Box } from "@mui/system";
import AdFormModal from "../adForm/adForm";
export default function Body() {


    return (
        <Box sx={
            {
                display: 'flex',
                gap: 5,
                flexWrap: 'wrap',
                pt: '25px',
                alignContent: 'center',
                justifyContet: 'center'
            }
        }>
            <AdCard />
        </Box>

    )
}