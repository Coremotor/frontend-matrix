import { Row } from "./components/row.tsx";
import { Table } from "./ui/table.ts";
import { Title } from "./ui/text.ts";
import { knowledgeContent } from "./content/knowledgeContent.ts";
import { performanceContent } from "./content/performanceContent.ts";
import { Cell } from "./ui/cell.ts";
import { useState } from "react";
import { Buttons } from "./ui/layouts.ts";
import { Button } from "./ui/buttons.ts";
import { titles } from "./content/titles.ts";

function App() {
  const [tableState, setTableState] = useState({
    content: knowledgeContent,
  });

  const setKnowledgeContent = () =>
    setTableState({ content: knowledgeContent });
  const setPerformanceContent = () =>
    setTableState({ content: performanceContent });

  return (
    <>
      <Table>
        <Cell>
          <Buttons>
            <Button
              $active={tableState.content === knowledgeContent}
              onClick={setKnowledgeContent}
            >
              Knowledge
            </Button>
            <Button
              $active={tableState.content === performanceContent}
              onClick={setPerformanceContent}
            >
              Performance
            </Button>
          </Buttons>
        </Cell>

        {titles.map((title) => (
          <Cell key={title}>
            <Title>{title}</Title>
          </Cell>
        ))}

        {tableState.content.map((item) => (
          <Row
            key={item.rowTitle}
            rowTitle={item.rowTitle}
            content={item.content}
          />
        ))}
      </Table>
    </>
  );
}

export default App;
