import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { iconStyle } from './styles';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../data-access/slices/userSlice';
import { Typography } from '@mui/material';

export default function Home() {
  const userData = useSelector(selectUserData)

  const getUserType = () => {
    if (userData.publisherId > 0) {
      return "Publisher"
    }
    else if (userData.adminId > 0) {
      return "Admin"
    }
    else if (userData.clientId > 0) {
      return "Client"
    }
    return ""
  }

  return (
    <>
      <IconButton>
        <HomeIcon sx={iconStyle} />
      </IconButton>
      <Typography> Welcome {userData.name} {userData.lastName} </Typography>
      <Typography>Rol: {getUserType()} </Typography>
    </>
  );
}
