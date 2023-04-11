import axios from "axios";
import { getLocalStorage, removeLocalStorage } from "../utils/localStorage";
import { PAGE_PATH } from "../constants/path";
import { ACCESS_TOKEN_KEY } from "../constants/token";
import { TODO_ALERTS } from "../constants/alerts";

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
  const accessToken = getLocalStorage(ACCESS_TOKEN_KEY);
  if (!accessToken) return config;

  config.headers = { Authorization: accessToken };
  return config;
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (
      error?.response?.status === 400 &&
      error?.response?.data?.details === "Token is missing"
    ) {
      removeLocalStorage("token");
      window.alert(TODO_ALERTS.INVALID_TOKEN);
      return window.location.assign(PAGE_PATH.SIGN_IN);
    }

    return Promise.reject(error);
  }
);
