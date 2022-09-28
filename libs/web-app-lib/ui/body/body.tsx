import AdCard from "../card/adCard";
import { Box } from "@mui/system";
import { fetchGetSoftAds } from "../../services"
import { useEffect, useState } from "react";
import { selectAdData,setAdState } from '../../data-access/slices/adSlice'
import { selectUserData } from "libs/web-app-lib/data-access/slices/userSlice";
import { useSelector, useDispatch } from 'react-redux';

interface ISoftAd {
    adId: number,
    title: string,
    photo: string,
    date: string,
    text: string,
    image: string,
}

export default function Body() {
    const dispatch = useDispatch();
    const adData = useSelector(selectAdData)
    const userData = useSelector(selectUserData)
    const loadAdData = async () => {
        const dataObtained = await fetchGetSoftAds();
        const adJson = await dataObtained.json();
        let adList: ISoftAd[] = [];
        adJson.data.ads.map((ad: any) => {
            const newAd: ISoftAd = {
                adId: ad.adId,
                title: ad.title,
                photo: ad.publishedBy.photo,
                date: ad.creationDate.split("T")[0],
                text: ad.detail,
                image: ad.photos[0] || ""
            }
            adList.push(newAd);
        })
        dispatch(setAdState(adList))    
    }

    useEffect(() => {
        loadAdData()
    }, [])

    return (
        <Box sx={
            {
                display: 'flex',
                gap: 5,
                flexWrap: 'wrap',
                pt: '25px',
                alignContent: 'center',
                justifyContet: 'center'
            }
        }>
            { 
            (userData.userId > 0 || userData.adminId>0 || userData.clientId > 0) &&
                adData.map((ad: any) => {
                    return <AdCard
                        key={ad.adId}
                        adId={ad.adId}
                        title={ad.title}
                        photo={ad.photo}
                        date={ad.date}
                        text={ad.text}
                        image={ad.image} />
                })
            }
        </Box>
    )
}