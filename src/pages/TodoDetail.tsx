import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header/Header";
import { useGetTodoById } from "../hooks/queries/todo/useGetTodoById";
import {
  BoardBody,
  BoardFrame,
  BoardHeader,
} from "../components/common/Board/Board";
import Button from "../components/common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowLeft } from "@fortawesome/free-solid-svg-icons";

function TodoDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: getTodoByIdData } = useGetTodoById(id);
  const { title, content, createdAt, updatedAt } = getTodoByIdData?.data.data;

  return (
    <>
      <BoardFrame height="720px">
        <BoardHeader>
          <Header title="Detail" />
        </BoardHeader>
        <BoardBody height="640px">
          <StDiv>
            <h1>Title: {title}</h1>
            <p>Content: {content}</p>
            <p>createdAt: {createdAt.slice(0, 10)}</p>
            <p>updatedAt: {updatedAt.slice(0, 10)}</p>
          </StDiv>
          <Button onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faLongArrowLeft} />
          </Button>
        </BoardBody>
      </BoardFrame>
    </>
  );
}

export default TodoDetail;

const StDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 300px;
  padding: 50px;
  border-radius: 30px;
  margin: 30px 0;
  background-color: white;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);

  h1 {
    font-size: 20px;
    font-weight: bold;
  }

  * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
`;
