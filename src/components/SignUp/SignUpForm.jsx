import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { memberApis } from "../../api/axiosConfig";

function SignUpForm() {
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({ email: "", password: "" });

  // // signUp
  const { mutate: signUpSubmitMutate } = useMutation(
    async (values) => {
      try {
        const response = await memberApis.signUp(values);
        return response;
      } catch (error) {
        const { status, data } = error.response;
        if (status === 409) {
          return alert(data.details);
        }
      }
    },
    {
      onSuccess: (data) => {
        if (
          data.status === 200 &&
          data.data.token !== undefined &&
          data.data.token !== null
        ) {
          console.log(data);
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("userId", inputValues.email);
          alert(data.data.message);
          navigate("/auth/login");
        }
      },
      onError: (error) => {
        throw error;
      },
    }
  );

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmitHandler = (e) => {
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
    signUpSubmitMutate(inputValues);
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
          onChange={onChangeHandler}
        />
        <label htmlFor="password">패스워드</label>
        <input
          type="password"
          id="password"
          name="password"
          value={inputValues.password}
          onChange={onChangeHandler}
        />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignUpForm;
