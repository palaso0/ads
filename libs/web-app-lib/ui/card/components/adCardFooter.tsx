import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box } from '@mui/material';


function display(){
    console.log("Abriendo Modal")
}

const AdCardFooter = () => {
    return (
        <Box sx= {{display: 'flex', justifyContent:'space-around'}}>
            <IconButton>
                <FavoriteIcon />
            </IconButton>

            <IconButton onClick={display}>
                <VisibilityIcon />
            </IconButton>
        </Box>
    )
}

export default AdCardFooter