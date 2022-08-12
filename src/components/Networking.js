import React from 'react';
import styled from 'styled-components';
import networkingIMG from './img/NetworkingImg.jpg';

const NetworkSection = styled.section `
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
padding: 40px;
text-align: center;
color: #fff;
background-color: #eea225;

div, img {
    width: 45%;
}
@media only screen and (max-width: 950px) {
  div, img {
    width: 100%;
  }
}
`;

function Networking() {
  return (
    <NetworkSection>
      <div>
        <h2>SESSÃO DE NETWORKING</h2>
        <p>Durante a competição, os participantes têm a possibilidade de participar numa sessão 
        de networking com várias empresas que escolhem a EBEC como contacto de excelência para 
        conviver com os alunos de uma das melhores universidades europeias e apresentar-lhes 
        aquilo que mais procuram e necessitam nas suas empresas.<br></br>
        O BEST Porto também convida os participantes da EBEC a fornecer os seus currículos a 
        empresas, que contactadas pela nossa associação, se mostraram interessadas nestes mesmos.</p>
      </div>
      <img src={networkingIMG} alt='Networking'></img>
    </NetworkSection>
  )
}

export default Networking