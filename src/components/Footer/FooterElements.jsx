import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.div`
  background-color: rgba(231, 231, 250, 0.753);
  width: 100%;
`;



export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 592px) {
    flex-direction: column;
  }


`;
export const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const FooterSocialMedia = styled.div`
  display: flex;
  gap: 10px;
`;
export const FooterContactsLink = styled.a`
text-decoration: none;
color: #797979;
transition: 0.2s ease-in-out;
&:hover {
    color: #0a6d8a;
    transform: scale(1.1);
}
`
export const FooterLinksWrapper = styled.div`
display: flex;
width: 50%;
justify-content: space-around;


@media screen and (max-width: 592px) {
    flex-direction: column;
}
`;
export const FooterLinksItem = styled.div`
  margin-top: 3rem;  
  display: flex;
  flex-direction: column;
  p {
    color: #797979;
    font-size: 18px;
  }
  
  @media screen and (max-width: 592px) {
    align-items: center;
  }
`;
export const FooterLinkTitle = styled.h2`
font-size: 24px;

`;
export const FooterItemLink = styled(Link)`
  color: #797979;
  text-decoration: none;
  font-size: 18px;
`;

export const FooterRights = styled.div`
    border-top: 1px solid #d9d9d9;
    text-align: center;
    padding: 15px 15px 15px;
    color: #797979;
    `
export const FooterLink = styled.a`
    
`

