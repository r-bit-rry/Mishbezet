import { React, useState, useEffect } from "react";
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
    JSON.parse(localStorage.getItem("familiarWords")) || []
  );
  useEffect(() => {
    localStorage.setItem("familiarWords", JSON.stringify(familiarWords));
  }, [familiarWords]);

  const openClearCacheModal = () => {
    setClearCacheModalOpen(true);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput === currentWord.hb) {
      setResponse("Correct!");
      if (!familiarWords.includes(currentWord.hb)) {
        setFamiliarWords([...familiarWords, currentWord.hb]);
      }
    } else {
      setResponse(`Incorrect, the correct answer was ${currentWord.hb}`);
      if (familiarWords.includes(currentWord.hb)) {
        setFamiliarWords(
          familiarWords.filter((word) => word !== currentWord.hb)
        );
      }
    }
    setUserInput("");
    startFlashcardTest();
  };
  const startFlashcardLetterTest = () => {
    const testWords = filteredWords
      .map((word) => ({
        ...word,
        isFamiliar: familiarWords.includes(word.hb),
      }))
      .sort((a, b) => 0.2 * a.isFamiliar - 0.2 * b.isFamiliar)
      .slice(0, 10);
    setCurrentWord(testWords[Math.floor(Math.random() * testWords.length)]);
    setShowFlashcard(true);
  };
  const startFlashcardTest = () => {
    const testWords = words
      .map((word) => ({
        ...word,
        isFamiliar: familiarWords.includes(word.hb),
      }))
      .sort((a, b) => 0.2 * a.isFamiliar - 0.2 * b.isFamiliar)
      .slice(0, 10);
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
              <p>{currentWord.eng.join(", ")}</p>
              <form onSubmit={handleSubmit}>
                <TextInput
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                />
                <SubmitButton type="submit">Submit</SubmitButton>
              </form>
              {response && <p>{response}</p>}
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
