import { MotionConfig } from "framer-motion";
import React from "react";
import { AboutIcon, CarIcon, ContactsIcon } from "../Navbar/NavbarElements";
import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  BtnWrap,
} from "./DropdownElements";
// const Dropdown = ({isOpen, toggle}) => {
//   return (

//       <DropdownContainer isOpen={isOpen} onClick={toggle}>
//         <Icon>
//           <CloseIcon onClick={toggle} />
//         </Icon>
//         <DropdownWrapper>
//           <DropdownMenu >
//             <DropdownLink to='/'>
//               <AboutIcon />О Компании
//             </DropdownLink>
//             <DropdownLink to='/'>
//               <CarIcon />
//               Подбор Авто
//             </DropdownLink>
//             <DropdownLink to='/'>
//               <ContactsIcon />
//               Контакты
//             </DropdownLink>

//           </DropdownMenu>
//           <BtnWrap>
//             <button>Contact Us</button>
//           </BtnWrap>
//         </DropdownWrapper>
//       </DropdownContainer>
//   );
// };

const Dropdown = ({ showDrop, closeDrop }) => {

  return (
      <DropdownContainer showDrop={showDrop}>
        <Icon>
          <CloseIcon onClick={closeDrop} />
        </Icon>
        <DropdownWrapper>
          <DropdownMenu >
            <DropdownLink to='/about' onClick={closeDrop}>
              <AboutIcon />О Компании
            </DropdownLink>
            <DropdownLink to='/catalog' onClick={closeDrop} >
              <CarIcon />
              Подбор Авто
            </DropdownLink>
            <DropdownLink to='/contacts' onClick={closeDrop}>
              <ContactsIcon />
              Контакты
            </DropdownLink>

          </DropdownMenu>
          <BtnWrap>
            <button>Contact Us</button>
          </BtnWrap>
        </DropdownWrapper>
      </DropdownContainer>
  );
};

export default Dropdown;
