import React from 'react'
import "./Banner.css"
import img1 from "./images/header1.jpg"
import img2 from "./images/header2.jpg"
import img3 from "./images/header3.jpg"
import img4 from "./images/header4.jpg"
import img5 from "./images/header5.jpg"
import img6 from "./images/header6.jpg"
import Carousel from 'react-material-ui-carousel'


function Banner() {

  const data = [img1,img2,img3,img4,img5,img6]
  
  
  return (
    <div>
        <Carousel
        className='carousel'
        autoPlay={true}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible ={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            backgroundColor :"transparent ",
            height: "250px",
            width:"80px",
            color: 'black',
            borderRadius: 5,
            marginTop:-150,
            
            
            
          }
        }}
        >
            {
              data.map((image,i) => {
                return(
                  <>
                    <img src={image} key={i} className='banner-img' alt="" />
                  </>
                )
              })
            }
            
        </Carousel>
    </div>
  )
}

export default Banner
