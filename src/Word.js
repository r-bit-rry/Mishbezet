import React from "react";
import styled from "styled-components";

const DarkThemeWord = styled.div`
  background-color: #282c34;
  color: white;
  border: 1px solid #61dafb;
  padding: 10px;
  margin: 10px;
`;

function Word({ word, details }) {
  return (
    <DarkThemeWord>
      <h2>{word}</h2>
      <p>{details.description}</p>
      <p>{details.usage}</p>
    </DarkThemeWord>
  );
}

export default Word;
