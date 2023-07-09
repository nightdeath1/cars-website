import styled from "styled-components";
import { BiMap } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import Image from '../../img/carBg.jpg'
export const ContactsSection = styled.section`
  position: relative;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url(${Image});
  /* background-repeat: no-repeat;
  background-size: cover; */
   /* &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.0) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  } */
`;
export const ContactsContent = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 36px;
    font-weight: 500;
    color: black;
  }

  p {
    font-weight: 300;
    color: black;
  }

  @media screen and (max-width: 768px) {
    padding: 50px;
  }
`;
export const ContactsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

@media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 40px;
    width: 100%;
}
`;

export const ContactsWrapper = styled.div`
padding: 50px 100px;
background:rgba(255,255,255, 0.9);`
export const ContactsInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
    width: 100%;
  }
`;
export const ContactsItem = styled.div`
  margin-bottom: 1rem;
  position: relative;
  padding: 20px 0;
  display: flex;
`;
export const MapLogo = styled(BiMap)``;
export const LogoContainer = styled.div`
  min-width: 60px;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
export const ItemTextContainer = styled.div`
  display: flex;
  margin-left: 20px;
  font-size: 16px;
  color: #fff;
  flex-direction: column;
  font-weight: 300;

  h3 {
    font-weight: 500;
    color: #00bcd4;
  }

  p {
    font-size: 1.3rem;
    color: black;
    font-weight: bold;
  }
`;

export const PhoneLogo = styled(BsFillTelephoneFill)``;
export const MailLogo = styled(FiMail)``;
export const ContactsFormWrapper = styled.div`
  width: 40%;
  padding: 40px;
  background: #fff;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const ContactsForm = styled.form`
  h2 {
    text-align: center;
    font-size: 30px;
    color: #333;
    font-weight: 500;
  }
`;
export const FormItemContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 10px;

  span {
    position: absolute;
    left: 0;
    padding: 5px 0;
    font-size: 1rem;
    margin: 10px 0;
    pointer-events: none;
    transition: 0.5s;
    color: #666;
  }
`;

export const FormItemInput = styled.input`
  width: 100%;
  padding: 5px 0;
  font-size: 1rem;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
`;
export const FormItemTextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 5px 0;
  font-size: 1rem;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
`;
export const FormItemInputSubmit = styled.input`
  width: 100px;
  background: #00bcd4;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
`;
