import React from 'react';
import {Link} from 'react-router-dom';
import Rating from './Rating';


function Products({product}) {
    return (
        <div key={product._id} className='card'>
              <Link to={`product/${product._id}`}>
                <img className='medium' src={product.image} alt='product'></img>
              </Link>
              <div className='card_body'>
                <Link to={`product/${product._id}`}>
                  <h2>{product.name}</h2>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews}/>
                <div className='price'>
                  ${product.price}
                </div>
                
              </div>
            </div>
    )
}

export default Products
