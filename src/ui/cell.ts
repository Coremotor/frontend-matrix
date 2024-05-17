import styled from "styled-components";

export const Cell = styled.div`
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px;

  &:nth-child(13n + 1) {
    border-left: 1px solid black;
    position: sticky;
    left: 0;
    background-color: lightgray;
  }

  &:nth-child(-n + 13) {
    border-top: 1px solid black;
    position: sticky;
    top: 0;
    background-color: lightgray;
  }

  &:first-child {
    z-index: 100;
  }
`;
