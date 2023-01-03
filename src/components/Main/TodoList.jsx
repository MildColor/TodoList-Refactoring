import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { todosApis } from "../../api/axiosConfig";
import { getUserId } from "../../utils";
import Todo from "./Todo";

function TodoList() {
  const userId = getUserId();

  const {
    data: getTodosData,
    isLoading,
    error,
  } = useQuery(
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

  console.log(getTodosData);
  return (
    <TodoListSection>
      {getTodosData?.data?.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </TodoListSection>
  );
}

export default TodoList;

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
