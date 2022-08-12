import React from 'react'
import styled from 'styled-components'
import continental from './img/Partners/Continental Engineering Services.jpg'
import saltpay from './img/Partners/SaltPay.svg'
import stet from './img/Partners/STET.png'
import bi4all from './img/Partners/BI4ALL_logo_color.png'
import platform from './img/Partners/platforme logo.jpg'
import decunify from './img/Partners/logo_Decunify.png'

const PartnersSection = styled.section `
width: 100%;
text-align: center;

div {
    width: 100%
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
    img {
        width: 27%;
        min-width: 200px;
        margin: 20px;
    }
}
`;

function Partners() {
  return (
    <PartnersSection>
        <h2>Partners</h2>
        <div>
            <img src={continental} alt=''></img>
            <img src={saltpay} alt=''></img>
            <img src={stet} alt=''></img>
            <img src={bi4all} alt=''></img>
            <img src={platform} alt=''></img>
            <img src={decunify} alt=''></img>
        </div>
    </PartnersSection>
  )
}

export default Partners