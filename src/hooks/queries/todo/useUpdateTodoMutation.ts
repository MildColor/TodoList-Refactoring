import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";
import { Todo } from "../../../types/todos";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Todo) => {
      return await todosApis.updateTodo(payload);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
