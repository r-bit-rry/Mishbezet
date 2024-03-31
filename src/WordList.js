import React from "react";
import words from "./wrds.json";
import {
  WordListContainer,
  Table,
  Th,
  Td,
  TableBodyContainer,
  FamiliarTd,
} from "./styledComponents";

function WordList({ selectedLetter, filteredWords, familiarWords}) {
  if (!words) {
    return <div>Select a letter to see the words</div>;
  }

  return (
    <WordListContainer>
      {selectedLetter !== null && (
        <div>
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
                {filteredWords.map((word, index) => {
                  const isFamiliar = familiarWords.includes(word.hb);
                  return (
                    <tr key={index}>
                      <Td style={{ width: "15%" }}>{word.hb}</Td>
                      <Td style={{ width: "20%" }}>{word.phn.join(", ")}</Td>
                      {isFamiliar ? (
                        <FamiliarTd style={{ width: "55%" }}>
                          {word.eng.join(", ")}
                        </FamiliarTd>
                      ) : (
                        <Td style={{ width: "55%" }}>{word.eng.join(", ")}</Td>
                      )}
                      <Td style={{ width: "10%" }}>{index + 1}</Td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </TableBodyContainer>
        </div>
      )}
    </WordListContainer>
  );
}

export default WordList;
