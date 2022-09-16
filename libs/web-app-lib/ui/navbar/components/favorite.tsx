import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { favoriteStyle } from './styles';

export default function Favorite() {
  return (
            <IconButton sx={favoriteStyle}>
              <FavoriteIcon />
            </IconButton>
  );
}
