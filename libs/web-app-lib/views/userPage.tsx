import NavBar from '../ui/navbar/navbar';
import { useNavigate } from "react-router-dom";
import { selectUserData } from '../data-access/slices/userSlice';
import { useSelector } from 'react-redux';
import Body from '../ui/body/body';

export const ClientPage = () => {
  const userData = useSelector(selectUserData)
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Body />
    </>
  );
};

export default ClientPage;
