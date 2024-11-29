// Product.js
import React from 'react';
import "./productCard.css"
import { Link } from 'react-router-dom';


const Product = ({ imgSrc, description, id }) => {



  return (
    <div className='product-item'  >
      <Link to={`/productDisplay/${id}`} className='productDisplay_link'>
        <img className='image' src={imgSrc} alt={id} />
        <p className='image_description'>{description}</p>
      </Link>
    </div>
  )
};

export default Product;