/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from '../../slider/Slider'
import HomeInfoBox from './HomeInfoBox'
import { productData } from '../../Carousel/data'
import { CarouselItem } from 'react-bootstrap'
import ProductCarousel from '../../Carousel/Carousel'

const PageHeading = ({heading,btnText})=>{
   return (
    <>
      <div className='--flex-between'>
        <h2 className='--fw-thin'>{heading}</h2>
        <button className='--btn'>
          {btnText}
        </button>
        </div>
        <div>
        <div className='--hr'></div>
      </div>
    </>
   )
}


function Home() {
  const productss = productData.map((data) =>{
    return <div key={data.id}>
      <CarouselItem 
      name={data.name}
      url={data.imageurl}
      price = {data.price}
      description = {data.description}
      />
    </div>

    
  })
  return (
   <>
    <Slider />
    <section className='container'>
       <HomeInfoBox />
       <PageHeading heading={"Latest Products"} btnText={"shop Now>>"} />
       <ProductCarousel product={productss} />
    </section>
   </>
  )
}

export default Home