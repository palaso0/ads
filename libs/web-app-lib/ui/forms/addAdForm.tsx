import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { fetchCreateCategory, fetchGetAdmins } from '../../services'
import Autocomplete from '@mui/material/Autocomplete';


interface IProps {
    handleClose: any
}

const adminData = [
    {
        "adminId": 1,
        "user": {
            "name": "Paulo",
            "lastName": "Choque"
        }
    },
    {
        "adminId": 2,
        "user": {
            "name": "Paulo2",
            "lastName": "Choque2"
        }
    },
    {
        "adminId": 3,
        "user": {
            "name": "Paulo3",
            "lastName": "Choque3"
        }
    }
]

const AddAdForm: React.FC<IProps> = ({ handleClose }) => {
    const [admins, setAdmins] = React.useState([
        {
            "adminId": 1,
            "name": "Paulo",
            "lastName": "Choque"
        },
    ])
    const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        fetchGetAdmins().then(data => {
            setAdmins(data.data.admins)
        }
        )
            .finally(() => {
                let datosDeseados: any = [];

                admins.map(
                    admin => {
                        console.log(admin);
                        // datosDeseados.push({
                        //     "adminId": admin.adminId,
                        //     "name": admin.user.name,
                        //     "lastName": admin.user.lastName
                        // })
                    }
                )
                console.log(datosDeseados);
                setAdmins(datosDeseados);
                setLoading(false);
            })
    }, [])

    const createAdd = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const category = data.get('categoryName');

        fetchCreateCategory(category)
            .then(
                data => {
                    if (data.data) {
                        handleClose()
                    }
                }
            )
    }

    if (loading) {
        return (
            <p>loading...</p>
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

            <TextField label="Title" name="title" />
            <TextField label="Photos (separated by coma)" name="photos" />
            <TextField label="Keywords (separated by coma)" name="keynotes" />

            {/* <Autocomplete
                disablePortal
                sx={{ width: "70%" }}
                options={admins}
                getOptionLabel={(option) => option.name}
                onChange={(event, newValue) => {

                }}
                renderInput={(params) => (
                    <TextField {...params} label="Admin" />
                )}
            /> */}

            <Button type='submit' variant="outlined">Accept</Button>
        </Box>
    )
}

export default AddAdForm;

const dataPro = [
    {
        "adminId": 1,
        "userName": "Paulo",
        "lastName": "Choque"
    },
    {
        "adminId": 2,
        "userName": "Paulo2",
        "lastName": "Choque2"
    },
    {
        "adminId": 3,
        "userName": "Paulo3",
        "lastName": "Choque3"
    }
]