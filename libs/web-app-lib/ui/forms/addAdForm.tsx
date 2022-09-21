import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { fetchGetCategories, fetchGetSoftPublishers, fetchCreateAd } from '../../services'
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../data-access/slices/userSlice'

interface IProps {
    handleClose: any
}


interface ICategory {
    catetoryId: number;
    title: string;
}

interface IPublisher {
    publisherId: number;
    name: string;
}



const AddAdForm: React.FC<IProps> = ({ handleClose }) => {
    const userData = useSelector(selectUserData)
    const [categories, setCategories] = useState<ICategory[]>([])
    const [publishers, setPublishers] = useState<IPublisher[]>([])
    const [newAd, setNewAd] = useState({
        title: "",
        detail: "",
        photos: "",
        keywords: "",
        categoryId: -1,
        publisherId: -1,
    })
    
    const handleChangeAd = (e: any) => {
        const { name, value } = e.target;
        setNewAd((prevState: any) => ({
            ...prevState,
            [name]: value
        }));
    };

    const loadFormData = async () => {
        const categoriesObtained = await fetchGetCategories();
        const categoriesJson = await categoriesObtained.json()
        setCategories(categoriesJson.data.categories)

        const publishersObtained = await fetchGetSoftPublishers();
        const publishersJson = await publishersObtained.json();
        let publisherList: IPublisher[] = [];
        publishersJson.data.publishers.map((publisher: any) => {
            const newPublisher = {
                publisherId: publisher.publisherId,
                name: publisher.user.name + " " + publisher.user.lastName
            }
            publisherList.push(newPublisher)
        })
        setPublishers(publisherList)
    }

    useEffect(() => {
        loadFormData()
    }, [])

    const createAdd = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchCreateAd(newAd.title, newAd.detail, newAd.photos.split(","), newAd.keywords.split(","), userData.adminId, newAd.publisherId, newAd.categoryId)
            .then(r => r.json())
            .then(
                data => {
                    if (data.data) {
                        handleClose()
                    }
                }
            )
    }

    return (
        <Box
            component="form"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                alignItems: "center",
                width: "100%"
            }}
            noValidate
            autoComplete="ocreateAddff"
            onSubmit={createAdd}
        >
            <Typography variant='h5'>Add Ad</Typography>

            <TextField label="Title" name="title" onChange={handleChangeAd} />
            <TextField label="Detail" name="detail" onChange={handleChangeAd} />
            <TextField label="Photos (separated by coma)" name="photos" onChange={handleChangeAd} />
            <TextField label="Keywords (separated by coma)" name="keywords" onChange={handleChangeAd} />

            <Autocomplete
                disablePortal
                sx={{ width: "70%" }}
                options={categories}
                getOptionLabel={(option) => option.title}
                onChange={(event, newValue: any) => {
                    let categoryId: number;
                    if (newValue) {
                        categoryId = newValue.categoryId
                    } else {
                        categoryId = -1
                    }
                    setNewAd((prevState: any) => ({
                        ...prevState,
                        ["categoryId"]: categoryId
                    }));
                }}
                renderInput={(params) => (
                    <TextField {...params} label="Category" />
                )}
            />
            <Autocomplete
                disablePortal
                sx={{ width: "70%" }}
                options={publishers}
                getOptionLabel={(option) => option.name}
                onChange={(event, newValue: any) => {
                    let publisherId: number;
                    if (newValue) {
                        publisherId = newValue.publisherId
                    } else {
                        publisherId = -1
                    }
                    setNewAd((prevState: any) => ({
                        ...prevState,
                        ["publisherId"]: publisherId
                    }));
                }}
                renderInput={(params) => (
                    <TextField {...params} label="Publisher" />
                )}
            />

            <Button type='submit' variant="outlined">Accept</Button>
        </Box>
    )
}

export default AddAdForm;
