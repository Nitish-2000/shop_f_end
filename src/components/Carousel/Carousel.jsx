/* eslint-disable no-unused-vars */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsive} from "./data";
import CarouselItem from "./CarouselItem";

function ProductCarousel({products}) {
  return (
    <div>
      <Carousel
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        customTransition="all 500ms ease"
        transitionDuration={1000}
      >
        <CarouselItem {products} />
      </Carousel>
    </div>
  );
}

export default ProductCarousel;
