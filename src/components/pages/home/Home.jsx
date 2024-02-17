/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from '../../slider/Slider'
import HomeInfoBox from './HomeInfoBox'
import ProductCarousel from '../../carousel/ProductCarousel'

const PageHeading = ({heading,btnText})=>{
   return (
    <>
      <div className='--flex-between' style={{marginTop:50}}>
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
  
  return (
   <>
    <Slider />
    <section className='container'>
       <HomeInfoBox />
       <PageHeading heading={"Latest Products"} btnText={"shop Now>>"} />
        <ProductCarousel />
    </section>
   </>
  )
}

export default Home