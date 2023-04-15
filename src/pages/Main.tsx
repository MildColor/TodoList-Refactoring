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
import VerticalLine from "../components/common/VerticalLine/VerticalLine";

function Main() {
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

export default Main;
