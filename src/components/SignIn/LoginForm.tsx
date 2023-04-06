import React, { FormEvent } from "react";
import useForm from "../../hooks/common/useForm";
import { useSignInMutation } from "../../hooks/queries/auth/useSignInMutation";
import useError from "../../hooks/common/useError";
import Button from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../constants/path";
import Input from "../common/Input/Input";

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
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="email">이메일</label>
      <Input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
        autoComplete="on"
      />
      <label htmlFor="password">패스워드</label>
      <Input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={onChange}
        autoComplete="on"
      />
      <Button type="submit">로그인하기</Button>
      <Button type="button" onClick={() => goToSignUp()}>
        회원가입
      </Button>
    </form>
  );
}

export default LoginForm;
