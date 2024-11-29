import React from 'react'
import "./Maincomponent.css"
import Banner from './Banner'
import ac_img from "./images/air_conditioner.jpg"
import washing_machine_img from "./images/washing_machine.jpg"
import microwave_img from "./images/microwave.jpg"
import refrigerator_img from "./images/refrigerator.jpg"
import w_img1 from "./images/w_img1.jpg"
import w_img2 from "./images/w_img2.jpg"
import w_img3 from "./images/w_img3.jpg"
import w_img4 from "./images/w_img4.jpg"
import m_img1 from "./images/m_img1.jpg"
import m_img2 from "./images/m_img2.jpg"
import m_img3 from "./images/m_img3.jpg"
import m_img4 from "./images/m_img4.jpg"
import watch_img1 from "./images/watch_img1.jpg"
import watch_img2 from "./images/watch_img2.jpg"
import watch_img3 from "./images/watch_img3.jpg"
import watch_img4 from "./images/watch_img4.jpg"
import KitchenProductCarousel from "./KitchenProductCarousel"
import LivingSpaceProdCarousel from './LivingSpaceProdCarousel'
import ProductCard from './productCard'





function Maincomponent() {
  const products1 = [
    { id:1, imgSrc: ac_img, description: 'Lloyd 1.0 Ton 5 Star Inverter Split AC '},
    { id:2, imgSrc: washing_machine_img, description: 'Bosch Front Loading Washing Machine' },
    { id:3, imgSrc: microwave_img, description: 'LG 20 L Solo Microwave Oven' },
    { id:4, imgSrc: refrigerator_img, description: 'Samsung 236 L Refrigerator' },
  ];

  const products2 = [
    { id:5, imgSrc: w_img1, description: 'Women Maxi Dress' },
    { id:6, imgSrc: w_img2, description: 'Regular Jumpsuit with Pockets' },
    { id:7, imgSrc: w_img3, description: 'Embroidered Straight Kurta with Pant' },
    { id:8, imgSrc: w_img4, description: 'Cotton Blend Kurta Set With Dupatta' },
  ];
  const products3 = [
    { id:9, imgSrc: m_img1, description:  "Casual Denim shirt",},
    { id:10, imgSrc: m_img2, description: "Denim Jacket" },
    { id:11, imgSrc: m_img3, description: 'Lymio Men Baggy Jeans ' },
    { id:12, imgSrc: m_img4, description: "Silk Blend Kurta Jacket" },
  ];

  const products4 = [
    { id:13, imgSrc: watch_img1, description: 'Fastrack Limitless Glide' },
    { id:14, imgSrc: watch_img2, description: 'Fire-Boltt Gladiator' },
    { id:15, imgSrc: watch_img3, description: 'boAt Wave Elevate Pro' },
    { id:16, imgSrc: watch_img4, description: 'Noise ColorFit Ultra 3 ' },
  ];

  const title1 = "Appliances for your home"
  const title2 = "Styles for women"
  const title3 = "Men's fashion"
  const title4 = "Best sellers | Electronic watches "

  


  return (
    <div className='container'>
      <div className='carousel_part'>
        <Banner />
      </div>
      <div className='productCard__container'>
        <ProductCard title={title1} products={products1} />
        <ProductCard title={title2} products={products2} />
        <ProductCard title={title3} products={products3} />
        <ProductCard title={title4} products={products4} />
      </div>

      <div>
        <KitchenProductCarousel />
      </div>
      
      <div>
        <LivingSpaceProdCarousel />
      </div>
      


    </div>
  )
}

export default Maincomponent
