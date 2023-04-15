import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";
import { onErrorType } from "../../../types/custom";
import { TODO_ALERTS } from "../../../constants/alerts";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../../constants/path";

export const useDeleteTodoMutation = () => {
  const navigation = useNavigate();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: string) => {
      return await todosApis.deleteTodo(payload);
    },

    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({ queryKey: ["getTodos"] });
      navigation(PAGE_PATH.HOME);
    },

    onError: (error: onErrorType) => {
      const { status } = error.response;
      if (status === 400) return alert(TODO_ALERTS.FAIL_GET_TODO);
    },
  });
};
