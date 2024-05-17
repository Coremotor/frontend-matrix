import { IContent } from "../types.ts";
import { Cell } from "../ui/cell.ts";
import { Paragraph, Title } from "../ui/text.ts";
import { List, ListItem } from "../ui/list.ts";
import { Fragment } from "react";

interface IRowProps {
  content: IContent[];
  rowTitle: string;
}

export function Row({ content, rowTitle }: IRowProps) {
  return (
    <>
      <Cell>
        <Title>{rowTitle}</Title>
      </Cell>

      {content.map((item) => (
        <Cell key={item.grade}>
          {item.knowledge.map((knowledge) => (
            <Fragment key={knowledge.description}>
              <Paragraph>{knowledge.description}</Paragraph>

              {knowledge.details.length > 0 && (
                <List>
                  {knowledge.details.map((item) => (
                    <ListItem key={item}>{item}</ListItem>
                  ))}
                </List>
              )}
            </Fragment>
          ))}
        </Cell>
      ))}
    </>
  );
}
