import styled, { css } from "styled-components/macro";
import { BiCar, BiPhone, BiInfoCircle } from "react-icons/bi";
import { BsChatLeftDots } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 968px) {
    display: none;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 60px;
  align-items: center;
  text-align: center;
  gap: 10rem;
  background-color: rgb(209 209 247 / 75%);
`;

export const NavMenuLink = styled(Link)`
height: 60px;
display: flex;
justify-content: center;
align-items: center;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  color: #000;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: 600;
  



`;

export const IconStyle = css`
  margin-right: 10px;
  width: 28px;
  height: 28px;
  margin-bottom: 5px;
`;
export const CarIcon = styled(BiCar)`
  ${IconStyle}
`;
export const AboutIcon = styled(BiCar)`
  ${IconStyle}
`;
export const ContactsIcon = styled(BiPhone)`
  ${IconStyle}
`;

export const InfoIcon = styled(BiInfoCircle)`
  ${IconStyle}
`;
export const ReviewsIcon = styled(BsChatLeftDots)`
  ${IconStyle}
`;
