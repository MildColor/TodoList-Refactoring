import { useQuery } from "@tanstack/react-query";
import { todosApis } from "../../../api/todo";
import { TODO_ALERTS } from "../../../constants/alerts";
import { onErrorType } from "../../../types/custom";

export const useGetTodoById = (id: string | undefined) => {
  return useQuery({
    queryKey: ["getTodoById", id],

    queryFn: async () => {
      const {
        data: { data },
      } = await todosApis.getTodoById(id);
      return data;
    },
    onError: (error: onErrorType) => {
      const { status } = error.response;
      if (status === 400) return alert(TODO_ALERTS.TODO_SOMETHING_WRONG);
    },
  });
};
