/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Carousel.scss'
import { Link } from 'react-router-dom'
import shortenText from '../../utils'
function CarouselItem({product}) {
  return (
    <div className='carouselItem'>
       <Link to='/product-details'>
       <img className='product--image' src={product.imageurl} alt="Product Image" /> 
       <p className='price'>
        {`₹ ${product.price}`}
       </p>
       <h4>{shortenText(product.name,18)}</h4>
       <p className='--mb'>{shortenText(product.description,26)}</p>
       </Link>
       <button className='--btn --btn-primary'>Add to cart</button>
    </div>
  )
}

export default CarouselItem