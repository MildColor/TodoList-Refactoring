import { useQuery } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";
import { TODO_ALERTS } from "../../../constants/alerts";
import { onErrorType } from "../../../types/custom";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["getTodos"],

    queryFn: async () => {
      const {
        data: { data },
      } = await todosApis.getTodos();
      return data;
    },
    onError: (error: onErrorType) => {
      const { status } = error.response;
      if (status === 400) return alert(TODO_ALERTS.TODO_SOMETHING_WRONG);
    },
  });
};
