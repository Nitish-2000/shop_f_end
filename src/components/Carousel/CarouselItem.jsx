/* eslint-disable no-unused-vars */
import React from 'react'
import './Carosel.scss'
import { Link } from 'react-router-dom'
import ShortenText from '../../utils/index'

function CarouselItem({url, name, price,description}) {
  return (
    <div className='caroselItem'>
             <Link to="/product-details" >
                <img className='product--image' src={url} alt = "Product image" />
                <p className='price'>{`₹ $${price}`}</p>
                <h4>{ShortenText(name,18)}</h4>
                <p className='--mb'>{ShortenText(description,26)}</p>
             
             </Link>
             <button className='--btn'>Add to cart</button>
    </div>
  )
}

export default CarouselItem