import { useQuery } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";

export const useGetTodoById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["getTodoById", id],
    queryFn: async () => {
      return await todosApis.getTodoById(id);
    },
  });
};
