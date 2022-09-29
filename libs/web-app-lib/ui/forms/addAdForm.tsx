import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { fetchGetCategories, fetchGetSoftPublishers, fetchCreateAd } from '../../services'
import Autocomplete from '@mui/material/Autocomplete';
import { selectUserData } from '../../data-access/slices/userSlice'
import AddAdFormImagesInput from './addAdFormComponents/addAdFormImagesInput'
import { addAd } from '../../data-access/slices/adSlice'
import { useSelector, useDispatch } from 'react-redux';

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
interface ISoftAd {
    adId: number,
    title: string,
    photo: string,
    date: string,
    text: string,
    image: string,
}

const AddAdForm: React.FC<IProps> = ({ handleClose }) => {
    const userData = useSelector(selectUserData)
    const dispatch = useDispatch()
    const [categories, setCategories] = useState<ICategory[]>([])
    const [publishers, setPublishers] = useState<IPublisher[]>([])
    const [newAd, setNewAd] = useState({
        title: "",
        detail: "",
        photos: [],
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
        fetchCreateAd(newAd.title, newAd.detail, newAd.photos, newAd.keywords.split(","), userData.adminId, newAd.publisherId, newAd.categoryId)
            .then(r => r.json())
            .then(
                data => {
                    if (data.data) {
                        const newData: ISoftAd = {
                            adId: data.data.addAd.adId, 
                            title: data.data.addAd.title,
                            photo: data.data.addAd.publishedBy.photo,
                            date: data.data.addAd.creationDate,
                            text: data.data.addAd.detail,
                            image: data.data.addAd.photos[0],
                        }

                        dispatch(addAd(newData))
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
            onSubmit={createAdd}
        >
            <Typography variant='h4'>New Ad</Typography>

            <TextField label="Title" name="title" onChange={handleChangeAd} sx={{ width: "80%" }} />
            <TextField label="Detail" name="detail" onChange={handleChangeAd} multiline={true}
                rows={3} sx={{ width: "80%" }} />
            <AddAdFormImagesInput newAd={newAd} setNewAd={setNewAd} />
            <TextField label="Keywords (separated by coma)" name="keywords" onChange={handleChangeAd} sx={{ width: "50%" }} />

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
