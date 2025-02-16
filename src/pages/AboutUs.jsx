import "../App.css";
import React from "react";
import Card from "@mui/material/Card";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';



function AboutUs() {
  return (
    <>
      <div role="presentation" style={{ marginTop: "80px", padding: "0px", marginBottom: "0px", height: "0px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
          <Typography sx={{ color: 'text.primary' }}>About us</Typography>
        </Breadcrumbs>
      </div>
      <div className="testimonial_Heading">
        <Card
          sx={{
            display: "flex",
            justifyContent: "center;",
            marginTop: "30px",
            backgroundColor: "lightblue",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ color: "white" }}>About Us</h1>
        </Card>
        <br />
        <Card sx={{ margin: "10px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus,
          obcaecati sed asperiores labore deleniti, accusantium facere,
          consectetur ipsum minima quas voluptatum. Cum, ad earum ipsa eius
          quas ducimus omnis est amet dicta, vitae dolor nobis aspernatur
          aliquid voluptas unde! Eaque quisquam aperiam assumenda laborum
          libero ipsum fuga illo? Omnis, consequuntur id? Adipisci, quas
          similique! Minus nihil architecto, explicabo sunt dolor enim neque
          sint culpa, doloremque aut reprehenderit maxime voluptatum quod eius
          molestiae possimus nam excepturi obcaecati modi impedit quos
          maiores? Quos temporibus ex consectetur incidunt suscipit autem
          expedita, inventore fugiat corporis eius praesentium illo possimus
          totam explicabo velit assumenda odio corrupti quae facilis
          cupiditate! Harum iure accusantium omnis culpa architecto vitae in
          dolores voluptate animi optio? Suscipit nisi sunt nemo dolores
          maxime fugiat ex voluptatem vero illum provident omnis id debitis
          necessitatibus velit eaque sequi facilis, maiores dolorum reiciendis
          deserunt voluptatum vel harum voluptates! Incidunt, numquam magni
          alias consequuntur temporibus, quis excepturi eligendi suscipit
          laudantium quam velit a nisi hic.
        </Card>
      </div>
    </>
  );
}

export default AboutUs;
