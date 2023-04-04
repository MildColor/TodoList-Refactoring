import styled from "styled-components";
import { ButtonProps } from "./Button";

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme }) => theme.colors.RainyAshville[1]};
  border-radius: 17px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
`;
