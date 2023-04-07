import styled from "styled-components";
import { InputProps } from "./Input";
import { flexColumn } from "../../../styles/mixins";

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

export const InputLayout = styled.div<InputProps>`
  ${flexColumn}
  justify-content: space-evenly;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const InputTitle = styled.span<InputProps>`
  width: 100%;
  height: 25px;
  line-height: 25px;
`;

export const ErrorMessage = styled.span<InputProps>`
  width: 100%;
  height: 15px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.red[0]};
`;
