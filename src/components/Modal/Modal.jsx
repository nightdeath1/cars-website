import React from "react";
import {
  ModalOuter,
  ModalIcon,
  CloseIcon,
  ModalHeading,
  ModalForm,
  ModalFormItem,
  LabelName,
  ModalInput,
  SubmitButton,
} from "./ModalElements";

const Modal = ({ showModal, closeModal }) => {
  return (
    <>
    <ModalOuter onClick={closeModal} showModal={showModal}  />
      <ModalForm showModal={showModal}>
        <ModalIcon >
          <CloseIcon onClick={closeModal} />
        </ModalIcon>
        <ModalHeading>Пожалуйста, оставьте ваши контакты</ModalHeading>
        <ModalFormItem>
          <LabelName htmlFor="name">ФИО</LabelName>
          <ModalInput type="text"></ModalInput>
        </ModalFormItem>
        <ModalFormItem>
          <LabelName htmlFor="phone">Номер Телефона</LabelName>
          <ModalInput type="tel"></ModalInput>
        </ModalFormItem>
        <SubmitButton>Отправить</SubmitButton> 
      </ModalForm>
      </>
  );
};

export default Modal;

  // const handleClose = (e) => {
  //   const closestElement = e.target.closest('.form-wrapper')
  //   if (!closestElement) {
  //     closeModal();
  //   }
  // }
// <div className="popup-background" onClick={handleClose}>
// <div className="form-wrapper">
// <i class="fa-solid fa-xmark" onClick={closeModal}></i>
//     <div className="form-h2-div"><h2>Пожалуйста, оставьте ваши контакты</h2></div>
//   <div className="form-group">
//     <label htmlFor="name">ФИО</label>
//     <input className="form-control" id="name" />
//   </div>
//   <div className="form-group">
//     <label htmlFor="phone">Номер Телефона</label>
//     <input
//       type="tel"
//       className="form-control"
//       id="tel"
//       placeholder="+7(999)999-99-99"
//     />
//   </div>
//   <div className="form-group-button">
//   <a href="/">
//     <button className="popup-button" type="submit">
//       Submit
//     </button>
//     </a>
//   </div>
// </div>
// </div>
