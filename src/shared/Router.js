import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import TodoDetail from "../pages/TodoDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
