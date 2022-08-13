import React from 'react';
import styled from 'styled-components';
/* images - CT */
import andreA from './img/CT/andreassuncao1.png';
import carolina from './img/CT/carolinasousa1.jpeg';
import joseV from './img/CT/josevieira1.jpeg';
import joseS from './img/CT/josesantos1.jpeg';
import andreE from './img/CT/Andreenes1.jpeg';
import juliana from './img/CT/julianagoncalves1.jpeg';
import Filipa from './img/CT/filipalima1.jpeg';

const TeamSection = styled.section `
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 40px;
background-color: #eea225;
text-align: center;
color: #fff;
z-index:-1;

h2 {
    min-width: 100%;
}
}`;

const Members = styled.div `
width: 20%;
min-width: 280px;
margin: 10px;
position: relative;

img, div {
    width: 100%;
}
div {
    position: absolute;
    bottom: 0;
    left: 0;
    rigth: 0;
    width: 100%;
    padding: 10px 0;
    background-color: #686867;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: opacity .2s, visibility .2s;
    z-index: 0;

    p {
        text-align: center;
        margin: 2px;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
}

:hover div {
    visibility: visible;
    opacity: 1;
}
`;

function CoreTeam() {
  return (
    <TeamSection>
        <h2>Core Team</h2>
        <Members>
            <img src={andreA} alt='André Assunção'></img>
            <div>
                <p>Responsável pelo Evento - André Assunção</p>
                <p>MEIC 1</p>
                <a href='mailto:andre.assuncao@bestporto.org'>andre.assuncao@bestporto.org</a>
            </div>
        </Members>
        <Members>
            <img src={carolina} alt='André Assunção'></img>
            <div>
                <p>Responsável pelo Evento - André Assunção</p>
                <p>MEIC 1</p>
                <a href='mailto:andre.assuncao@bestporto.org'>andre.assuncao@bestporto.org</a>
            </div>
        </Members>
        <Members>
            <img src={joseV} alt='André Assunção'></img>
            <div>
                <p>Responsável pelo Evento - André Assunção</p>
                <p>MEIC 1</p>
                <a href='mailto:andre.assuncao@bestporto.org'>andre.assuncao@bestporto.org</a>
            </div>
        </Members>
        <Members>
            <img src={joseS} alt='André Assunção'></img>
            <div>
                <p>Responsável pelo Evento - André Assunção</p>
                <p>MEIC 1</p>
                <a href='mailto:andre.assuncao@bestporto.org'>andre.assuncao@bestporto.org</a>
            </div>
        </Members>
        <Members>
            <img src={andreE} alt='André Assunção'></img>
            <div>
                <p>Responsável pelo Evento - André Assunção</p>
                <p>MEIC 1</p>
                <a href='mailto:andre.assuncao@bestporto.org'>andre.assuncao@bestporto.org</a>
            </div>
        </Members>
        <Members>
            <img src={juliana} alt='André Assunção'></img>
            <div>
                <p>Responsável pelo Evento - André Assunção</p>
                <p>MEIC 1</p>
                <a href='mailto:andre.assuncao@bestporto.org'>andre.assuncao@bestporto.org</a>
            </div>
        </Members>
        <Members>
            <img src={Filipa} alt='André Assunção'></img>
            <div>
                <p>Responsável pelo Evento - André Assunção</p>
                <p>MEIC 1</p>
                <a href='mailto:andre.assuncao@bestporto.org'>andre.assuncao@bestporto.org</a>
            </div>
        </Members>
    </TeamSection>
  )
}

export default CoreTeam