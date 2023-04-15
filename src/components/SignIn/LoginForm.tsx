import React, { FormEvent } from "react";
import useForm from "../../hooks/common/useForm";
import { useSignInMutation } from "../../hooks/queries/auth/useSignInMutation";
import useError from "../../hooks/common/useError";
import Button from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../constants/path";
import { InputField } from "../common/Input/Input";
import styled from "styled-components";
import { flexColumn } from "../../styles/mixins";

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
      <InputField
        title="이메일"
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
        autoComplete="on"
        width="100%"
        height="10rem"
        errorMessage={errorMessage.email}
      />
      <InputField
        title="비밀번호"
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={onChange}
        autoComplete="on"
        width="100%"
        height="10rem"
        errorMessage={errorMessage.password}
      />

      <Button type="submit" width="100%" height="3rem" color="secondary">
        로그인
      </Button>
      <Button
        type="button"
        onClick={() => goToSignUp()}
        width="100%"
        height="3rem"
        color="secondary"
      >
        회원가입
      </Button>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  ${flexColumn};
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 1rem;
`;
