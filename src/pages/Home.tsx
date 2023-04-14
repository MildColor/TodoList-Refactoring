import React, { Suspense } from "react";
import Header from "../components/common/Header/Header";
import TodoForm from "../components/Main/TodoForm";
import TodoList from "../components/Main/TodoList";
import {
  BoardBody,
  BoardFrame,
  BoardHeader,
} from "../components/common/Board/Board";
import { Outlet } from "react-router";
import styled from "styled-components";

function Home() {
  return (
    <BoardFrame height="720px">
      <BoardHeader height="120px">
        <Header title="TODO" />
        <TodoForm />
      </BoardHeader>
      <BoardBody height="600px" direction="row">
        <TodoList />
        <VerticalLine />
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </BoardBody>
    </BoardFrame>
  );
}

export default Home;

const VerticalLine = styled.div`
  width: 3px;
  height: 100%;
  background-image: ${({ theme }) => theme.gradients.RainyAshville};
`;
