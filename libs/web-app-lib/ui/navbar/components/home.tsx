
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { iconStyle } from './styles';

export default function Home() {
  return (
    <IconButton>
      <HomeIcon sx={iconStyle} />
    </IconButton>

  );
}
