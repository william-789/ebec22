import React, { useRef } from 'react';
import './navbar.css';
import { NavbarData } from "./NavbarData";
import { FaBars } from 'react-icons/fa'
import logo from '../img/logo.png'

function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.classList.toggle("open");
  }
  return (
  <div className='Navbar'>
    <img src={logo} alt=''></img>
    <ul ref={menuRef}>
        <li>
          <a href='https://bestporto.org/' target='_blank' rel='noreferrer'>
            BEST
          </a>
        </li>
      {NavbarData.map((item) => {
        return(
          <li>
            <a onClick={() => {window.location.pathname = item.link}}>
            {item.title}
            </a>
          </li>
        )
      })}
    </ul>
    <button className='menu' onClick={openMenu}><FaBars /></button>
  </div>
  );
}

export default Navbar;