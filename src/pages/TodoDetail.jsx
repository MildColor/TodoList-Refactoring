import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { todosApis } from "../api/axiosConfig";
import Layout from "../components/Layout/Layout";
import { getAccessToken } from "../utils";

function TodoDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const token = getAccessToken();
    if (token === undefined || token === null || token === "") {
      return navigate(`/auth/login`);
    }
  }, []);

  const {
    data: getTodoByIdData,
    isLoading,
    error,
  } = useQuery(
    ["getTodoById", id],
    async ({ queryKey }) => {
      try {
        const response = await todosApis.getTodoById(queryKey[1]);
        return response;
      } catch (error) {
        const { status, data } = error.response;
        alert(data.details);
        navigate(-1);
      }
    },
    {
      onSuccess: (data) => {},
      onError: (error) => {
        throw error;
      },
    }
  );

  console.log(getTodoByIdData?.data?.data);
  return (
    <Layout>
      <StDiv>
        <h3>Title: {getTodoByIdData?.data?.data.title}</h3>
        <p>Content: {getTodoByIdData?.data?.data.content}</p>
        <p>createdAt: {getTodoByIdData?.data?.data.createdAt}</p>
        <p>updatedAt: {getTodoByIdData?.data?.data.updatedAt}</p>
      </StDiv>
    </Layout>
  );
}

export default TodoDetail;

const StDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  height: 400px;
  border: 1px solid black;
  padding: 20px;
  border-radius: 30px;
  * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
`;
