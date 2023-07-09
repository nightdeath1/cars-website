import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const ModalOuter = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  transition: 0.3s ease-in-out;
  display: ${({ showModal }) => (showModal ? "block" : "none")};
`;
export const ModalIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
`;
export const CloseIcon = styled(FaTimes)`
  color: black;
`;
export const ModalHeading = styled.h2`
font-size: 2rem;
margin-bottom: 1rem;`;
export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 2rem;
  width: 480px;
  height: 500px;
  transition: 0.3s ease-in-out;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  background: rgba(231, 231, 250, 1);
  opacity: ${({ showModal }) => (showModal ? "1" : "0")};
  top: ${({showModal}) => (showModal ? '50%' : '-100%')};
`;
export const ModalFormItem = styled.div`

`;
export const LabelName = styled.label`
font-weight: bold;
display: block;
`;

export const ModalInput = styled.input`  width: 300px;
padding: 12px;
border: 1px solid #ccc;
border-radius: 5px;
box-sizing: border-box;
margin-top: 1rem;
margin-bottom: 1rem;`;

export const SubmitButton = styled.button`
margin-top: 1rem;
  background: #000;
  border: none;
  color: #fff;
  border-radius: 25px;
  padding: 15px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
`;
