import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { modalStyle } from './modalStyle'
import ModalHeader from './components/modalHeader'
import ModalImageCarrusel from './components/modalImageCarrusel'
import ModalBody from './components/modalBody'
import ModalPublisher from './components/modalPublisher'
import ModalFooting from './components/modalFooting'
import { fetchGetAd } from '../../services'

interface IProps {
    adId: number,
    handleCloseModal: () => void,
}

interface IAd {
    title: string,
    date: string,
    userName: string,
    images: string[],
    description: string,
    photo: string,
    cellphone: string,
    email: string,
    name: string,
    lastName: string,
}

const AdModalBox: React.FC<IProps> = ({ adId, handleCloseModal }) => {
    const [ad, setAd] = useState<IAd>(
        {
            title: "",
            date: "",
            userName: "",
            images: [],
            description: "",
            photo: "",
            cellphone: "",
            email: "",
            name: "",
            lastName: "",
        }
    );

    const loadAdData = async () => {
        const dataObtaine = await fetchGetAd(adId);
        const adJson = await dataObtaine.json();
        const adItem = adJson.data.ad[0]
        let adClean: IAd = {
            title: adItem.title,
            date: adItem.creationDate.split("T")[0],
            userName: adItem.adminCreator.user.userName,
            images: adItem.photos,
            description: adItem.detail,
            photo: adItem.publishedBy.photo,
            cellphone: adItem.publishedBy.cellphone,
            email: adItem.publishedBy.user.email,
            name: adItem.publishedBy.user.name,
            lastName: adItem.publishedBy.user.lastName,
        }
        setAd(adClean)
    }

    useEffect(() => {
        console.log("Holaa");
        loadAdData()
    }, [])

    return (
        <Box sx={modalStyle}>
            <ModalHeader date={ad.date} photo={ad.photo} title={ad.title} userName={ad.userName} />
            <ModalImageCarrusel images={ad.images} />
            <ModalBody text={ad.description} />
            <ModalPublisher email={ad.email} lastName={ad.lastName} name={ad.lastName} cellphone={ad.cellphone} />
            <ModalFooting handleCloseModal={handleCloseModal} />
        </Box>
    );
}

export default AdModalBox;  