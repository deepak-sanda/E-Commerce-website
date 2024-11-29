import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { productsData } from './ProductData'
import { useParams } from 'react-router-dom'
import { Divider } from '@mui/material'
import "./ProductDisplay.css"
import axios from 'axios'

const ProductDisplay = () => {

    const { id } = useParams()
    const productData = productsData[id - 1]



    
    const AddToCart = async () => {
        const id = localStorage.getItem("userId");
    
    
        if (id) {
            try {
                const response = await axios.post("http://localhost:5000/cart", {
                    detailUrl: productData.detailUrl,
                    title: productData.title.longTitle,
                    cost: productData.price.cost,
                    userId: id
                });
                console.log(response.data);
                alert("Item added to cart");
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    alert("Item already exists in the cart");
                } else {
                    console.error('There was an error!', error);
                }
            }
        } else {
            alert("Please log in first");
        }
    };
    

    
    


    return (

        <div className='productDisplay_section'>
            <Header />
            <div className='productDisplay_container'>
                <div className='productDisplay_left'>
                    <img className='productDisplay_img' src={productData.detailUrl} alt='pic' />

                    <div className='productDisplay_button_container'>
                        <button 
                            className='addToCart_btn'
                            onClick={AddToCart}
                             >Add to cart</button>
                        <button className='buyNow_btn'>Buy Now</button>

                    </div>
                </div>
                <div className='productDisplay_right'>
                    <h4>{productData.title.longTitle}</h4>
                    <Divider />
                    <div className='price_details' >
                        <p className='discount' >-{productData.price.discount}</p>
                        <div className='cost_and_inr'>
                            <div style={{ color: "#0f1111" }} className='inr'>₹</div>
                            <p className='cost'>{productData.price.cost}</p>
                        </div>

                    </div>
                    <div className='MRP'>M.R.P:<del>₹{productData.price.mrp}</del></div>
                    <p className='text'>Inclusive of all taxes</p>
                    <p className='text'>No cost EMI</p>
                    <Divider />

                    <div className='delivery_details'>FREE delivery <strong style={{color:"#0f1111"}}>within 4-5 days.</strong></div>
                    <p style={{color:'#565959',fontSize: "14px", fontFamily:"sans-serif",marginLeft:"10px",marginBottom:"10px"}}>Ships from <span style={{color:"#0f1111", fontFamily:"sans-serif",marginLeft:"22px"}}>Amazon</span></p>
                    <Divider />

                    <p className='product_description_title'>About this item:</p>
                    <p className='product_description'>{productData.description}.</p>
                    

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default ProductDisplay
