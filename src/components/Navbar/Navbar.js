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
  const smoothScroll = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
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
            <a href={item.link} onClick={smoothScroll} key={item.title}>
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