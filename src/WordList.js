import React from "react";
import styled from "styled-components";
import words from "./wrds.json"; // Import the JSON file

const WordListContainer = styled.div`
    direction: rtl;
    border: 1px solid #ccc;
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

const TableBodyContainer = styled.div`
    overflow: auto;
    height: 50vh;
`;

function WordList({ selectedLetter }) {
    if (!words) {
        return <div>Select a letter to see the words</div>;
    }

    const filteredWords = words.filter((word) =>
        word.hb.startsWith(selectedLetter)
    );

    return (
        <WordListContainer>
            <Table>
                <thead>
                    <tr>
                        <Th style={{ width: "15%" }}>מילה</Th>
                        <Th style={{ width: "20%" }}>הגיה</Th>
                        <Th style={{ width: "55%" }}>תרגום</Th>
                        <Th style={{ width: "10%" }}>תדירות</Th>
                    </tr>
                </thead>
            </Table>
            <TableBodyContainer>
                <Table>
                    <tbody>
                        {filteredWords.map((word, index) => (
                            <tr key={index}>
                                <Td style={{ width: "15%" }}>{word.hb}</Td>
                                <Td style={{ width: "20%" }}>{word.phn.join(", ")}</Td>
                                <Td style={{ width: "55%" }}>{word.eng.join(", ")}</Td>
                                <Td style={{ width: "10%" }}>{index + 1}</Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableBodyContainer>
        </WordListContainer>
    );
}

export default WordList;