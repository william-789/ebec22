import React, { useState } from 'react';
import { FAQdata } from './FAQdata';
import styled from 'styled-components';

const FaqSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #fff;
width: 100%;
padding: 40px 0 20px 0;
color: #eea225;
div {
  width: 75vw;
  margin-bottom: 10px;
  padding: 0 10px 0 10px;
}
.hiddenAnswer {
  color:  #686867;  
}
`;
const Wrapper = styled.div`
background: #eea225;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;
function FAQ() {
  const [openQuestion, setOpen] = useState(false);

  const toggle = index => {
    if (openQuestion === index) {
      return setOpen(null);
    }
    setOpen(index);
  }
  return (
    <FaqSection id='FAQs'>
      <h2>FAQs</h2>
      {FAQdata.map((item, index) => {
        const answer = item.answer;
        return (
          <>
          <Wrapper onClick={() => toggle(index)} key={index}>
            <p>{item.question}</p>
          </Wrapper>
          {
          openQuestion === index ? (
            <div className="hiddenAnswer">
              <p dangerouslySetInnerHTML={{ __html: answer }}></p>
            </div>
          ) : null
          }
          </>
        );
      })}

    </FaqSection>
  )
}

export default FAQ