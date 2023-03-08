import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { todosApis } from "../../../api/todo";
import { Todo } from "../../../types/todos";

export const usePostTodoMutation = () => {
  return useMutation({
    mutationFn: async (payload: Todo) => {
      return await todosApis.createTodo(payload);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e);
    },
  });
};
