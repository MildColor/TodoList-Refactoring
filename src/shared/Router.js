import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import TodoList from "../pages/TodoList";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
