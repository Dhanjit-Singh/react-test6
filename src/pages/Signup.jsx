import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';



import Axios from "axios";



function Signup() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        dob: "",
        mobile: "",
        address: ""
    });

    const [loader, setLoader] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });
    const [error, setError] = useState({});

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        let newErrors = {};
        let isFormValid = true;

        if (formData.name == "" || formData.name == undefined) {
            newErrors.name = "Name is required";
            isFormValid = false;
            setError(newErrors);
            setLoader(false);
            return;
        }

        if (formData.email == "" || formData.email == undefined) {
            newErrors.email = "Email is required";
            isFormValid = false;
            setError(newErrors);
            setLoader(false);
            return;
        }

        if (formData.password == "" || formData.password == undefined) {
            newErrors.password = "Password is required";
            isFormValid = false;
            setError(newErrors);
            setLoader(false);
            return;
        }

        if (formData.mobile == "" || formData.mobile == undefined) {
            newErrors.mobile = "Moble no is required";
            isFormValid = false;
            setError(newErrors);
            setLoader(false);
            return;
        }

        if (formData.dob == "" || formData.dob == undefined) {
            newErrors.dob = "D.O.B is required";
            isFormValid = false;
            setError(newErrors);
            setLoader(false);
            return;
        }

        if (formData.address == "" || formData.address == undefined) {
            newErrors.address = "Address is required";
            isFormValid = false;
            setError(newErrors);
            setLoader(false);
            return;
        }

        if (!isFormValid) {
            setError(newErrors);
            return;
        }

        if (isFormValid) {
            Axios.post(`http://127.0.0.1:8000/api/user/add`, formData)
                .then(response => {
                    console.log('response=====>>>>>', response);
                    setLoader(false);
                    setMessage({ type: "success", text: "User created successfully." });
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                    setTimeout(() => {
                        setMessage(false);
                    }, 5000);
                }).catch(error => {
                    console.log('error=====>>>>>>', error);
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                    setTimeout(() => {
                        setMessage(false);
                    }, 5000);
                    setLoader(false);
                    setMessage({ type: "error", text: error.message });
                });
        }

    };

    return (
        <>
            <div role="presentation" style={{ marginTop: "80px", padding: "0px", marginBottom: "0px", height: "0px" }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
                    <Typography sx={{ color: 'text.primary' }}>Signup</Typography>
                </Breadcrumbs>
            </div>
            <br />
            {message.type == "suceess" && (<>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                    <Button>
                        <Stack sx={{ width: "100%", marginTop: "60px" }}>
                            <Alert variant="filled" severity="success" onClose={() => { }}>{message.text}</Alert>
                        </Stack>
                    </Button>
                </Grid>
            </>)}

            {message.type == "error" && (<>
                <Grid item xs={6} sx={{ textAlign: 'right' }}>
                    <Button>
                        <Stack sx={{ width: "100%", marginTop: "60px" }}>
                            <Alert variant="filled" severity="error" onClose={() => { }}>{message.text}</Alert>
                        </Stack>
                    </Button>
                </Grid>
            </>)}


            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <form onSubmit={handleSubmit}>
                    <Card sx={{ width: "60%", justifyContent: "center", margin: "auto", boxShadow: "0px 4px 10px rgba(0, 0, 0, 10)" }}>
                        <CardHeader title="Signup" sx={{ textAlign: "center", backgroundColor: "lightblue" }}>
                        </CardHeader>
                        <hr /><br />
                        <CardContent>
                            <Grid container spacing={14.5}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Name:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" name="name" onChange={handleInput} type="text" label="Name" sx={{ minWidth: "500px" }} />
                                    {error.name && <span style={{ color: "red", display: "block" }}>{error.name}</span>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={15} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Email:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" name="email" onChange={handleInput} type="email" label="Email" sx={{ minWidth: "500px" }} />
                                    {error.email && <span style={{ color: "red", display: "block" }}>{error.email}</span>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={11.5} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Password:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" name="password" onChange={handleInput} type="password" label="Password" sx={{ minWidth: "500px" }} />
                                    {error.password && <span style={{ color: "red", display: "block" }}>{error.password}</span>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={10.8} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Mobile No:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" name="mobile" onChange={handleInput} type="number" label="Mobile no" sx={{ minWidth: "500px" }} />
                                    {error.mobile && <span style={{ color: "red", display: "block" }}>{error.mobile}</span>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={15} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">D.O.B:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" name="dob" onChange={handleInput} type="date" sx={{ minWidth: "500px" }} />
                                    {error.dob && <span style={{ color: "red", display: "block" }}>{error.dob}</span>}
                                </Grid>
                            </Grid>
                            <Grid container spacing={12.5} sx={{ mt: 2 }}>
                                <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography variant="p">Address:</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField variant="outlined" name="address" onChange={handleInput} label="Address" type="text" sx={{ minWidth: "500px" }} />
                                    {error.address && <span style={{ color: "red", display: "block" }}>{error.address}</span>}
                                </Grid>
                            </Grid>
                        </CardContent>
                        <div style={{ display: "flex", textAlign: "center", justifyContent: "center", marginBottom: "50px" }}>
                            <Button variant="contained" type="submit">Submit
                                {loader === true && <>
                                    <span><CircularProgress size="30px" color="inherit" sx={{ marginLeft: "10px", display: "flex" }} /></span>
                                </>}
                            </Button>
                        </div>
                    </Card>
                </form>
            </div>
        </>
    );
}

export default Signup;