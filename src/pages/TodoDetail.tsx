import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetTodoById } from "../hooks/queries/todo/useGetTodoById";
import { flexColumn } from "../styles/mixins";

function TodoDetail() {
  const { id } = useParams();
  console.log(id);
  const { data: getTodoByIdData } = useGetTodoById(id);
  const { title, content, createdAt, updatedAt } = getTodoByIdData;

  return (
    <DetailContainer>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>createdAt: {createdAt.slice(0, 10) + " " + createdAt.slice(11, 19)}</p>
      <p>updatedAt: {updatedAt.slice(0, 10) + " " + updatedAt.slice(11, 19)}</p>
    </DetailContainer>
  );
}

export default TodoDetail;

const DetailContainer = styled.div`
  ${flexColumn}
  justify-content: space-evenly;
  width: 54rem;
  height: 100%;
  padding: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }

  p:nth-child(2) {
    height: 46rem;
  }

  * {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;
