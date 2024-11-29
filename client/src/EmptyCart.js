import React from 'react'
import { Divider } from '@mui/material';
import shoppingCart from "./images/shoppingCart1.png"
import "./CartPage.css"
import { NavLink } from 'react-router-dom';


const EmptyCart = () => {
    return (
        <div>
            <div>
                <h1 className='emptyCart_heading'>Your Amazon Cart is empty</h1>
                <p  className='emptyCart_header_txt'>Continue shopping on the <NavLink className="homepage_link" to="/">Amazon.in homepage</NavLink> </p>
                <Divider variant='middle' />
                <div className='emptyCart_container'>
                    <div>
                        <img className='shopping_cart_img' src={shoppingCart} alt='shopping_cart' />
                        <p className='shoppingCart_txt1'>Your shopping cart is waiting... </p>
                        <p className='shoppingCart_txt2'> Give it purpose – <span style={{color:'#c45500'}}>Happy Shopping...!</span></p>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EmptyCart
