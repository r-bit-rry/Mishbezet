import React from "react";
import styled from "styled-components";

const letters = [
  "א",
  "ב",
  "ג",
  "ד",
  "ה",
  "ו",
  "ז",
  "ח",
  "ט",
  "י",
  "כ",
  "ל",
  "מ",
  "נ",
  "ס",
  "ע",
  "פ",
  "צ",
  "ק",
  "ר",
  "ש",
  "ת",
]; // Add all Hebrew letters

const DarkThemeButton = styled.button`
  background-color: #61dafb;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
`;

const LetterBarContainer = styled.div`
  direction: rtl; // Add this line
  width: fit-content;
  margin: auto;
`;

function LetterBar({ onLetterClick }) {
  return (
    <LetterBarContainer>
      {letters.map((letter) => (
        <DarkThemeButton key={letter} onClick={() => onLetterClick(letter)}>
          {letter}
        </DarkThemeButton>
      ))}
    </LetterBarContainer>
  );
}

export default LetterBar;
