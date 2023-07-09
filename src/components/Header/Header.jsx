import React from "react";
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderH2,
  Logo,
  HeaderContacts,
  ContactsLink,
  MenuBars,
  ContactsIcons,
} from "./HeaderElements";
import logo from "../../img/logo2.png";
import tg from "../../img/tg.png";
import wa from "../../img/wa.png";
import yt from "../../img/yt.png";
import ig from "../../img/ig.png";

// const Header = ({ toggle }) => {
//   return (
//     <HeaderContainer>
//       <HeaderMenu>
//         <HeaderLogo to="/">
//           <Logo src={logo} />
//         </HeaderLogo>
//         <MenuBars onClick={toggle} />
//         <HeaderH2>
//           <h2>Индивидуальный подбор авто на любой бюджет</h2>
//         </HeaderH2>
//         <HeaderContacts>
//           <ContactsLink href="tel:+821033444847">
//             <p>+82 10 3344 4847</p>
//           </ContactsLink>
//           <ContactsIcons>
//             <ContactsLink href="https://t.me/koreaavto2020" target="_blank">
//               <img src={tg1} />
//             </ContactsLink>
//             <ContactsLink
//               href="https://api.whatsapp.com/send?phone=821033444847"
//               target="_blank"
//             >
//               <img src={wa} />
//             </ContactsLink>
//           </ContactsIcons>
//         </HeaderContacts>
//       </HeaderMenu>
//     </HeaderContainer>
//   );
// };
const Header = ({ openDrop }) => {
  return (
    <HeaderContainer>
      <HeaderMenu>
        <HeaderLogo to="/">
          <Logo src={logo} />
        </HeaderLogo>
        <MenuBars onClick={openDrop} />
        <HeaderH2>
          <h2>Индивидуальный подбор авто на любой бюджет</h2>
        </HeaderH2>
        <HeaderContacts>
          <ContactsLink href="tel:+821033444847">
            <p>+82 10 3344 4847</p>
          </ContactsLink>
          <ContactsIcons>
            <ContactsLink href="https://t.me/koreaavto2020" target="_blank">
              <img src={tg} />
            </ContactsLink>
            <ContactsLink
              href="https://api.whatsapp.com/send?phone=821033444847"
              target="_blank"
            >
              <img src={wa} />
            </ContactsLink>
            <ContactsLink
              href="https://www.youtube.com/@user-sw7rs5wx3k/featured"
              target="_blank"
            >
              <img src={yt} />
            </ContactsLink>
            <ContactsLink
              href="https://www.instagram.com/_avto_korea_/"
              target="_blank"
            >
              <img src={ig} />
              </ContactsLink>
          </ContactsIcons>
        </HeaderContacts>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
