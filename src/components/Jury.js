import React from 'react'
import styled from 'styled-components'
/*images*/
import standardPic from './img/Jury/foxCreatedJury.jpg'
import saltpay from './img/Jury/saltpay.svg'

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
    <JurySection id='Juris'>
        <h2>JURY</h2>
        <i>The images of the Jury were mostly replaced in this version for security matters.</i>
        <h2>Team Design</h2>
        <FlexRow>
            <div>
                <img src={standardPic} alt=''></img>
                <p>Marco Parente</p>
            </div>
            <div>
                <img src={standardPic} alt=''></img>
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
                <img src={standardPic} alt=''></img>
                <p>António Silva</p>
            </div>
            <div>
                <img src={standardPic} alt=''></img>
                <p>José Luís Santos</p>
            </div>
            <div>
                <img src={standardPic} alt=''></img>
                <p>Fernando Pereira</p>
            </div>
        </FlexRow>
        <FlexRow>
            <div>
                <img src={standardPic} alt=''></img>
                <p>Carla Rosa</p>
            </div>
            <div>
                <img src={standardPic} alt=''></img>
                <p>Rita Fernandes</p>
            </div>
            <div>
                <img src={standardPic} alt=''></img>
                <p>Margarida Martins</p>
            </div>
        </FlexRow>
    </JurySection>
  )
}

export default Jury