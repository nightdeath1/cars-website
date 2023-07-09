import React from "react";

import {
  ContactsSection,
  ContactsContent,
  ContactsContainer,
  ContactsInfo,
  ContactsItem,
  ContactsWrapper,
  MapLogo,
  PhoneLogo,
  MailLogo,
  LogoContainer,
  ItemTextContainer,
} from "./InfoContactsElements";

const InfoContacts = () => {
  return (
    <ContactsSection>
      <ContactsWrapper>
      <ContactsContent>
        <h2>Наши контакты</h2>
      </ContactsContent>
      <ContactsContainer>
        <ContactsInfo>
          <ContactsItem>
            <LogoContainer>
              <MapLogo />
            </LogoContainer>
            <ItemTextContainer>
              <h3>Адрес</h3>
              <p>802-10, Jugong 8 danjiapateu, Junggye 1(il)-dong, Nowon-gu, Seoul</p>
            </ItemTextContainer>
          </ContactsItem>
          <ContactsItem>
            <LogoContainer>
              <PhoneLogo />
            </LogoContainer>
            <ItemTextContainer>
              <h3>Телефон</h3>
              <p>+8210-3765-5606</p>
            </ItemTextContainer>
          </ContactsItem>
          <ContactsItem>
            <LogoContainer>
              <MailLogo />
            </LogoContainer>
            <ItemTextContainer>
              <h3>Email</h3>
              <p>test@gmail.com</p>
            </ItemTextContainer>
          </ContactsItem>
        </ContactsInfo>
      </ContactsContainer>
      </ContactsWrapper>
    </ContactsSection>
  );
};

export default InfoContacts;
