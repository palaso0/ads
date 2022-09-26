import { Box, Button } from '@mui/material';

interface IProps {
    handleCloseModal: () => void
}

const ModalFooting: React.FC<IProps> = ({ handleCloseModal }) => {
    return (
        <Box sx={{ p: "15px 10px", display: "flex", justifyContent: "center" }}>
            <Button size="large" color="error" onClick={handleCloseModal}>Close</Button>
        </Box>
    )
};

export default ModalFooting