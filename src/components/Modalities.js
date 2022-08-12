import React from 'react'
import styled from 'styled-components'
import caseS from './img/casestudy.jpg'
import teamD from './img/teamdesign.jpg'

const ModalitiesSection = styled.section `
width: 100%;
padding: 40px;
background-color: #686867;
color: #fff;
text-align: center;
`;
const FlexforModality = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 100%;

div, img {
    width: 45%;
}
@media only screen and (max-width: 650px) {
    div, img {
      width: 100%;
    }
    img {
        margin: 15px 0;
    }
  }
`;

function Modalities() {
  return (
    <ModalitiesSection>
        <h2>MODALIDADES</h2>
        <FlexforModality>
            <div>
                <h2>CASE STUDY</h2>
                <p>Na categoria de Case Study as equipas têm a oportunidade de analisar e 
                resolver dois problemas baseados em cenários reais. Para isso, a equipa 
                pode utilizar diversos meios de pesquisa e criatividade, tendo de apresentar
                 uma solução em 24 horas. No final, os participantes terão de entregar um 
                relatório e fazer uma apresentação a um grupo de jurados que avalia a sua 
                performance consoante determinados critérios.</p>
            </div>
            <div>
                <h2>TEAM DESIGN</h2>
                <p>Na categoria de Team Design o objetivo é construir um protótipo, com 
                recurso a materiais limitados, que responda de forma adequada às exigências 
                de um problema previamente apresentado. Assim, os participantes terão 24h 
                para projetar uma solução eficiente com base nos seus conhecimentos técnicos 
                e capacidades de resolução de problemas e tomada de decisão. Os protótipos 
                serão posteriormente avaliados por um júri com base em parâmetros previamente 
                definidos pela organização.</p>
            </div>
        </FlexforModality>
        <FlexforModality>
            <img src={caseS} alt='Case Study'></img>
            <img src={teamD} alt='Team Design'></img>
        </FlexforModality>
    </ModalitiesSection>
  )
}

export default Modalities

/*
intl
*/