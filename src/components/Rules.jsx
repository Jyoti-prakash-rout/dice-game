import React from "react";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game?</h2>
      <p>Select any number</p>
      <p>Click on the dice</p>
      <p>
        After click on the dice if selected number is equal to to dice number
        you'll get same point as dice
      </p>
      <p>If you get wrong guess then 2 point will be deducted</p>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div` 
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  margin-top: 40px;
  padding: 20px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
