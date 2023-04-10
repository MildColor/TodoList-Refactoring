import { useQuery } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["getTodos"],

    queryFn: async () => {
      return await todosApis.getTodos();
    },
  });
};
