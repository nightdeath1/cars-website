import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../../img/1.jpg'
import image2 from '../../img/2.jpg'
import image3 from '../../img/3.jpg'
import image4 from '../../img/4.jpg'
import image5 from '../../img/5.jpg'
import './Slider.css'

function ImageSlider() {
  return (
    <Carousel className="w-100 d-flex justify-content-center align">
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />  
      </Carousel.Item>
      <Carousel.Item interval={8000}>
        <img
          className="d-block w-100"
          src={image4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={image5}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;