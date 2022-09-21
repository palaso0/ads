import React from 'react';
import Card from '@mui/material/Card';
import AdCardHeader from './components/adCardHeader';
import AdCardImage from './components/adCardImage';
import AdCardBody from './components/adCardBody';
import AdCardFooter from './components/adCardFooter';


interface IProps {
  adId: number,
  title: string,
  photo: string,
  date: string,
  text: string,
  image: string,
}

const AdCard: React.FC<IProps> = ({ adId, title, photo, date, text, image }) => {
  return (
    <Card sx={{ width: 345, display:"flex", flexDirection:"column"}}>
      <AdCardHeader date={date} photo={photo} title={title} />

      <AdCardImage image={image}
      />

      <AdCardBody text={text}/>

      <AdCardFooter adId={adId} />

    </Card>
  );
}

export default AdCard;