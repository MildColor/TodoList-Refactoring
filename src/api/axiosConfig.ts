import axios from "axios";
import { getLocalStorage } from "../utils/localStorage";

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
  const accessToken = getLocalStorage("accessToken");
  if (!accessToken) return config;

  config.headers = { Authorization: accessToken };
  return config;
});
