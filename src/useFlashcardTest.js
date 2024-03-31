import { useState } from "react";

export const useFlashcardTest = (words, familiarWords, setFamiliarWords) => {
  const [showFlashcard, setShowFlashcard] = useState(false);
  const [currentWord, setCurrentWord] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState(null);

  // ... other logic for handling the flashcard test ...

  return {
    showFlashcard,
    setShowFlashcard,
    currentWord,
    userInput,
    setUserInput,
    response,
    startFlashcardTest,
    handleSubmit,
  };
};