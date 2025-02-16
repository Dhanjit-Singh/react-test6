import { React } from 'react';
import Box from '@mui/material/Box';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';


function Carousel() {

    const images = [
        img1, img2, img3, img4, img5, img6, img7
    ];

    const settingss = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (
        <>
        <div className="slider-container">
            <Box sx={{ width: '98%', margin: '0 auto', mt: 1 }}>
                <Slider {...settingss}>
                    {images.map((image, index) => (
                    <div key={index}>
                        <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{ width: "100%", height: "450px", borderRadius: "5px" }}
                        />
                    </div>
                    ))}
                </Slider>
            </Box>
        </div>
        </>
    );
}


export default Carousel