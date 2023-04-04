import axios from "axios";
import { getLocalStorage, removeLocalStorage } from "../utils/localStorage";
import { PAGE_PATH } from "../constants/path";

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
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { status, data } = error.response;
    const { details } = data;
    if (status === 400 && details === "Token is missing") {
      removeLocalStorage("token");
      window.alert("유효한 토큰이 없습니다. 로그인 해주세요.");
      return window.location.assign(PAGE_PATH.SIGN_IN);
    }
    return Promise.reject(error);
  }
);
