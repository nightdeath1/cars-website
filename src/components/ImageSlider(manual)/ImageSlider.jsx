import React, {useState, useEffect} from "react";
import {SliderData} from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './ImageSlider.css'
const ImageSlider = ({ slides, autoScroll, intervalTime }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  let slideInterval;
  useEffect(() => {
    if (autoScroll) {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    return () => clearInterval(slideInterval);
  }, [current]);


  const moveDot = index => {
    setCurrent(index)
}

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }


  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="travel image" className="image" />
            )}
          </div>
        );
      })}
       <div className="container-dots">
                {Array.from({length: length}).map((item, index) => (
                  
                    <div 
                    onClick={() => moveDot(index)}
                    className={current === index ? "dot active" : "dot"}
                    ></div>
                ))}
        </div>
    </section>
  );
};

export default ImageSlider;
