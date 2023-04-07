import React, { ButtonHTMLAttributes } from "react";
import * as Style from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  color?: "primary" | "warning";
  children?: React.ReactNode;
}

function Button({
  width = "30px",
  height = "30px",
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
