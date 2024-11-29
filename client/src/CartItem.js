import React, { useState } from 'react';
import { Divider } from '@mui/material';
import "./CartPage.css";
import axios from 'axios';

const CartItem = ({ detailUrl, title, cost, id, updateCart}) => {
    const [count, setCount] = useState(1);

    const incrementCount = () => {
        if (count < 9) {
            setCount(count + 1);
        }
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const removeItem = async (id) => {
            try {
              const response = await axios.delete(`http://localhost:5000/removeitem/${id}`); 
               console.log(response.data)
               updateCart()
            } catch (error) {
              console.error('Error removing item:', error);
            }
    };


    return (
        <div>
            <div className='cartItem_container'>
                <img className='cart_item_img' src={detailUrl} alt='pic' />
                <div className='cartTxt_container'>
                    <div className='title_cost'>
                        <p className='cart_item_title'>{title}</p>
                        <strong className='cart_item_cost'><span className='INR'>₹</span> {cost}</strong>
                    </div>
                    <p className='inStock'>In stock</p>
                    <p className="dispatch">Usually dispatch in 2-3 days.</p>
                    <p className='free_delivery'>Eligible for FREE Shipping</p>
                    <img className='fulfill_badge' src='https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png' alt='badge' />
                    <div className='counter'>
                        <div className='count_btn' onClick={decrementCount}>-</div>
                        <div className='countValue'>Qty: {count}</div>
                        <div className='count_btn' onClick={incrementCount}>+</div>
                    </div>
                    <div className='cart_options'>
                        <p onClick={() => { removeItem(id) }}>Delete</p><span > | </span>
                        <p>Save for later</p><span> | </span>
                        <p>See more like these</p>


                    </div>
                </div>
            </div>
            <Divider variant='middle' />
        </div>
    );
};



export default CartItem;
