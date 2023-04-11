import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";
import { TodoInput } from "../../../types/todos";
import { onErrorType } from "../../../types/custom";
import { TODO_ALERTS } from "../../../constants/alerts";

export const usePostTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: TodoInput) => {
      return await todosApis.createTodo(payload);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },
    onError: (error: onErrorType) => {
      const { status } = error.response;
      if (status === 400) return alert(TODO_ALERTS.TODO_SOMETHING_WRONG);
    },
  });
};
