import React, { FormEvent } from "react";
import useForm from "../../hooks/common/useForm";
import { useSignUpMutation } from "../../hooks/queries/auth/useSignUpMutation";
import { emailValidator, passwordValidator } from "../../utils/validators";
import useError from "../../hooks/common/useError";
import { InputField } from "../common/Input/Input";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../constants/path";
import Button from "../common/Button/Button";
import { flexColumn } from "../../styles/mixins";

function SignUpForm() {
  const navigate = useNavigate();

  const [{ email, password }, onChange] = useForm({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useError({
    email: "",
    password: "",
  });

  const { mutate } = useSignUpMutation();

  const formValidator = () => {
    const isEmailValidity = emailValidator(email);
    const isPasswordValidity = passwordValidator(password);

    setErrorMessage(
      "email",
      isEmailValidity ? "이메일 형식에 맞지 않습니다." : ""
    );
    setErrorMessage(
      "password",
      isPasswordValidity ? "비밀번호는 8자 이상 입력해주세요" : ""
    );

    return ![isEmailValidity, isPasswordValidity].includes(true);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formValidator() && mutate({ email, password });
  };

  const goToSignIn = () => {
    navigate(PAGE_PATH.SIGN_IN);
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <InputField
        title="이메일"
        // type="email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
        autoComplete="on"
        width="100%"
        height="100px"
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
        height="100px"
        errorMessage={errorMessage.password}
      />
      <Button type="submit" width="100%" height="30px" color="secondary">
        회원가입
      </Button>
      <Button
        type="button"
        onClick={() => goToSignIn()}
        width="100%"
        height="30px"
        color="secondary"
      >
        로그인
      </Button>
    </Form>
  );
}

export default SignUpForm;

const Form = styled.form`
  ${flexColumn};
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 10px;
`;
