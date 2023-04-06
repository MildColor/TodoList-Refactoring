import React, { FormEvent } from "react";
import { usePostTodoMutation } from "../../hooks/queries/todo/usePostTodoMutation";
import useForm from "../../hooks/common/useForm";
import { emptyStringValidator } from "../../utils/validators";
import { Input } from "../common/Input/Input.styles";
import styled from "styled-components";
import { Button } from "../common/Button/Button.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
    <Form onSubmit={onSubmitHandler}>
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
        <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: "#a6c1ee" }} />
      </Button>
    </Form>
  );
}

export default CreateTodoForm;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
`;
