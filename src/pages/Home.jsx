import React from "react";
import Carousel from "./Carousel";
// import Products from "./Products";
import Testimonial from "./Testimonial";

function Home() {
    return (
        <>
            <div style={{ width: "100%", overflow: "hidden", marginTop: "70px" }}>
                <Carousel />
                <Testimonial />
            </div>
        </>
    );
}

export default Home