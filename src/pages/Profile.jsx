import "../App.css";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';


function Profile() {

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('formData=======>>>>>', formData);
        setSubmitted(true);
        console.log('submitted===>>>', submitted);
    };

    return (
        <>
            <div role="presentation" style={{ marginTop: "80px", padding: "0px", marginBottom: "0px", height: "0px" }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
                    <Typography sx={{ color: 'text.primary' }}>Terms & Condition</Typography>
                </Breadcrumbs>
            </div>
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <form onSubmit={handleSubmit}>
                    <Card sx={{ width: "60%", justifyContent: "center", margin: "auto" }}>
                        <CardHeader title="Profile" sx={{ textAlign: "center", backgroundColor: "lightblue" }}>
                        </CardHeader>
                        <hr /><br />
                        <CardContent>
                            <Grid container spacing={14.5}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Name:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" value="Dhanjit Singh" name="name" onChange={handleInput} type="text" sx={{ minWidth: "500px" }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={15} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Email:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" value="dhanjit@mailinator.com" name="email" onChange={handleInput} type="email" sx={{ minWidth: "500px" }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={11.5} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Password:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" value="12345" name="password" onChange={handleInput} type="password" sx={{ minWidth: "500px" }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={10.8} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Mobile No:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" value="1234567890" name="mobile" onChange={handleInput} type="number" sx={{ minWidth: "500px" }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={15} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">D.O.B:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" value="2025-01-01" name="dob" onChange={handleInput} type="date" sx={{ minWidth: "500px" }} />
                                </Grid>
                            </Grid>
                            <Grid container spacing={12.5} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Address:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" value="New Delhi, Haryana, India" name="address" onChange={handleInput} type="text" sx={{ minWidth: "500px" }} />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", marginBottom: "50px" }}>
                            <Button variant="contained" type="submit">Submit</Button>
                        </div>
                    </Card>
                </form>
            </div>
        </>
    );
}

export default Profile;