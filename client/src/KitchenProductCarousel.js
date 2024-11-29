
import React from 'react';
import "./KitchenProductCarousel.css";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import kp_img1 from "./images/kp_img1.jpg";
import kp_img2 from "./images/kp_img2.jpg";
import kp_img3 from "./images/kp_img3.jpg";
import kp_img4 from "./images/kp_img4.jpg";
import kp_img5 from "./images/kp_img5.jpg";
import kp_img6 from "./images/kp_img6.jpg";
import kp_img7 from "./images/kp_img7.jpg";
import kp_img8 from "./images/kp_img8.jpg";
import kp_img9 from "./images/kp_img9.jpg";
import kp_img10 from "./images/kp_img10.jpg";
import kp_img11 from "./images/kp_img11.jpg";
import kp_img12 from "./images/kp_img12.jpg";
import { Link } from 'react-router-dom';

function KitchenProductCarousel() {

  const KpData = [
    kp_img1, kp_img2, kp_img3, kp_img4, kp_img5, kp_img6,
    kp_img7, kp_img8, kp_img9, kp_img10, kp_img11, kp_img12
  ];

 

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className='kp_carousel'>
        <div className='carousel_header'>
          <strong>Up to 60% off | Kitchen products curated from stores nearby</strong>
        </div>
        <div>
          <Carousel
            responsive={responsive}
            swipeable={true}
            centerMode={true}
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass='custom-dot-list-style'
            itemClass='carousel-item-padding-40-px'
            containerClass="carousel-container"
          >
            {KpData.map((img, i) => (
              <Link to ={`/productDisplay/${i + 17}`}>
                <img
                  src={img}
                  key={i}
                  id={i}
                  className='kpData_img'
                  alt="pic"
                />
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default KitchenProductCarousel;
