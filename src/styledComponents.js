import styled, { createGlobalStyle, keyframes } from "styled-components";

export const theme = {
  background: "#333",
  text: "#fff",
  border: "#ccc",
  button: "#008B8B",
  input: "#333",
  familiar: "lightgreen",
  flashcard: "#0056b3",
  disabled: "#757575",
  transparent: "transparent",
  lightOrange: "#FFAD73",
};

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #282c34;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const App = styled.div`
  text-align: center;
`;

export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${(props) =>
    props.prefersReducedMotion ? "none" : `${AppLogoSpin} infinite 20s linear`};
`;

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLink = styled.a`
  color: #61dafb;
`;

const Container = styled.div`
  direction: rtl;
  background: ${theme.background};
  color: ${theme.text};
`;

const Button = styled.button`
  background-color: ${theme.button};
  border: none;
  color: ${theme.text};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  &:disabled {
    background-color: ${theme.disabled};
    cursor: not-allowed;
  }
`;

const TableElement = styled.td`
  border: 1px solid ${theme.border};
  padding: 10px;
`;

export const WordListContainer = styled(Container)`
  border: 1px solid ${theme.border};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled(TableElement)``;

export const Td = styled(TableElement)``;

export const TableBodyContainer = styled.div`
  overflow: auto;
  height: 50vh;
`;

export const FlashcardContainer = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Flashcard = styled(Container)`
  position: relative;
  background: ${theme.flashcard};
  padding: 20px;
  width: 300px;
  border: 1px solid ${theme.border};
  border-radius: 10px;
  text-align: left;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  font-size: 20px;
  padding: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StyledButton = styled(Button)``;

export const FamiliarTd = styled(Td)`
  background-color: ${(props) => {
    if (props.familiarity === 0) {
      return theme.transparent;
    } else if (props.familiarity === props.length) {
      return theme.familiar;
    } else if (props.familiarity > 0 && props.familiarity < props.length) {
      return theme.lightOrange;
    }
  }};
`;

export const SubmitButton = styled(Button)`
  background: ${theme.input};
  border-radius: 5px;
  padding: 10px 20px;
`;

export const TextInput = styled.input`
  padding: 10px;
  border: 1px solid ${theme.border};
  border-radius: 5px;
  margin-right: 10px;
  color: ${theme.input};
`;

export const DarkThemeButton = styled(Button)``;

export const LetterBarContainer = styled(Container)`
  width: fit-content;
  margin: auto;
`;

export const Modal = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background: #2f2f2f;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
  }
`;

export const AppWrapper = styled.div`
  min-height: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const DarkThemeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  margin: 10%;
  height: 80%;
`;
