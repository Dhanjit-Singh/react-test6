import "../App.css";
import React from "react";
import Card from "@mui/material/Card";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
function Blog() {
  return (
    <>
      <div role="presentation" style={{ marginTop: "80px", padding: "0px", marginBottom: "0px", height: "0px" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
          <Typography sx={{ color: 'text.primary' }}>Blog</Typography>
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
          <h1 style={{ color: "white" }}>Blog</h1>
        </Card>
        <br />
        <Card sx={{ margin: "10px" }}>
          <div style={{ color: "black" }}>
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
            laudantium quam velit a nisi hic. Ex repellendus quas natus modi
            sed, veniam sapiente nisi atque pariatur illo vero voluptas
            necessitatibus libero laudantium? Architecto quaerat ducimus,
            obcaecati beatae illum hic maiores non natus delectus est! Fuga
            quaerat, est eum in consectetur quibusdam sit ipsa voluptas amet
            ullam omnis, reprehenderit sint ad! Tempore accusantium, labore
            rerum blanditiis explicabo asperiores, magni ea voluptate alias a
            voluptatem fugit, esse sequi fugiat iste iusto aliquid! Maxime
            veritatis exercitationem dolorem autem adipisci! Commodi ducimus
            doloribus laudantium sint eos itaque debitis dignissimos inventore
            nostrum architecto et, dicta dolorem reiciendis. Rem enim, et
            temporibus veritatis sed consectetur maiores molestiae vel fugit
            expedita. Officiis necessitatibus id vel repellendus veniam quod
            commodi alias, eos quo tenetur modi repellat, illo dignissimos fuga
            accusantium adipisci atque? Quam sit necessitatibus quasi, nemo
            accusamus repudiandae est obcaecati, porro omnis deserunt earum quae
            sapiente cupiditate ullam facilis totam, velit sequi saepe aut
            dignissimos. Asperiores explicabo quidem, pariatur sunt repudiandae
            deserunt eaque ullam deleniti provident? Harum ea corrupti ipsam
            odit quidem, neque dolor officia, ipsa iusto molestias voluptatum,
            voluptatibus vitae eveniet. Id nemo quaerat at soluta. Repellendus
            assumenda dignissimos id nisi! Magnam rem quas totam earum ipsum,
            perspiciatis possimus nulla consequuntur, nisi hic quo animi vero ad
            impedit suscipit veniam dolorum facilis alias architecto, officia
            quis! Quaerat aliquid eaque hic, neque id quam ratione officiis
            accusamus sint nostrum iure, soluta qui at veritatis ea excepturi
            ullam dolor, nobis quos est ipsam beatae saepe illo. Labore, ab qui!
            Consectetur perspiciatis reprehenderit numquam quos minima quis
            commodi rerum laudantium dolores dolorem repellat, odio a itaque
            optio debitis dicta ut laboriosam, ipsa incidunt nostrum mollitia
            praesentium magnam iure. Totam quo praesentium voluptates aspernatur
            in fugiat ut velit necessitatibus, mollitia architecto. Neque, illo
            odio similique aliquam hic error mollitia facere ut totam, eius
            obcaecati ratione libero accusantium quibusdam. Alias earum
            praesentium provident perspiciatis sint suscipit expedita unde
            dolores aliquam quasi hic, qui impedit accusantium magnam nobis
            laudantium, maxime voluptatem repudiandae quaerat fuga ipsam sed
            animi! Sed voluptatem vitae id laboriosam laudantium ipsum
            reprehenderit praesentium? Accusantium, accusamus expedita natus
            quidem quis repellendus. Adipisci distinctio non soluta.
          </div>
        </Card>
      </div>
    </>
  );
}

export default Blog;
