import axios from "axios";
import { SignInForm } from "../types/signIn";
import { SignUpForm } from "../types/signUp";
import { Todo, TodoInput } from "../types/todos";
import { getAccessToken } from "../utils";

const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: "",
  },
};

export const api = axios.create(config);

api.interceptors.request.use(function (config) {
  const accessToken = getAccessToken();
  if (!accessToken) return config;

  config.headers = { Authorization: accessToken };
  return config;
});
