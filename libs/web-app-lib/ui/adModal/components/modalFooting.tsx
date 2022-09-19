import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button } from '@mui/material';

interface IProps {
    handleCloseModal: () => void
}

const ModalFooting: React.FC<IProps> = ({handleCloseModal}) => {
    return (
        <Box sx={{ p: "15px 10px", display:"flex", justifyContent:"space-around" }}>
            <IconButton>
                <FavoriteIcon />
            </IconButton>

            <Button size="large" color="error" onClick={handleCloseModal}>Exit</Button>
        </Box>
    )
};

export default ModalFooting