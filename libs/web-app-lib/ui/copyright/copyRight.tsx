import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {sx} from './Style'


export default function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" sx={sx}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Orion's Adds
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }