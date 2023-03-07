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

export const todosApis = {
  getTodos: async () => await api.get(`/todos`),
  getTodoById: async (payload: string | undefined) =>
    await api.get(`/todos/${payload}`),
  createTodo: async (payload: Todo) => await api.post(`/todos`, payload),
  deleteTodo: async (payload: string) => await api.delete(`/todos/${payload}`),
  updateTodo: async ({ title, content, id }: Todo) =>
    await api.put(`/todos/${id}`, { title: title, content: content, id: id }),
};
