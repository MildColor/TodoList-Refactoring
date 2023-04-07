import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import TodoDetail from "../pages/TodoDetail";
import { PAGE_PATH } from "../constants/path";
import AuthHOC from "../components/HOC/AuthHOC";
import NotFound from "../pages/NotFound";
import AuthenticateRoute from "./AuthenticateRoute";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_PATH.NOT_FOUND} element={<NotFound />} />
        <Route element={<AuthenticateRoute isAuthenticated={false} />}>
          <Route path={PAGE_PATH.SIGN_IN} element={<SignIn />} />
          <Route path={PAGE_PATH.SIGN_UP} element={<SignUp />} />
        </Route>
        <Route element={<AuthenticateRoute isAuthenticated={true} />}>
          <Route path={PAGE_PATH.HOME} element={<Home />} />
          <Route path={PAGE_PATH.TODO_DETAIL(":id")} element={<TodoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
