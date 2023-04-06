import styled from "styled-components";
import { InputProps } from "./Input";

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0 10px;
  border-radius: 5px;
  border: 0px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);

  :active {
    border: 0px;
  }
`;
