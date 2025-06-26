import React from 'react'
import { useState } from 'react';
import { FaCircleChevronRight } from "react-icons/fa6";
import { GoTab } from 'react-icons/go';

function ImageSlider({slides}) {

   const [currentIndex, setCurrentIndex] = useState(0);

   const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
     backgroundImage: `url(${slides[currentIndex].url})`,

   }

    const sliderStyles = {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    };
    const leftArrowStyles = {
      position: "absolute",
      top: "50%",
      left: "10px",
      transform: "translateY(-50%)",
      width: "30px",
      height: "30px",
      backgroundColor: "white",
      borderRadius: "50%",
      cursor: "pointer",
    }

    const rightArrowStyles = {
      position: "absolute",
      top: "50%",
      right: "10px",
      transform: "translateY(-50%)",
      width: "30px",
      height: "30px",
      backgroundColor: "white",
      borderRadius: "50%",
      cursor: "pointer",
      display: "flex",
      padding: "0 auto",
      zIndex: 20,

    };

    const goToPreviousSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex)
    }

     const goToNextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex)
    }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPreviousSlide} >
        
          
          <FaCircleChevronRight style={{ transform: "rotate(180deg) color: white width: 100%" }} />
        
      </div>
      <div style={rightArrowStyles} onClick={goToNextSlide}>
        
          <FaCircleChevronRight />

        
      </div>
       <div style={slideStyles} >
       </div>

      
    </div>
  )
}

export default ImageSlider