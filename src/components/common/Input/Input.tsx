import React, { InputHTMLAttributes } from "react";
import * as Style from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

function Input({ ...props }: InputProps) {
  return <Style.Input {...props} />;
}

export default Input;
