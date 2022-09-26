import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from './copyright/copyRight';
import { Link as RouteLink } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';


const USERS_TYPES = [
    {
        value: 'CLIENT',
    },
    {
        value: 'PUBLISHER',
    },
    {
        value: 'ADMIN',
    }
];


interface IProps {
    handleSubmit: any, userType: any, setUserType: any, errorMessage: string;
}

const SignUpForm: React.FC<IProps> = ({ handleSubmit, userType, setUserType, errorMessage }) => {

    const handleChangeUserType = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserType(event.target.value);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>

                <TextField
                    id="outlined-select-currency"
                    select
                    label="User Type"
                    value={userType}
                    onChange={handleChangeUserType}
                    helperText="Please select your user Type"
                    sx={{ m: 2 }}
                >
                    {USERS_TYPES.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="userName"
                                label="User Name"
                                name="userName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        {
                            userType !== "PUBLISHER" ? "" :
                                <>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            name="photo"
                                            required
                                            fullWidth
                                            label="Photo URL"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Cellphone"
                                            name="cellphone"
                                        />
                                    </Grid>
                                </>
                        }
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Typography color={"red"}>{errorMessage}</Typography>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <RouteLink to="/signIn">
                                Already have an account? Sign in
                            </RouteLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright />
        </Container>
    )
}

export default SignUpForm