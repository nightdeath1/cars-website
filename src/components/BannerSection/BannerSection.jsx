import React, { useState } from "react";
import Video from "../../videos/video2.mp4";
import {
  BannerContainer,
  BannerBG,
  BannerContent,
  BannerBtnWrapper,
  Button
} from "./BannerSectionElements";

const BannerSection = ({ openModal }) => {
  return (
    <BannerContainer>
      <BannerBG>
        <video
          className="banner-video"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </BannerBG>
      <BannerContent>
        <h1>Автомобили из Кореи</h1>
        <p>
          ПОЛНЫЙ ПАКЕТ УСЛУГ ОТ ПОДБОРА И ПОКУПКИ ДО ТАМОЖЕННОГО ОФОРМЛЕНИЯ И
          ДОСТАВКИ В ЛЮБОЙ ГОРОД РФ
        </p>
        <BannerBtnWrapper>
          <button onClick={openModal}>Оставить заявку</button>
        </BannerBtnWrapper>
      </BannerContent>
    </BannerContainer>
  );
};

export default BannerSection;

// <div className="banner-container">
//       <div className="banner-bg">
//         <video
//           className="banner-video"
//           autoPlay
//           loop
//           muted
//           src={Video}
//           type="video/mp4"
//         />
//       </div>
//       <div className="banner-content">
//         <h1 className="banner-h1">Автомобили из Кореи</h1>
//         <p className="banner-p">
//           ПОЛНЫЙ ПАКЕТ УСЛУГ ОТ ПОДБОРА И ПОКУПКИ ДО ТАМОЖЕННОГО ОФОРМЛЕНИЯ И
//           ДОСТАВКИ В ЛЮБОЙ ГОРОД РФ
//         </p>
//         <div className="banner-btn-wrapper">
//           <button className="banner-button" onClick={openModal}>
//             Оставить заявку
//           </button>
//         </div>
//       </div>
//     </div>
