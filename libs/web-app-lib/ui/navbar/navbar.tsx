import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Home from './components/home';
import Search from './components/search';
import UserButtons from './components/userButtons';

export default function NavBar() {

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Box>
            <Home />
          </Box>

          <Box sx={{ display: 'flex' }}>
            <Search />
            <UserButtons />

          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
