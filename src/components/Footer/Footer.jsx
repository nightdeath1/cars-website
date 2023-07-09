import React from "react";
import logo from "../../img/logoBig.png";
import tg from "../../img/tg.png";
import wa from "../../img/wa.png";
import yt from "../../img/yt.png";
import ig from "../../img/ig.png";
import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterSocialMedia,
  FooterLinksItem,
  FooterLinkTitle,
  FooterItemLink,
  FooterRights,
  FooterLinksWrapper,
  FooterContactsLink
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>
          <img src={logo} />
          <FooterSocialMedia>
            <FooterContactsLink href="https://t.me/koreaavto2020" target="_blank">
              <img src={tg} />
            </FooterContactsLink>
            <FooterContactsLink
              href="https://api.whatsapp.com/send?phone=821033444847"
              target="_blank"
            >
              <img src={wa} />
            </FooterContactsLink>
            <FooterContactsLink
              href="https://www.youtube.com/@user-sw7rs5wx3k/featured"
              target="_blank"
            > 
              <img src={yt} />
            </FooterContactsLink>
            <FooterContactsLink
              href="https://www.instagram.com/_avto_korea_/"
              target="_blank"
            > 
              <img src={ig} />
            </FooterContactsLink>
          </FooterSocialMedia>
        </FooterLogo>
        <FooterLinksWrapper>
          <FooterLinksItem>
            <FooterLinkTitle>Главная</FooterLinkTitle>
            <FooterItemLink to="/about">О компании</FooterItemLink>
            <FooterItemLink to="/catalog">Подбор Авто</FooterItemLink>
            <FooterItemLink to="/contacts">Контакты</FooterItemLink>
            <FooterItemLink to="/">Отзывы</FooterItemLink>
          </FooterLinksItem>
          <FooterLinksItem>
            <FooterLinkTitle>Контакты</FooterLinkTitle>
            <b>Адрес:</b>
            <p>asdasdad</p>
            <b>Электронная почта:</b>
            <FooterContactsLink href="mailto:skoreacar@gmail.com"><p>koreaavto@gmail.com</p></FooterContactsLink>
            <b>Телефон:</b>
            <FooterContactsLink href="tel:+821033444847"><p>+82 10 3344 4847</p></FooterContactsLink>
          </FooterLinksItem>
        </FooterLinksWrapper>
      </FooterContent>
      <FooterRights>© Global Motors 2022. All rights reserved.</FooterRights>
    </FooterContainer>
  );
};

export default Footer;
