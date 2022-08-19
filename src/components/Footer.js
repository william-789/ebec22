import React from 'react';
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterD = styled.footer `
padding: 20px;
width: 100%;
background-color: #686867;
color: #fff;
display: flex;
flex-wrap: wrap;
justify-content: space-around;

i {
  min-width: 100%;
  text-align: center;
}
a {
  text-decoration: none;
  color: #fff;
}
div:not(:last-of-type) {
  min-width: 165px;
  margin-bottom: 15px;
}
div:last-of-type {
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
span a {
  margin: 0 20px;
}
span:last-of-type {
  font-size: 12px;
}
`;

function Footer() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: '26px' }}>
    <FooterD>
      <i>The email address below is that of the developer. The personal e-mail address of the event creators were taken down in this version for security matters.</i>
      <div>
        <p>Main Organizer</p>
        <p>André Assunção</p>
        <a href='mailto:riberackw@gmail.com'>riberackw@gmail.com</a>
      </div>
      <div>
        <p>CR Responsible</p>
        <p>José Vieira</p>
        <a href='mailto:riberackw@gmail.com'>riberackw@gmail.com</a>
      </div>
      <div>
        <p>Pax Responsible</p>
        <p>Margarida Martins</p>
        <a href='mailto:riberackw@gmail.com'>riberackw@gmail.com</a>
      </div>

      <div>
        <span>
          <a href='https://www.facebook.com/pg/bestporto/' target='_blank' rel='noreferrer'><FaFacebook /></a>
          <a href='https://www.instagram.com/bestporto/' target='_blank' rel='noreferrer'><FaInstagram /></a>
          <a href='https://pt.linkedin.com/company/best-porto' target='_blank' rel='noreferrer'><FaLinkedin /></a>
        </span>
        <span>2022 copyright BEST Porto</span>
      </div>
    </FooterD>
    </IconContext.Provider>
  )
}

export default Footer