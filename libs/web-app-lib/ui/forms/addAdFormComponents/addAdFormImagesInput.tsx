import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//TODO 
// Solve images renderization

interface IProps {
    newAd: any,
    setNewAd: any
}

const AddAdFormImagesInput: React.FC<IProps> = ({ newAd, setNewAd }) => {
    const [imgs, setImgs] = useState({
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: ""
    });

    const handleChangeImgs = (e: any) => {
        let imgsArray: string[] = []
        const { name, value } = e.target;
        setImgs((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
        let img: keyof typeof imgs;
        console.log(imgs);
        
        for (img in imgs) {
            if(imgs[img] !== ""){
                imgsArray.push(imgs[img])
            }
        }
        setNewAd((prevState: any) => ({
            ...prevState,
            ["photos"]: imgsArray
        }));
        console.log(newAd);
        
    };
    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 3 }}>
            <Box sx={{ width: "100%", display: "flex", alignContent: "baseline" }}>
                <TextField label="Image URL 1" name="img1" onChange={handleChangeImgs} sx={{ mr: "5px" }} />
                {imgs.img1 !== "" && <img src={imgs.img1} alt="product" height="60"></img>}
            </Box>
            <Box sx={{ width: "100%", display: "flex", alignContent: "baseline" }}>
                <TextField label="Image URL 2" name="img2" onChange={handleChangeImgs} sx={{ mr: "5px" }} />
                {imgs.img2 !== "" && <img src={imgs.img2} alt="product" height="60"></img>}
            </Box>
            <Box sx={{ width: "100%", display: "flex", alignContent: "baseline" }}>
                <TextField label="Image URL 3" name="img3" onChange={handleChangeImgs} sx={{ mr: "5px" }} />
                {imgs.img3 !== "" && <img src={imgs.img3} alt="product" height="60"></img>}
            </Box>
            <Box sx={{ width: "100%", display: "flex", alignContent: "baseline" }}>
                <TextField label="Image URL 4" name="img4" onChange={handleChangeImgs} sx={{ mr: "5px" }} />
                {imgs.img4 !== "" && <img src={imgs.img4} alt="product" height="60"></img>}
            </Box>
            <Box sx={{ width: "100%", display: "flex", alignContent: "baseline" }}>
                <TextField label="Image URL 5" name="img5" onChange={handleChangeImgs} sx={{ mr: "5px" }} />
                {imgs.img5 !== "" && <img src={imgs.img5} alt="product" height="60"></img>}
            </Box>

            {/* <TextField label="Image URL 2" name="img2" onChange={handleChangeImgs} />
            <TextField label="Image URL 3" name="img3" onChange={handleChangeImgs} />
            <TextField label="Image URL 4" name="img4" onChange={handleChangeImgs} />
            <TextField label="Image URL 5" name="img5" onChange={handleChangeImgs} /> */}
        </Box>
    )
}

export default AddAdFormImagesInput;
