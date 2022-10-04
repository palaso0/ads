import AdCard from "../card/adCard";
import { Box } from "@mui/system";
import { fetchGetSoftAds } from "../../services"
import { useEffect, useState } from "react";
import { selectAdData, setAdState } from '../../data-access/slices/adSlice'
import { selectUserData } from "libs/web-app-lib/data-access/slices/userSlice";
import { useSelector, useDispatch } from 'react-redux';
import { selectAppData } from '../../data-access/slices/appSlice'
interface ISoftAd {
    adId: number,
    title: string,
    photo: string,
    date: string,
    text: string,
    image: string,
    category: string
}

export default function Body() {
    const dispatch = useDispatch();
    const adData = useSelector(selectAdData)
    const userData = useSelector(selectUserData)
    const appData = useSelector(selectAppData)
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
                image: ad.photos[0] || "",
                category: ad.category.title
            }
            adList.push(newAd);
        })
        dispatch(setAdState(adList))
    }

    useEffect(() => {
        loadAdData()
    }, [])

    const sortData = () => {
        console.log(appData.sortLabel);
        console.log(appData.sortBy);
        if (userData.userId > 0 || userData.adminId > 0 || userData.clientId > 0) {
            switch (appData.sortBy) {
                case "": {
                    return (
                        adData.map((ad: any) => {
                            return <AdCard
                                key={ad.adId}
                                adId={ad.adId}
                                title={ad.title}
                                photo={ad.photo}
                                date={ad.date}
                                text={ad.text}
                                image={ad.image} />
                        }))
                }
                case "category": {
                    return (
                        adData.map((ad: any) => {
                            if (ad.category == appData.sortLabel) {
                                return <AdCard
                                    key={ad.adId}
                                    adId={ad.adId}
                                    title={ad.title}
                                    photo={ad.photo}
                                    date={ad.date}
                                    text={ad.text}
                                    image={ad.image} />
                            } else {
                                return <></>
                            }
                        })
                    )
                }
            }
        }
    }
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
                sortData()
            }
        </Box>
    )
}