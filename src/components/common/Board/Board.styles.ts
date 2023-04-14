import styled from "styled-components";
import { BoardProps } from "./Board";
import { flexColumn, flexRow } from "../../../styles/mixins";

export const BoardFrame = styled.div<BoardProps>`
  ${flexColumn};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
`;
export const BoardHeader = styled.div<BoardProps>`
  ${({ direction }) => (direction === "column" ? flexColumn : flexRow)};
  align-items: center;
  justify-content: space-evenly;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0 auto;
`;

export const BoardBody = styled.div<BoardProps>`
  ${({ direction }) => (direction === "column" ? flexColumn : flexRow)};

  // switch 문 사용시 ts 오류
  /* ${({ direction }) => {
    switch (direction) {
      case "column":
        return flexColumn;
      case "row":
        return flexRow;
      default:
        return flexColumn;
    }
  }}; */
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0 auto;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
  background-color: white;
  border-radius: 10px;
`;
