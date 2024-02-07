/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from '../../slider/Slider'
import HomeInfoBox from './HomeInfoBox'

function Home() {
  return (
   <>
    <Slider />
    <section className='container'>
       <HomeInfoBox />
    </section>
   </>
  )
}

export default Home