import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";
import { onErrorType } from "../../../types/custom";

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: string) => {
      return await todosApis.deleteTodo(payload);
    },

    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
    },

    onError: (error: onErrorType) => {
      console.log(error);
      const { data, status } = error.response;
      if (
        status === 400 &&
        data.details === "todo를 찾는 도중 문제가 생겼습니다"
      ) {
        alert("todo를 찾는 도중 문제가 생겼습니다");
      }
    },
  });
};
