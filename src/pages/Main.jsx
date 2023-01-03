import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import CreateTodoForm from "../components/Main/CreateTodoForm";
import TodoList from "../components/Main/TodoList";
import { getAccessToken } from "../utils";

function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken();
    if (token === undefined || token === null || token === "") {
      return navigate(`/auth/login`);
    }
  }, []);

  return (
    <Layout>
      <Container>
        <CreateTodoForm />
        <TodoList />
      </Container>
    </Layout>
  );
}

export default Main;

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 550px;
  height: 800px;
`;
