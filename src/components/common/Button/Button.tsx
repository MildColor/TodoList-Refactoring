import React, { ButtonHTMLAttributes } from "react";
import * as Style from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  color?: "primary" | "secondary" | "warning";
  children?: React.ReactNode;
}

function Button({
  width = "3rem",
  height = "3rem",
  color = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <Style.Button width={width} height={height} color={color} {...props}>
      {children}
    </Style.Button>
  );
}

export default Button;
