import React from 'react'
import {Nav, NavMenu, NavMenuLink, CarIcon, ContactsIcon, InfoIcon, ReviewsIcon} from './NavbarElements'
import {BiCar, BiPhone, } from 'react-icons/bi'

const Navbar = () => {
  return (
    <Nav>
      <NavMenu>
        <NavMenuLink to='/about'><InfoIcon />О Компании</NavMenuLink>
        <NavMenuLink to='/catalog'> <CarIcon  />Подбор Авто</NavMenuLink>
        <NavMenuLink to='/contacts'><ContactsIcon />Контакты</NavMenuLink>
        <NavMenuLink to='/reviews'> <ReviewsIcon  />Отзывы</NavMenuLink>
      </NavMenu>
    </Nav>
  )
}

export default Navbar