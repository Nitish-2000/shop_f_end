/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import styles from './Slider.module.scss'
import Button from "react-bootstrap/Button";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import sliderData from "./SliderData";
import "./Slider.scss";
import { useNavigate } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;
  const autoscroll = true;
  let slideInterval;
  const intervalTime = 5000;
  const prevSlide = () => { 
    let slideNum = currentSlide - 1;
    setCurrentSlide(slideNum > 0 ? slideNum : 4 + slideNum);
  };
  const nextSlide = () => {
    let slideNum = currentSlide + 1;
    setCurrentSlide(slideNum < 4 ? slideNum : slideNum - 4);
  };
  useEffect(()=>{
    setCurrentSlide(0)
  },[])
  useEffect(()=>{
    if(autoscroll){
        const auto = ()=>{
            slideInterval=setInterval(nextSlide,intervalTime)
        }
        auto()
    }
    return ()=>clearInterval(slideInterval)
  },[currentSlide, intervalTime, autoscroll])
  return (
    <div className="slider">
      <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
      <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        const { image, heading, desc } = slide;

        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="image" />
                <div className="content">
                  <span className="span1"></span>
                  <span className="span2"></span>
                  <span className="span3"></span>
                  <span className="span4"></span>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                  <hr />
                  <Button
                    style={{ background: "lightblack" }}
                    onClick={"/shop"}
                  >
                    Shop Now
                  </Button>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
