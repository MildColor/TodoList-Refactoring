import React, { InputHTMLAttributes } from "react";
import * as Style from "./Input.styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  height?: string;
  title?: string;
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
      <Style.InputTitle>{title}</Style.InputTitle>
      <Style.Input height="30px" {...props} />
      <Style.ErrorMessage>{errorMessage}</Style.ErrorMessage>
    </Style.InputLayout>
  );
}
