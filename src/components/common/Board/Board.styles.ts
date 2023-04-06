import styled from "styled-components";
import { BoardProps } from "./Board";

export const BoardFrame = styled.div<BoardProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  /* box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3); */
`;
export const BoardHeader = styled.div<BoardProps>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const BoardBody = styled.div<BoardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
