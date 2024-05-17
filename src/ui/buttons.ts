import styled from "styled-components";

export const Button = styled.button<{ $active?: boolean }>`
  padding: 10px;
  cursor: pointer;
  background-color: ${(props) => props.$active && "lightblue"};
`;
