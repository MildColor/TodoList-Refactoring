import { useMutation } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";
import { Todo } from "../../../types/todos";

export const useUpdateTodoMutation = () => {
  return useMutation({
    mutationFn: async (payload: Todo) => {
      return await todosApis.updateTodo(payload);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
