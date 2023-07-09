import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import {Link} from 'react-router-dom'



export const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(231,231,250,97%);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({showDrop}) => (showDrop ? '1' : '0')};
    top: ${({showDrop}) => (showDrop ? '0' : '-100%')};
    
`

export const Icon = styled.div`
position: absolute;
right: 5%;
top: 1%;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const CloseIcon = styled(FaTimes)`
color: #000d1a;

`
export const DropdownWrapper = styled.div``
export const DropdownMenu = styled.div`
display:flex;
flex-direction: column;
gap: 4rem;
`

export const DropdownLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #000;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
cursor: pointer;
transition: 0.2s ease-in-out;


`

export const BtnWrap = styled.div`
display: flex;
justify-content: center;
margin-top: 5rem;
 
 button {
    background: #244d58;
    border: none;
    color: #fff;
    border-radius: 25px;
    padding: 15px 25px;
    min-width: 100px;
    max-width: 200px;
 }
`

    
 