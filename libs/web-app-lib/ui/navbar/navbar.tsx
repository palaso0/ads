import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Home from './components/home';
import Favorite from './components/favorite';
import Search from './components/search';
import Profile from './components/profile';

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
            <Favorite />

            <Search/>
            <Profile/>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
