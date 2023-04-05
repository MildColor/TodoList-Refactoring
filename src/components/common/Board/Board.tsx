import React from "react";
import * as Style from "./Board.styles";

export interface BoardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
}

export function BoardFrame({
  width = "100%",
  height = "700px",
  children,
  ...props
}: BoardProps) {
  return (
    <Style.BoardFrame width={width} height={height} {...props}>
      {children}
    </Style.BoardFrame>
  );
}

export function BoardHeader({
  width = "100%",
  height = "80px",
  children,
  ...props
}: BoardProps) {
  return (
    <Style.BoardHeader width={width} height={height} {...props}>
      {children}
    </Style.BoardHeader>
  );
}

export function BoardBody({
  width = "100%",
  height = "620px",
  children,
  ...props
}: BoardProps) {
  return (
    <Style.BoardBody width={width} height={height} {...props}>
      {children}
    </Style.BoardBody>
  );
}
