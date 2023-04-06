import React from "react";
import type { FallbackProps } from "react-error-boundary";
import * as Style from "./ErrorPage.styles";

function ErrorPage({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <Style.ErrorMessageField>
      <span>Error: {error.message || "undefined Error"}</span>
      {/* <button onClick={resetErrorBoundary}>reset</button> */}
    </Style.ErrorMessageField>
  );
}

export default ErrorPage;
