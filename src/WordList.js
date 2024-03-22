import React from 'react';
import styled from "styled-components";
import words from './wrds.json'; // Import the JSON file

const WordListContainer = styled.div`
  direction: rtl; // Add this line
  overflow: auto; // Make it scrollable
  height: 50vh; // Adjust this value to fit your needs
  border: 1px solid #ccc; // Add a border to make it look like a frame
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Th = styled.th`
    border: 1px solid #ccc;
    padding: 10px;
`;

const Td = styled.td`
    border: 1px solid #ccc;
    padding: 10px;
`;

function WordList({ selectedLetter }) {
    if (!words) {
        return <div>Select a letter to see the words</div>;
    }

    const filteredWords = words.filter(word => word.hb.startsWith(selectedLetter));

    return (
        <WordListContainer>
            <Table>
                <thead>
                    <tr>
                        <Th>מילה</Th>
                        <Th>הגיה</Th>
                        <Th>תרגום</Th>
                        <Th>תדירות</Th>
                    </tr>
                </thead>
                <tbody>
                    {filteredWords.map((word, index) => (
                        <tr key={index}>
                            <Td>{word.hb}</Td>
                            <Td>{word.phn.join(", ")}</Td>
                            <Td>{word.eng.join(", ")}</Td>
                            <Td>{index + 1}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </WordListContainer>
    );
}

export default WordList;