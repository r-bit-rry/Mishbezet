import React, { useState } from "react";
import LetterBar from "./LetterBar";
import WordList from "./WordList";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: #282c34;
  min-height: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const DarkThemeContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  text-align: right;
  margin: 10%;
  height: 80%;
`;

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <AppWrapper>
      <DarkThemeContainer>
        <LetterBar onLetterClick={handleLetterClick} />
        <WordList selectedLetter={selectedLetter} />
      </DarkThemeContainer>
    </AppWrapper>
  );
}

export default App;
