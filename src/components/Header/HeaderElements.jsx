import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(231, 231, 250, 0.753);


`;

export const HeaderLogo = styled(Link)`
  @media screen and (max-width: 968px) {
    text-align: center;
  }
`;

export const Logo = styled.img`
  
`
export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 968px) {
    flex-direction: column;
  }
`;
export const HeaderH2 = styled.div`

  h2 {
    font-weight: bold;
    font-size: 26px;
    line-height: 52px;
    letter-spacing: 0.04em;
  }

  @media screen and (max-width: 968px) {
    display: none;
  }
`;


export const HeaderContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 968px) {
    margin-bottom: 1rem;
  }
`;
export const ContactsLink = styled.a`
text-decoration: none;
transition: 0.2s ease-in-out;
  p {
    font-weight: bold;
    color: black; 
    &:hover {
      color: #0a6d8a;
    }
  }
  
  img {
    width: 28px;
    height: 28px;
  }

  &:hover {
    transform: scale(1.1);
  }

`;
export const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 968px) {
    display: block;
    height: 25px;
    width: 25px;
    position: absolute;
    right: 5%;
    top: 3%;
    color: #000;
    cursor: pointer;
  }
`;


export const HeaderLink = styled(Link)``

export const ContactsIcons = styled.div`
  display: flex;
  gap: 10px;
`