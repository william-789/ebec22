import React from 'react'
import style from 'styled-components'

const EbecSection = style.section `
width: 100%;
padding: 0 20px;
text-align: center;
color: #686867;

p {
  padding: 20px;
}
`;

const ButtonBox = style.div `
width: 100%;
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;

.regularButton {
  margin: 20px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  border-radius: 20px;
  background: #eea225;
  padding: 15px;
  color: #fff;
  min-width: 170px;
  max-width: 170px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center;
  cursor: pointer;
  border: none;
  line-height: normal;
}

`;

function Ebec() {
  return (
    <EbecSection>
        <h2>EBEC</h2>
        <p> Aceita o desafio!<br></br>
            A EBEC (European BEST Engineering Competition) é a maior competição europeia de engenharia e tecnologia que tem como objetivo desenvolver o espírito crítico,capacidade de resolução de problemas e criatividade dos participantes enquanto estes trabalham em equipa para resolver em 24 horas o desafio proposto. Vai realizar-se de 19 a 21 de março de 2022, com uma sessão de networking dia 17 de março. Devido ao seu grande interesse académico, esta competição é creditada pela Universidade do Porto com 1,5 ECTS.
            <br></br>
            A competição tem 3 níveis: a ronda local, a ronda regional e, por último, a ronda final. Os vencedores da EBEC Porto passarão à ronda regional, a EBEC Iberia , que se vai realizar também no Porto, em maio. Posteriormente, os vencedores da EBEC Iberia terão a oportunidade de participar na EBEC Final em Zagreb, Croácia, em julho.
            <br></br><br></br>
            Inscrições: de 21 de Fevereiro a 6 de Março.
            <br></br>
            Agarra a tua vaga antes que esgote!
        </p>
        <ButtonBox>
            <a href="https://drive.google.com/file/d/1S7LbpKg99P6kYSFtCD6pj4G1VCK5jnST/view?usp=sharing" class="regularButton">Horário</a>
            <a href="https://drive.google.com/file/d/1QRc7YawpL7Mc12rDlm8vRx3OtAX-dWbP/view?usp=drivesdk" class="regularButton">Regulamento</a>
            <a href="https://drive.google.com/file/d/1iRsGaWsrL858bGsQ26g0Q33x_LI_E76-/view?usp=sharing" class="regularButton">Política de Privacidade</a>
            <a href="https://drive.google.com/file/d/13XRny1V_dQBVVmxU_Cg06pvNqUDu82Po/view?usp=sharing" class="regularButton">Survival Guide</a>
        </ButtonBox>
    </EbecSection>
  )
}

export default Ebec

/*
intl
*/