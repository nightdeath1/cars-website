import React, { useState } from "react";
import BannerSection from "../components/BannerSection/BannerSection";
import CarsSection from "../components/CarsSection/CarsSection";
import Modal from "../components/Modal/Modal";

const Main = () => {
  const [modalState, setModalState] = useState(false);
  const handleCloseModal = () => setModalState(false);
  const handleOpenModal = () => setModalState(true);

  return (
    <>
      <Modal showModal={modalState} closeModal={handleCloseModal} />
      <BannerSection openModal={handleOpenModal} />
      <CarsSection />
    </>
  );
};

export default Main;
