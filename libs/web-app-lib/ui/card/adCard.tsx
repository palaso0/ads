import React from 'react';
import Card from '@mui/material/Card';
import AdCardHeader from './components/adCardHeader';
import AdCardImage from './components/adCardImage';
import AdCardBody from './components/adCardBody';
import AdCardFooter from './components/adCardFooter';


interface IProps {
  text: string,
  photo: string,
  image: string,
}

const AdCard: React.FC = () =>  {
  return (
    <Card sx={{ width: 345 }}>
      <AdCardHeader date="24/12/12" photo="https://images-na.ssl-images-amazon.com/images/I/71+mDoHG4mL.png" title="Ad1" />

      <AdCardImage image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"
      />

      <AdCardBody text='This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.'/>

      <AdCardFooter />

    </Card>
  );
}

export default AdCard;