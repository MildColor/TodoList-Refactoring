import { Todo, TodoInput } from "../types/todos";
import { api } from "./axiosConfig";

export const todosApis = {
  getTodos: async () => await api.get(`/todos`),

  getTodoById: async (payload: string | undefined) =>
    await api.get(`/todos/${payload}`),

  createTodo: async (payload: TodoInput) => await api.post(`/todos`, payload),

  deleteTodo: async (payload: string) => await api.delete(`/todos/${payload}`),

  updateTodo: async ({ title, content, id }: Todo) =>
    await api.put(`/todos/${id}`, { title: title, content: content, id: id }),
};
