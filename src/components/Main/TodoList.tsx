import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { todosApis } from "../../api/todo";
import { Todo, TodosReadSuccess } from "../../types/todos";
import { getUserId } from "../../utils";
import TodoDetail from "./TodoDetail";

function TodoList() {
  const userId = getUserId();

  const {
    data: getTodosData,
    isLoading,
    error,
  } = useQuery<TodosReadSuccess>(
    ["getTodosData"],
    async () => {
      try {
        const { data } = await todosApis.getTodos();
        return data;
      } catch (error) {}
    },
    {
      onSuccess: (data) => {},
      onError: (error) => {
        throw error;
      },
    }
  );

  return (
    <TodoListSection>
      {getTodosData?.data?.map((todo: Todo) => {
        return <TodoDetail key={todo.id} todo={todo} />;
      })}
    </TodoListSection>
  );
}

export default TodoList;

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* overflow-y: scroll; */
`;
