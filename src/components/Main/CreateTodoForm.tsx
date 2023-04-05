import React, { FormEvent, useState } from "react";
import { usePostTodoMutation } from "../../hooks/queries/todo/usePostTodoMutation";
import useForm from "../../hooks/common/useForm";
import { emptyStringValidator } from "../../utils/validators";

function CreateTodoForm() {
  const [{ title, content }, onChange, setState] = useForm({
    title: "",
    content: "",
  });

  const { mutate } = usePostTodoMutation();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emptyStringValidator([title, content])
      ? alert("빈칸을 채워주세요")
      : mutate({ title, content });
    setState({ title: "", content: "" });
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {/* <label htmlFor="title">제목</label> */}
        <input
          type="title"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={onChange}
        />
        {/* <label htmlFor="content">내용</label> */}
        <input
          type="content"
          id="content"
          name="content"
          placeholder="Content"
          value={content}
          onChange={onChange}
        />
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}

export default CreateTodoForm;
