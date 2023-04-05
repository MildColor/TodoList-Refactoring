import React from "react";
import type { FallbackProps } from "react-error-boundary";

function ErrorPage({ error, resetErrorBoundary }: FallbackProps) {
  console.log("error", error);
  return (
    <div>
      <div>Error: {error.message || "undefined Error"}</div>
      <button onClick={resetErrorBoundary}>reset</button>
    </div>
  );
}

export default ErrorPage;
