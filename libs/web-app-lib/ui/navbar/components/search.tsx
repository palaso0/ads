import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import { selectAdData } from '../../../data-access/slices/adSlice'
import AdModal from '../../adModal/AdModal';
import { useState } from 'react';

export default function Search() {
    const adData = useSelector(selectAdData)
    const [openModal, setOpenModal] = useState(false)
    const [adId, setAdId] = useState(-1)
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <Autocomplete
                freeSolo
                sx={{ width: "250px", bgcolor: "white",p:"7px", borderRadius: "5px" }}
                options={adData}
                getOptionLabel={(option: any) => option.title}
                onChange={(event, newValue: any) => {
                    if (newValue) {
                        console.log(newValue.adId);
                        setAdId(newValue.adId)
                        setOpenModal(true)
                    }
                }}
                renderInput={(params) => (
                    <TextField {...params} label="Search..."
                    />
                )}
            />
            
            <AdModal openModal={openModal} handleCloseModal={handleCloseModal} adId={adId} />
        </>
    );
}
