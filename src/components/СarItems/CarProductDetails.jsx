import React, { useState } from "react";
import "./CarProductDetails.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import PriceImg from "../../img/price.png";
import InfoImg from "../../img/info.png";
import MileageImg from "../../img/mileage.png";
import EngineImg from "../../img/engine.png";
import FuelImg from "../../img/fuelType.png";
import TransImg from "../../img/transmission.png";
import DriveImg from "../../img/driveTrain.png";
import BootImg from "../../img/bootType.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import carsData from "../data/CarsData";
import { useParams } from "react-router-dom";
import { SwiperContainer } from "./CarProductDetailsElements";
import Modal from "../Modal/Modal";

const CarProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { productId } = useParams();
  const thisProduct = carsData.find((product) => product.id === productId);

  const [modalState, setModalState] = useState(false);
  const handleCloseModal = () => setModalState(false);
  const handleOpenModal = () => setModalState(true);
  
  return (
    
    <>
    <Modal showModal={modalState} closeModal={handleCloseModal} />
    <SwiperContainer>
    <h1>{thisProduct.title}</h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
  {
    thisProduct.image.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={image} />
      </SwiperSlide>  
    ))
  } 
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView="4"
        freeMode={true}
        watchSlidesProgress={true}
        allowTouchMove={true}
        threshold={5}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
{
    thisProduct.image.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={image} />
      </SwiperSlide>  
    ))
  } 
      </Swiper>
    </SwiperContainer>
    <div className="col-md-5 col-xs-12 product-info">
<table className="table table-striped main-product-info">
<tbody>
<tr>
  <td><img src={PriceImg} /></td>
  <td className="titleTD"><span>Цена</span></td>
  <td><span className="carPrice">{thisProduct.price}</span></td>
</tr>
<tr>
<td><img src={InfoImg} /></td>
<td className="titleTD"><span>Код автомобиля</span></td>
<td>{thisProduct.id}</td>
</tr>
<tr>
<td>
<img src={MileageImg} />
</td>
<td className="titleTD"><span>Пробег</span></td>
<td>{thisProduct.mileage}</td>
</tr>
<tr>
<td>
<img src={EngineImg} />
</td>
<td className="titleTD"><span>Объем двигателя</span></td>
<td>{thisProduct.engine}</td>
</tr>
<tr>
<td>
<img src={FuelImg} />
</td>
<td className="titleTD"><span>Топливо</span></td>
<td>{thisProduct.fuelType}</td>
</tr>
<tr>
<td>
<img src={TransImg} />
</td>
<td className="titleTD"><span>Трансмиссия</span></td>
<td>{thisProduct.transmission}</td>
</tr>
<tr>
<td>
<img src={DriveImg} />
</td>
<td className="titleTD"><span>Привод</span></td>
<td>{thisProduct.driveTrain}</td>
</tr>
<tr>
<td>
<img src={BootImg} />
</td>
<td className="titleTD"><span>Тип кузова</span></td>
<td>{thisProduct.bootType}</td>
</tr>
</tbody>
</table>
<div className="text-center">
<button className="carItemButton" onClick={handleOpenModal}>Связаться с нами</button>
</div>
</div>
    </>
  );
};

export default CarProductDetails;
