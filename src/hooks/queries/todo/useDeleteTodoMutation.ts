import { useMutation } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";

export const useDeleteTodoMutation = () => {
  return useMutation({
    mutationFn: async (payload: string) => {
      return await todosApis.deleteTodo(payload);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
