import React, { FormEvent, useState } from "react";
import useForm from "../../hooks/common/useForm";
import { useSignUpMutation } from "../../hooks/queries/auth/useSignUpMutation";
import { emailValidator, passwordValidator } from "../../utils/validators";
import useError from "../../hooks/common/useError";

function SignUpForm() {
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

    formValidator() ?? mutate({ email, password });
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          autoComplete="on"
        />
        <label htmlFor="password">패스워드</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChange}
          autoComplete="on"
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUpForm;
