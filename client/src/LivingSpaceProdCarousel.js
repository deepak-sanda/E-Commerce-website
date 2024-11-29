import React from 'react'
import "./LivingSpaceProdCarousel.css"
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import ls_img1 from "./images/ls_img1.jpg"
import ls_img2 from "./images/ls_img2.jpg"
import ls_img3 from "./images/ls_img3.jpg"
import ls_img4 from "./images/ls_img4.jpg"
import ls_img5 from "./images/ls_img5.jpg"
import ls_img6 from "./images/ls_img6.jpg"
import ls_img7 from "./images/ls_img7.jpg"
import ls_img8 from "./images/ls_img8.jpg"
import ls_img9 from "./images/ls_img9.jpg"
import ls_img10 from "./images/ls_img10.jpg"
import ls_img11 from "./images/ls_img11.jpg"
import ls_img12 from "./images/ls_img12.jpg"
import { Link } from 'react-router-dom';


function LivingSpaceProdCarousel() {

    const ls_data = [ls_img1, ls_img2, ls_img3, ls_img4, ls_img5, ls_img6, ls_img7, ls_img8, ls_img9, ls_img10, ls_img11, ls_img12]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    }
    return (
        <div>
            <div>
                <div className='kp_carousel'>
                    <div className='carousel_header'>
                        <strong>
                            Up to 35% off | Living space products from stores nearby
                        </strong>
                    </div>
                    <div>
                        <Carousel
                            responsive={responsive}
                            swipeable={true}
                            centerMode={true}
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass='custom-dot-list-style'
                            itemClass='carousel-item-padding-40-px'
                            containerClass="carousel-container"
                        >
                            {
                                ls_data.map((img, i) => {
                                    return (
                                        <Link to={`/productDisplay/${i + 29}`}>
                                            <img src={img}
                                                key={i}
                                                id={i}
                                                className='kpData_img'
                                                alt="pic" />
                                        </Link>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LivingSpaceProdCarousel
