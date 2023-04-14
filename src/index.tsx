"use client";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyle from "./styles/globalStyle";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Layout from "./components/common/Layout/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Layout>
        <App />
      </Layout>
    </ThemeProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);
