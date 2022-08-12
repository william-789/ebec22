import React from 'react'
import styled from 'styled-components'
/*Team design - images*/
import marco from './img/Jury/Professor Marco Parente.jpg'
import rui from './img/Jury/Rui Coutinho.jpg'
import saltpay from './img/Jury/saltpay.svg'
/*Case Study - images*/
import antonio from './img/Jury/Professor António Silva.jpg'
import jose from './img/Jury/Professor José Luís Santos.jpg'
import fernando from './img/Jury/Professor Fernando Pereira.jpg'
import carla from './img/Jury/Professora Carla Rosa.jpg'
import rita from './img/Jury/Rita Fernandes.jpeg'
import margarida from './img/Jury/Margarida Martins.jpeg'

const JurySection = styled.section `
width: 100%;
padding: 40px;
text-align: center;
color: #686867;
`;
const FlexRow = styled.div `
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 100%;

div {
    width: 30%;
    padding: 15px;
    min-width: 190px;

    img {
        width: 100%;
    }
    p {
        text-align: center;
        font-size: 24px;
    }   
}
`;

function Jury() {
  return (
    <JurySection>
        <h2>JURY</h2>
        <h2>Team Design</h2>
        <FlexRow>
            <div>
                <img src={marco} alt=''></img>
                <p>Marco Parente</p>
            </div>
            <div>
                <img src={rui} alt=''></img>
                <p>Rui Coutinho</p>
            </div>
            <div>
                <img src={saltpay} alt=''></img>
                <p>SaltPay</p>
            </div>
        </FlexRow>

        <h2>Case Study</h2>

        <FlexRow>
            <div>
                <img src={antonio} alt=''></img>
                <p>António Silva</p>
            </div>
            <div>
                <img src={jose} alt=''></img>
                <p>José Luís Santos</p>
            </div>
            <div>
                <img src={fernando} alt=''></img>
                <p>Fernando Pereira</p>
            </div>
        </FlexRow>
        <FlexRow>
            <div>
                <img src={carla} alt=''></img>
                <p>Carla Rosa</p>
            </div>
            <div>
                <img src={rita} alt=''></img>
                <p>Rita Fernandes</p>
            </div>
            <div>
                <img src={margarida} alt=''></img>
                <p>Margarida Martins</p>
            </div>
        </FlexRow>
    </JurySection>
  )
}

export default Jury