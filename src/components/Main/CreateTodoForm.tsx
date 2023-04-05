import React, { FormEvent, useState } from "react";
import { usePostTodoMutation } from "../../hooks/queries/todo/usePostTodoMutation";

function CreateTodoForm() {
  const [inputValues, setInputValues] = useState({ title: "", content: "" });

  const { mutate } = usePostTodoMutation();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValues.title.trim() === "" || inputValues.content.trim() === "") {
      return alert("빈칸을 채워주세요");
    }
    mutate(inputValues);
    setInputValues({ ...inputValues, title: "", content: "" });
  };

  return (
    <div>
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
