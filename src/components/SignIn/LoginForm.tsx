import React, { FormEvent } from "react";
import useForm from "../../hooks/common/useForm";
import { useSignInMutation } from "../../hooks/queries/auth/useSignInMutation";
import useError from "../../hooks/common/useError";
import Button from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../constants/path";
import Input from "../common/Input/Input";
import styled from "styled-components";

function LoginForm() {
  const navigate = useNavigate();
  const [{ email, password }, onChange] = useForm({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useError({
    email: "",
    password: "",
  });
  const { mutate } = useSignInMutation();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ email, password });
  };

  const goToSignUp = () => {
    navigate(PAGE_PATH.SIGN_UP);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <label htmlFor="email">이메일</label>
      <Input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
        autoComplete="on"
        height="30px"
      />
      <label htmlFor="password">패스워드</label>
      <Input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={onChange}
        autoComplete="on"
        height="30px"
      />
      <Button type="submit" width="100%" height="30px">
        로그인
      </Button>
      <Button
        type="button"
        onClick={() => goToSignUp()}
        width="100%"
        height="30px"
      >
        회원가입
      </Button>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  display: flex;
  width: 60%;
  height: 400px;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
`;
