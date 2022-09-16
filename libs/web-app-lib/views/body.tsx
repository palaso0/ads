import AdCard from "../ui/card/adCard";
import AdModal from "../ui/adModal/AdModal";
import { Box } from "@mui/system";
export default function Body(){
    return(
        <Box sx= { 
            {
                display: 'flex',
                gap: 5,
                flexWrap: 'wrap',
                pt: '25px',
                alignContent: 'center',
                justifyContet: 'center'
            }
        }>
            <AdCard/>

            <AdModal/>
        </Box>
        
    )
}