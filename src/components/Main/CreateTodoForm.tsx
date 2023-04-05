import React, { FormEvent, useState } from "react";
import { usePostTodoMutation } from "../../hooks/queries/todo/usePostTodoMutation";
import useForm from "../../hooks/common/useForm";
import { emptyStringValidator } from "../../utils/validators";
import { Input } from "../common/Input/Input.styles";
import styled from "styled-components";
import { Button } from "../common/Button/Button.styles";

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
    <form onSubmit={onSubmitHandler}>
      <InputField>
        <Input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={title}
          onChange={onChange}
          width="20%"
          height="30px"
        />
        <Input
          type="text"
          id="content"
          name="content"
          placeholder="Content"
          value={content}
          onChange={onChange}
          width="65%"
          height="30px"
        />
        <Button type="submit" width="30px" height="30px">
          +
        </Button>
      </InputField>
    </form>
  );
}

export default CreateTodoForm;

const InputField = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-between;
`;
