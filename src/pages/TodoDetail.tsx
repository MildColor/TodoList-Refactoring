import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useGetTodoById } from "../hooks/queries/todo/useGetTodoById";

function TodoDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: getTodoByIdData } = useGetTodoById(id);

  return (
    <Container>
      <Header title="Detail" />
      <StDiv>
        <h3>Title: {getTodoByIdData?.data?.data.title}</h3>
        <p>Content: {getTodoByIdData?.data?.data.content}</p>
        <p>createdAt: {getTodoByIdData?.data?.data.createdAt}</p>
        <p>updatedAt: {getTodoByIdData?.data?.data.updatedAt}</p>
      </StDiv>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </Container>
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
  margin: 30px 0;
  * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
`;
const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
