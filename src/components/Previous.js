import React from 'react'
import styled from 'styled-components';
/*images*/
import i2016 from './img/Previous-1.jpg';
import i2017 from './img/Previous-2.jpg';
import i2018 from './img/Previous-3.jpg';
import i2019 from './img/Previous-4.jpg';
import i2021 from './img/Previous-5.jpg';

const Editions = styled.section `
padding: 40px;
width: 100%;
color: #686867;
display: flex;
justiy-content: center;
flex-wrap: wrap;

img {
  width: 20%;
  min-width: 165px;
}
@media screen and (max-width: 410px) {
  img {
    width: 100%;
  }
}
`;

function Previous() {
  return (
    <Editions id='Previous'>
      <img src={i2016} alt='2016 edition'></img>
      <img src={i2017} alt='2017 edition'></img>
      <img src={i2018} alt='2018 edition'></img>
      <img src={i2019} alt='2019 edition'></img>
      <img src={i2021} alt='2021 edition'></img>
    </Editions>
  )
}

export default Previous