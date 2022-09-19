import Typography from '@mui/material/Typography';

interface IProps {
    text: string
}



const ModalBody: React.FC<IProps> = ({ text }) => {
    return (
        <Typography sx={{ mt: 2 }}>
            {text}
        </Typography>
    )
};

export default ModalBody