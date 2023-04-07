import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorage";
import { PAGE_PATH } from "../constants/path";

const AuthenticateRoute = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) => {
  const token = getLocalStorage("accessToken");
  if (isAuthenticated) {
    return token ? <Outlet /> : <Navigate to={PAGE_PATH.SIGN_IN} />;
  } else {
    return token ? <Navigate to={PAGE_PATH.HOME} /> : <Outlet />;
  }
};

export default AuthenticateRoute;
