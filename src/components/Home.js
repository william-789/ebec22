import React from 'react'
import styled from 'styled-components'
import backgroundH from './img/backgroundHome.jpg'

const HomeSection = styled.section `
    width: 100%;
    height: 90vh;
    background-image: url(${backgroundH});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #eea225;
    align-items: center;
    text-align: center;

    h1 {
        padding: 3px; 
        font-size: 5em;
    }
    a.buttonSub {
        text-decoration: none;
        font-weight: 700;
        font-size: 24px;        
        margin: 15px;
        border-radius: 20px;
        background: #eea225;
        color: #fff;
        padding: 25px;
        width: 185px;
        text-align: center;
        cursor: pointer;
        border: none;
    }
    @media only screen and (max-width: 400px) {
      h1 {
        font-size: 3.7em;
      }
    }
`;

function Home() {
  return (
    <HomeSection>
        <h1>EBEC PORTO'22</h1>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNtHNNMRRB7ZwfDx5Ov4kJAfznlLX2rt3vlYO8MNKt26WGdw/viewform?usp=sf_link" class="buttonSub">Inscreve-te</a>
    </HomeSection>
  )
}

export default Home