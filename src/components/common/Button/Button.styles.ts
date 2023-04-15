import styled from "styled-components";
import { ButtonProps } from "./Button";

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${({ theme, color }) => {
    const colors = {
      primary: "white",
      secondary: theme.colors.blue[5],
      warning: theme.colors.red[3],
    };
    return colors[color ?? "primary"];
  }};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
  text-align: center;
`;
