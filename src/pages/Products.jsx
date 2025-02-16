import "../App.css";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import TestimonialData from "../Api/Testimonial.json";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';

function Products() {
  const jsondata = TestimonialData.products;
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(jsondata.length / itemsPerPage);
  const displayedItems = jsondata.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div role="presentation" style={{ marginTop: "80px", padding: "0px", marginBottom: "0px", height: "0px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
          <Typography sx={{ color: 'text.primary' }}>Products</Typography>
        </Breadcrumbs>
      </div>
      <div className="testimonial_Heading">
        <Card
          sx={{
            display: "flex",
            justifyContent: "center;",
            marginTop: "30px",
            backgroundColor: "lightblue",
            borderRadius: "10px"
          }}
        >
          <h1 style={{ color: "white" }}>Products List</h1>
        </Card>
        <br />
        <Grid container spacing={3} style={{ justifyContent: "center" }}>
          {displayedItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ width: 300, height: 350, display: "flex", flexDirection: "column" }}>
                <CardActionArea sx={{ flex: 1 }}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 150,
                      objectFit: "cover"
                    }}
                    height="140"
                    image={item.thumbnail}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      <b>Price: $<del style={{ color: "red" }}> {item.total} </del> <span style={{ marginLeft: "20px" }}>Price: ${item.price}</span> </b>
                    </Typography>
                    <p><b>Qauntity: {item.quantity}</b></p>
                    <p><b>Availibility: Available</b></p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2} style={{ justifyContent: "center", alignItems: "center", margin: "40px 40px" }}>
          <Pagination count={totalPages} page={page} onChange={handlePageChange} />
        </Stack>
      </div>
    </>
  );
}

export default Products;
