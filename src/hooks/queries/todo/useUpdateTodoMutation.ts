import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";
import { Todo } from "../../../types/todos";
import { onErrorType } from "../../../types/custom";
import { TODO_ALERTS } from "../../../constants/alerts";

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: Todo) => {
      return await todosApis.updateTodo(payload);
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
