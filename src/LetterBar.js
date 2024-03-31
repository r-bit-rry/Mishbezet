import React from "react";
import { DarkThemeButton, LetterBarContainer } from "./styledComponents";

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
