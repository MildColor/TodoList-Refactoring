import styled from "styled-components";
import { InputProps } from "./Input";
import { flexColumn } from "../../../styles/mixins";

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: ${(props) => `${props.border ?? "0rem"} solid gray`};
  box-shadow: 0rem 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  border: 0;
  outline: 0;
`;

export const InputLayout = styled.div<InputProps>`
  ${flexColumn}
  justify-content: space-evenly;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const InputLabel = styled.label<InputProps>`
  width: 100%;
  height: 2.5rem;
  line-height: 2.5rem;
`;

export const ErrorMessage = styled.span<InputProps>`
  width: 100%;
  height: 1.5rem;
  line-height: 1.5rem;
  color: ${(props) => props.theme.colors.red[0]};
`;
