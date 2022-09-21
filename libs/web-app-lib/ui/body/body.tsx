import AdCard from "../card/adCard";
import AdModal from "../adModal/AdModal";
import { Box } from "@mui/system";
import AdFormModal from "../adForm/adForm";
import { fetchGetSoftAds } from "../../services"
import { useEffect, useState } from "react";

interface ISoftAd {
    adId: number,
    title: string,
    photo: string,
    date: string,
    text: string,
    image: string,
}

export default function Body() {
    const [ads, setAds] = useState<ISoftAd[]>([])

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
        setAds(adList);
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
                ads.map((ad: any) => {
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