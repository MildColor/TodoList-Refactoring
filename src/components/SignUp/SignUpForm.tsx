import React, { FormEvent, useState } from "react";
import { useSignUpMutation } from "../../hooks/queries/auth/useSignUpMutation";

function SignUpForm() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const { mutate } = useSignUpMutation();

  const onChangehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/i.test(
        inputValues.email.trim()
      )
    ) {
      return alert("이메일 형식에 맞지 않습니다.");
    } else if (inputValues.password.trim().length <= 8) {
      return alert("비밀번호는 8자 이상 입력해주세요.");
    }
    mutate(inputValues);
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
          value={inputValues.email}
          onChange={onChangehandler}
        />
        <label htmlFor="password">패스워드</label>
        <input
          type="password"
          id="password"
          name="password"
          value={inputValues.password}
          onChange={onChangehandler}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUpForm;
