import React from "react";
import * as Style from "./Board.styles";

export interface BoardProps {
  width?: string;
  height?: string;
  direction?: "column" | "row" | undefined;
  children?: React.ReactNode;
}

export function BoardFrame({
  width = "100%",
  height = "70rem",
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
  height = "80rem",
  direction = "column",
  children,
  ...props
}: BoardProps) {
  return (
    <Style.BoardHeader
      width={width}
      height={height}
      direction={direction}
      {...props}
    >
      {children}
    </Style.BoardHeader>
  );
}

export function BoardBody({
  width = "100%",
  height = "62rem",
  direction = "column",
  children,
  ...props
}: BoardProps) {
  return (
    <Style.BoardBody
      width={width}
      height={height}
      direction={direction}
      {...props}
    >
      {children}
    </Style.BoardBody>
  );
}
