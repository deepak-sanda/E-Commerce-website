

import React from 'react';
import Product from './Product';
import "./productCard.css"

const ProductCard = ({ products, title }) => {





    return (
        <>
            <div className='product_card'>
                <div className='productCard__header'>
                    <strong className='product_card_title'>{title}</strong>
                </div>
                <div className='product-card-grid'>
                    {products.map((product) => {
                        return (
                            
                                <Product
                                    key={product.id}
                                    id={product.id}
                                    imgSrc={product.imgSrc}
                                    description={product.description}

                                />
                            

                        )}
                    )}

                </div>


            </div>

        </>
    )
};

export default ProductCard;