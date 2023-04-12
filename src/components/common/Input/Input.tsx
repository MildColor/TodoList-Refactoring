import React, { InputHTMLAttributes } from "react";
import * as Style from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  title?: string;
  border?: string;
  errorMessage?: string;
}

export function Input({ ...props }: InputProps) {
  return <Style.Input {...props} />;
}

export function InputField({
  width,
  height,
  title,
  errorMessage,
  ...props
}: InputProps) {
  return (
    <Style.InputLayout width={width} height={height}>
      <Style.InputLabel>{title}</Style.InputLabel>
      <Style.Input height="60px" {...props} border="2px" />
      <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>
    </Style.InputLayout>
  );
}
