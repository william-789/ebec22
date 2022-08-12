import React from 'react'
import styled from 'styled-components'
import pyramid from './img/EBEC_pyramid_2018.jpg'

const RoundsSection = styled.section `
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;
padding: 40px;
text-align: center;
color: #686867;

div, img {
    width: 30%;
}
@media only screen and (max-width: 900px) {
    justify-content: center;
    div, img {
      width: 80%;
    }
  }
`;

function Rounds() {
  return (
    <RoundsSection>
        <div>
            <h2>RONDA REGIONAL</h2>
            <p>A ronda regional será organizada em cooperação pelos cinco Grupos Locais 
            do BEST em Portugal e por dois Grupos Locais do BEST em Espanha. Contará com 
            a participação de 64 estudantes, distribuídos por ambas as categorias, 8 dos 
            quais em representação da FEUP e/ou da FCUP. Esta ronda está prevista realizar-se 
            também no Porto de 13 a 16 de maio.</p>
        </div>
        <img src={pyramid} alt='Rounds description'></img>
        <div>
            <h2>RONDA FINAL</h2>
            <p>As duas melhores equipas, uma de Team Design e de Innovative Design e outra de 
            Case Study, irão representar a Península Ibérica na Ronda Final da EBEC que terá 
            lugar em Zagreb, Croácia de 22 a 30 de julho de 2022. Nesta ronda, as equipas vencedoras 
            de todas as rondas nacionais e regionais irão competir entre si nas respetivas categorias.</p>
        </div>
    </RoundsSection>
  )
}

export default Rounds

/*
intl
*/