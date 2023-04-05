import React from "react";
import styled from "styled-components";
import { useGetTodos } from "../../hooks/queries/todo/useGetTodos";
import { Todo } from "../../types/todos";
import TodoDetail from "./TodoDetail";

function TodoList() {
  const { data: getTodosDatas } = useGetTodos();
  return (
    <TodoListSection>
      {getTodosDatas?.data?.data.reverse().map((todo: Todo) => {
        return <TodoDetail key={todo.id} todo={todo} />;
      })}
    </TodoListSection>
  );
}

export default TodoList;

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 600px;

  overflow-y: auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;
