/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./data";
import CarouselItem from "./CarouselItem";
import {productData} from "./data"

function ProductCarousel() {
  return (
    <div>
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customTransition="all .5"
        transitionDuration={1000}
      >
     {
        productData.map((product,index)=>{
            return <CarouselItem key={index} product={product} />
        })
     }
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
