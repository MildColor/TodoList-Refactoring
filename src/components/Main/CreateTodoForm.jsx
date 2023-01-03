import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { todosApis } from "../../api/axiosConfig";

function CreateTodoForm() {
  const [inputValues, setInputValues] = useState({ title: "", content: "" });

  const { mutate: createTodoSubmitMutate } = useMutation(
    async (values) => {
      try {
        const response = await todosApis.createTodo(values);
        return response;
      } catch (error) {
        const { status, data } = error.response;
        return alert(data.details);
      }
    },
    {
      onSuccess: (data) => {
        if (data.status === 200 && data.data) {
          alert("Todo가 작성되었습니다");
        }
      },
      onError: (error) => {
        throw error;
      },
    }
  );

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValues.title.trim() === "" || inputValues.content.trim() === "") {
      return alert("빈칸을 채워주세요");
    }
    createTodoSubmitMutate(inputValues);
    setInputValues({ ...inputValues, title: "", content: "" });
  };

  return (
    <div>
      <h1>Todo 작성</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="title">제목</label>
        <input
          type="title"
          id="title"
          name="title"
          value={inputValues.title}
          onChange={onChangeHandler}
        />
        <label htmlFor="content">내용</label>
        <input
          type="content"
          id="content"
          name="content"
          value={inputValues.content}
          onChange={onChangeHandler}
        />
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}

export default CreateTodoForm;
