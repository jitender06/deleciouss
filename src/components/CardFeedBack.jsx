import React, { useState } from "react";
import styled from "styled-components";

const CardFeedBack = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <FeedBackContainer>
        <SubContainer>
          <Faq>
            <span onClick={() => setShow(!show)}>{show ? "➖" : "➕"}</span>
            <h3>{question}</h3>
          </Faq>
          {show && (
            <FaqPara>
              <p>{answer}</p>
            </FaqPara>
          )}
        </SubContainer>
      </FeedBackContainer>
    </>
  );
};

export default CardFeedBack;

const FeedBackContainer = styled.div`
  /* height: 100vh; */
`;
const SubContainer = styled.div`
  margin: 1.5rem auto;
  max-width: 40rem;
`;
const Faq = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #00843c;
  padding: 0rem 2rem;

  span {
    cursor: pointer;
  }
  span,
  h3 {
    font-size: 1.5rem;
    color: #fff;
  }
`;
const FaqPara = styled.div`
  background-color: #00843c;
  /* max-width: 40rem; */
  margin: 0.2rem auto;

  padding: 1rem;
  p {
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: justify;
    color: #fff;
  }
`;
