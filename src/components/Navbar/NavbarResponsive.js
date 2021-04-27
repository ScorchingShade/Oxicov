import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav `
  background: #000;
  height: auto;
  display: flex;
  flex-direction:column;
   justify-content: center; 
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */

`;

export const NavLink = styled(Link)
`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0.1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;


export const NavMenu = styled.div `
  display: flex;
  flex-direction:column;
  align-items: center;
 margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
   width: 100vw;
  white-space: nowrap; 
  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  justify-content: center;
  width: 100vw; 
  
  @media screen and (max-width: 768px) {
    display: flex;
flex-direction: column;
align-items: center;
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
 /* margin-left: 24px;*/
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)
`
display: flex;
flex-direction: column;
align-items: center;
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
 /* margin-left: 24px;*/
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;