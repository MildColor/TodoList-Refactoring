import styled from "styled-components";
import { BoardProps } from "./Board";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const BoardFrame = styled.div<BoardProps>`
  ${flexColumn};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  /* box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3); */
`;
export const BoardHeader = styled.div<BoardProps>`
  ${({ direction }) => (direction === "column" ? flexColumn : flexRow)};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const BoardBody = styled.div<BoardProps>`
  ${flexColumn};
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
