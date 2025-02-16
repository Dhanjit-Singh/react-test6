
import "../App.css";
import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import img1 from "../assets/images/4.jpg";
import img2 from "../assets/images/5.jpg";
import img3 from "../assets/images/6.jpg";
import img4 from "../assets/images/7.jpg";



function Testimonial() {
    return (
        <>
            <div className="testimonial_Heading">
                <Card
                    sx={{
                        display: "flex",
                        justifyContent: "center;",
                        marginTop: "80px",
                        backgroundColor: "lightblue",
                        borderRadius: "10px"
                    }}
                >
                    <h1 style={{ color: "white", padding: "0px" }}>Testimonial</h1>
                </Card>
                <br />
                <Grid container spacing={3} style={{ justifyContent: "center" }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ width: 300, height: 350, display: "flex", flexDirection: "column" }}>
                            <CardActionArea sx={{ flex: 1 }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: 250,
                                        objectFit: "cover"
                                    }}
                                    height="250"
                                    image={img3}
                                    alt="#"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        M.D
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        <b>Jay Govind Singh </b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ width: 300, height: 350, display: "flex", flexDirection: "column" }}>
                            <CardActionArea sx={{ flex: 1 }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: 250,
                                        objectFit: "cover"
                                    }}
                                    height="250"
                                    image={img1}
                                    alt="#"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Director
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        <b>Dhanjit Singh </b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ width: 300, height: 350, display: "flex", flexDirection: "column" }}>
                            <CardActionArea sx={{ flex: 1 }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: 250,
                                        objectFit: "cover"
                                    }}
                                    height="250"
                                    image={img2}
                                    alt="#"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        C.E.O
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        <b>Sunil Singh </b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ width: 300, height: 350, display: "flex", flexDirection: "column" }}>
                            <CardActionArea sx={{ flex: 1 }}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: 250,
                                        objectFit: "cover"
                                    }}
                                    height="250"
                                    image={img4}
                                    alt="#"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        General Manager
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                        <b>Arun Singh </b>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Testimonial;