import React from "react";
import styled from "styled-components";
import { useGetTodos } from "../../hooks/queries/todo/useGetTodos";
import { Todo } from "../../types/todos";
import TodoLine from "./TodoLine";
import { flexColumn } from "../../styles/mixins";

function TodoList() {
  const { data: getTodosDatas } = useGetTodos();

  return (
    <>
      {getTodosDatas?.length === 0 ? (
        <TodoListUl justifyContent="center">Empty TodoList!</TodoListUl>
      ) : (
        <TodoListUl>
          {getTodosDatas.map((todo: Todo) => {
            return <TodoLine key={todo.id} todo={todo} />;
          })}
        </TodoListUl>
      )}
    </>
  );
}

export default TodoList;

const TodoListUl = styled.ul<{ justifyContent?: string }>`
  ${flexColumn};
  align-items: center;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  margin: 0 auto;
  width: 100%;
  height: 590px;
  text-align: center;

  overflow-y: auto;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background-image: ${({ theme }) =>
      theme.gradients.RainyAshville}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    /* background: rgba(33, 122, 244, 0.1);  */
    /*스크롤바 뒷 배경 색상*/
  }
`;
