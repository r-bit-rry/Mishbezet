import { React, useState, useEffect } from "react";
import { ratio } from "fuzzball";
import LetterBar from "./LetterBar";
import WordList from "./WordList";
import words from "./wrds.json";
import {
  AppWrapper,
  DarkThemeContainer,
  FlashcardContainer,
  Flashcard,
  CloseButton,
  ButtonContainer,
  StyledButton,
  SubmitButton,
  TextInput,
  Modal,
} from "./styledComponents";

function App() {
  const [filteredWords, setFilteredWords] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [response, setResponse] = useState(null);
  const [isClearCacheModalOpen, setClearCacheModalOpen] = useState(false);
  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState("");
  useEffect(() => {
    if (selectedLetter) {
      const newFilteredWords = words.filter((word) =>
        word.hb.startsWith(selectedLetter)
      );
      setFilteredWords(newFilteredWords);
    }
  }, [selectedLetter]);
  const [familiarWords, setFamiliarWords] = useState(
    JSON.parse(localStorage.getItem("familiarWords")) || {}
  );

  useEffect(() => {
    localStorage.setItem("familiarWords", JSON.stringify(familiarWords));
  }, [familiarWords]);

  const openClearCacheModal = () => {
    setClearCacheModalOpen(true);
  };
  const GetQuizWord = ({ currentWord, familiarWords }) => {
    const capitalizeWords = (str) => {
      return (str || "")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    };

    return (
      <p>
        {capitalizeWords(
          currentWord.eng[
            (familiarWords[currentWord.hb] || 0) % currentWord.eng.length
          ]
        )}
      </p>
    );
  };
  const closeClearCacheModal = () => {
    setClearCacheModalOpen(false);
  };

  const clearFamiliarWords = () => {
    localStorage.removeItem("familiarWords");
    setFamiliarWords([]);
    closeClearCacheModal();
  };
  const toggleTableVisibility = () => {
    setSelectedLetter(null);
  };
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

const getWeightedRandomWord = (words, familiarWords) => {
  const totalWeight = words.reduce((total, word, index) => {
    const familiarity = familiarWords[word.hb] || 0;
    // Lower index (more common word) and less familiarity increases weight
    return total + (1 / (1 + familiarity)) * (1 / (1 + index));
  }, 0);

  let randomNum = Math.random() * totalWeight;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const familiarity = familiarWords[word.hb] || 0;
    const weight = (1 / (1 + familiarity)) * (1 / (1 + i));
    if (randomNum < weight) {
      return word;
    }
    randomNum -= weight;
  }

  // Fallback to last word if no word selected (should not happen in practice)
  return words[words.length - 1];
};


const handleSubmit = (event) => {
  event.preventDefault();
  let calculatedRatio = ratio(userInput, currentWord.hb);
  console.log(`Fuzzy match ratio: ${calculatedRatio}`);
  if (calculatedRatio > 80) {
    setResponse(
      <p style={{ backgroundColor: "green", color: "white" }}>
        Correct, the word is {currentWord.hb}
      </p>
    );
    setFamiliarWords({
      ...familiarWords,
      [currentWord.hb]: (familiarWords[currentWord.hb] || 0) + 1,
    });
  } else {
    setResponse(
      <p style={{ backgroundColor: "red", color: "white" }}>
        Incorrect, the correct answer was {currentWord.hb}
      </p>
    );
    if (familiarWords[currentWord.hb]) {
      setFamiliarWords({
        ...familiarWords,
        [currentWord.hb]: familiarWords[currentWord.hb] - 1,
      });
    }
  }
  setUserInput("");
  startFlashcardTest();
};
  const startFlashcardLetterTest = () => {
  const testWords = Array.from({ length: 10 }, () =>
    getWeightedRandomWord(words, familiarWords)
  );
    setCurrentWord(testWords[Math.floor(Math.random() * testWords.length)]);
    setShowFlashcard(true);
  };
  const startFlashcardTest = () => {
const testWords = Array.from({ length: 10 }, () =>
  getWeightedRandomWord(words, familiarWords)
);
    setCurrentWord(testWords[Math.floor(Math.random() * testWords.length)]);
    setShowFlashcard(true);
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <AppWrapper>
      <DarkThemeContainer>
        <img src="/logo192.png" alt="App logo" />
        <LetterBar onLetterClick={handleLetterClick} />
        <WordList
          selectedLetter={selectedLetter}
          filteredWords={filteredWords}
          familiarWords={familiarWords}
        />
        <ButtonContainer>
          <StyledButton onClick={startFlashcardTest}>
            Start Flashcard Test
          </StyledButton>
          <StyledButton
            onClick={startFlashcardLetterTest}
            disabled={selectedLetter === null}
          >
            Start Flashcard Test (Letter)
          </StyledButton>
          <StyledButton onClick={toggleTableVisibility}>
            {!!setSelectedLetter ? "Hide" : "Show"} Words Table
          </StyledButton>
          <StyledButton onClick={openClearCacheModal}>
            Clear Familiar Words
          </StyledButton>
        </ButtonContainer>
        {showFlashcard && (
          <FlashcardContainer>
            <Flashcard>
              <CloseButton onClick={() => setShowFlashcard(false)}>
                X
              </CloseButton>
              <GetQuizWord
                currentWord={currentWord}
                familiarWords={familiarWords}
              />
              <form onSubmit={handleSubmit}>
                <TextInput
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                />
                <SubmitButton type="submit">Submit</SubmitButton>
              </form>
              {response}
            </Flashcard>
          </FlashcardContainer>
        )}
        {isClearCacheModalOpen && (
          <Modal>
            <div>
              <h2>Are you sure?</h2>
              <p>This will clear all familiar words.</p>
              <StyledButton onClick={clearFamiliarWords}>
                Yes, clear
              </StyledButton>
              <StyledButton onClick={closeClearCacheModal}>
                No, cancel
              </StyledButton>
            </div>
          </Modal>
        )}
      </DarkThemeContainer>
    </AppWrapper>
  );
}

export default App;
