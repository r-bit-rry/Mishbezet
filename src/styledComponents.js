import styled from "styled-components";

const theme = {
  // background: "#333",
  text: "#fff",
  border: "#ccc",
  button: "#008B8B",
  input: "#333",
  familiar: "lightgreen",
  flashcard: "#0056b3",
};

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
        background-color: #757575;
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
    left: 10px;
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
    background-color: ${theme.familiar};
`;

export const SubmitButton = styled(Button)`
    background: ${theme.flashcard};
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
    background-color: #282c34;
    min-height: 100%;
    height: 100%;
    width: 100%;
    position: absolute;
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