import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import { profileStyle } from './styles';
export default function Profile() {
    return (
        <IconButton sx={profileStyle}>
            <Avatar alt="Remy Sharp" src="" />
        </IconButton>
    )
}