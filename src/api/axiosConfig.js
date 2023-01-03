import axios from "axios";
import { getAccessToken } from "../utils";

const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    Authorization: "",
  },
};

const api = axios.create(config);

api.interceptors.request.use(function (config) {
  const accessToken = getAccessToken();

  if (!config) {
    config = {};
  }
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = accessToken;
  return config;
});

export const memberApis = {
  // 회원가입
  signUp: async (payload) => await api.post(`users/create`, payload),

  // 로그인
  login: async (payload) => await api.post(`users/login`, payload),
};

export const todosApis = {
  getTodos: async () => await api.get(`/todos`),
  getTodoById: async (payload) => await api.get(`/todos/${payload}`),
  createTodo: async (payload) => await api.post(`/todos`, payload),
  deleteTodo: async (payload) => await api.delete(`/todos/${payload}`),
  updateTodo: async ({ inputValues, id }) =>
    await api.put(`/todos/${id}`, inputValues),
};
