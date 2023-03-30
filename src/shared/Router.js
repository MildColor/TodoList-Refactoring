import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import TodoDetail from "../pages/TodoDetail";
import { PAGE_PATH } from "../constants/path";
import AuthHOC from "../components/HOC/AuthHOC";

function Router() {
  const AuthHome = AuthHOC(Home);
  const AuthTodoDetail = AuthHOC(TodoDetail);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_PATH.HOME} element={<AuthHome />} />
        <Route path={PAGE_PATH.SIGN_IN} element={<SignIn />} />
        <Route path={PAGE_PATH.SIGN_UP} element={<SignUp />} />
        <Route
          path={PAGE_PATH.TODO_DETAIL(":id")}
          element={<AuthTodoDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
