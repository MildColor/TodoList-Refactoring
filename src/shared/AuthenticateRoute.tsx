import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorage } from "../utils/localStorage";
import { PAGE_PATH } from "../constants/path";
import { ACCESS_TOKEN_KEY } from "../constants/token";

const AuthenticateRoute = ({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) => {
  const token = getLocalStorage(ACCESS_TOKEN_KEY);
  if (isAuthenticated) {
    return token ? <Outlet /> : <Navigate to={PAGE_PATH.SIGN_IN} />;
  } else {
    return token ? <Navigate to={PAGE_PATH.HOME} /> : <Outlet />;
  }
};

export default AuthenticateRoute;
