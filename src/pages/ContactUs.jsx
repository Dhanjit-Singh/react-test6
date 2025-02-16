import "../App.css";
import React from "react";
import Card from "@mui/material/Card";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';


function ContactUs() {
  return (
    <>
      <div role="presentation" style={{ marginTop: "80px", padding: "0px", marginBottom: "0px", height: "0px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
          <Typography sx={{ color: 'text.primary' }}>Contact us</Typography>
        </Breadcrumbs>
      </div>
      <div>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            backgroundColor: "lightblue",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ color: "white" }}>Contact Us</h1>
        </Card>
      </div>
      <br />
      <div>
        <div style={{ backgroundColor: "#cccccc", margin: "0px 50px 50px 50px" }}>
          <div style={{ padding: "20px 100px 40px 100px" }}>
            <Card sx={{ boxShadow: "5px 5px 5px 5px black", justifyContent: "center", display: "flex", marginBottom: "10px" }}>
              <p><b>Heading</b></p>
            </Card>

            <Card sx={{ boxShadow: "5px 5px 5px 5px black", marginTop: "30px" }}>
              <div className="contactBody">
                <p><span className="contactKey">Name: </span> <span className="contactContent"> Dhanjit singh</span></p>
                <p><span className="contactKey"> Email:</span> <span className="contactContent"> dhanjit@mailinator.com</span></p>
                <p> <span className="contactKey">Phone: </span> <span className="contactContent"> 0123456789</span></p>
                <p><span className="contactKey"> Address:</span> <span className="contactContent"> New Delhi, India</span></p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
