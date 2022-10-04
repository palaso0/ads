import NavBar from '../ui/navbar/navbar';
import { useNavigate } from "react-router-dom";
import { selectUserData } from '../data-access/slices/userSlice';
import { useSelector } from 'react-redux';
import Body from '../ui/body/body';
import SortMenu from './sortMenu';
import { Box } from '@mui/material';

export const ClientPage = () => {
  const userData = useSelector(selectUserData)
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Box sx={{display:"flex",flexDirection:"row",flexWrap:"no-wrap", gap: 3}}>
        <SortMenu />
        <Body />
      </Box>
    </>
  );
};

export default ClientPage;
