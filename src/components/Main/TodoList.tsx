import React from "react";
import styled from "styled-components";
import { useGetTodos } from "../../hooks/queries/todo/useGetTodos";
import { Todo } from "../../types/todos";
import TodoDetail from "./TodoDetail";

function TodoList() {
  const { data: getTodosDatas } = useGetTodos();

  return (
    <TodoListSection>
      {getTodosDatas?.data?.data.map((todo: Todo) => {
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
