import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { todosApis } from "../../api/axiosConfig";
import { Todo, TodoInput } from "../../types/todos";

function TodoDetail({ todo }: { todo: Todo }) {
  const queryClient = useQueryClient();
  const [isEdit, setIsEdit] = useState(false);
  const [inputValues, setInputValues] = useState<TodoInput>({
    title: todo.title,
    content: todo.content,
  });

  //삭제
  const { mutate: deleteTodoMutate } = useMutation(
    async (values: string) => {
      try {
        const response = await todosApis.deleteTodo(values);
        return response;
      } catch (error) {
        // const { status, data } = error.response;
      }
    },
    {
      onSuccess: (data) => {
        console.log("success", data);
      },
      onError: (error) => {
        throw error;
      },
    }
  );

  //수정
  const { mutate: updateTodoMutate } = useMutation(
    async (values: Todo) => {
      try {
        const response = await todosApis.updateTodo(values);
        return response;
      } catch (error) {
        // const { status, data } = error.response;
      }
    },
    {
      onSuccess: (data) => {
        //update후에 get 다시 실행
        // queryClient.invalidateQueries("getTodosData");
      },
      onError: (error) => {
        throw error;
      },
    }
  );

  const deleteHandler = () => {
    const confirm = window.confirm("정말삭제하시겠습니까?");
    if (confirm) {
      return deleteTodoMutate(todo.id);
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = todo.id;
    if (inputValues.title.trim() === "" || inputValues.content.trim() === "") {
      return alert("빈칸을 채워주세요");
    }
    updateTodoMutate({ ...inputValues, id });
    setIsEdit(false);
  };

  return (
    <StTodoDiv>
      {!isEdit ? (
        <TextBox>
          <Link to={`/todo/${todo.id}`}>
            <h3>{todo.title}</h3>
            <span>{todo.content}</span>
          </Link>
        </TextBox>
      ) : (
        <TextBox>
          <form onSubmit={onSubmitHandler} id="edit-todo">
            <div>
              <label htmlFor="title">제목</label>
              <input
                type="title"
                id="title"
                name="title"
                value={inputValues.title}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <label htmlFor="content">내용</label>
              <input
                type="content"
                id="content"
                name="content"
                value={inputValues.content}
                onChange={onChangeHandler}
              />
            </div>
          </form>
        </TextBox>
      )}
      <BtnBox>
        {!isEdit ? (
          <button type="button" onClick={deleteHandler}>
            삭제
          </button>
        ) : (
          <button type="submit" form="edit-todo">
            수정완료
          </button>
        )}
        <button type="button" onClick={() => setIsEdit(!isEdit)}>
          {!isEdit ? "수정" : "수정취소"}
        </button>
      </BtnBox>
    </StTodoDiv>
  );
}

export default TodoDetail;

const StTodoDiv = styled.div`
  display: flex;
  width: 450px;
  height: 100px;
  align-items: center;
  border: 1px solid black;
  padding: 0 20px;
  margin: 10px 0;
`;
const TextBox = styled.div`
  width: 380px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  h3 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
`;
const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  right: 0;
`;
