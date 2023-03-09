import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";
import { TodoInput } from "../../../types/todos";

export const usePostTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: TodoInput) => {
      return await todosApis.createTodo(payload);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
