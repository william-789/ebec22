import React from 'react';
import styled from 'styled-components';
import { CoreTeamData } from './CoreTeamData';

const TeamSection = styled.section `
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 40px;
background-color: #eea225;
text-align: center;
color: #fff;

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
        <h2>CORE TEAM</h2>
        {CoreTeamData.map((item) => {
        return(
            <Members>
            <img src={item.img} alt={item.name}></img>
            <div>
                <p>{item.position}</p>
                <p>{item.course}</p>
                <a href={item.link}>{item.mail}</a>
            </div>
            </Members>
        )
        })}
    </TeamSection>
  )
}

export default CoreTeam