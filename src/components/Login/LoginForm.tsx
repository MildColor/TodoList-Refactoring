import { useMutation } from "@tanstack/react-query";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { memberApis } from "../../api/axiosConfig";
import { SignInForm } from "../../types/signIn";
import { getAccessToken } from "../../utils";

function LoginForm() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getAccessToken();
    if (token !== undefined && token !== null && token) {
      return navigate(`/`);
    }
  }, []);

  const [inputValues, setInputValues] = useState({ email: "", password: "" });

  // // Login
  const { mutate: loginSubmitMutate } = useMutation(
    async (values: SignInForm) => {
      try {
        const response = await memberApis.login(values);
        return response;
      } catch (error) {
        // const { status, data } = error.response;
        // if (status === 400) {
        //   return alert(data.details);
        // }
      }
    },
    {
      onSuccess: (data) => {
        console.log("success", data);
        // if (
        //   data.status === 200 &&
        //   data.data.token !== undefined &&
        //   data.data.token !== null
        // ) {
        //   localStorage.setItem("token", data.data.token);
        //   localStorage.setItem("userId", inputValues.email);
        //   alert(data.data.message);
        //   navigate("/");
        // }
      },
      onError: (error) => {
        throw error;
      },
    }
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValues);
    if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/i.test(
        inputValues.email.trim()
      )
    ) {
      return alert("이메일 형식에 맞지 않습니다.");
    } else if (inputValues.password.trim().length <= 8) {
      return alert("비밀번호는 8자 이상 입력해주세요.");
    }
    loginSubmitMutate(inputValues);
  };

  return (
    <div>
      <h1>로그인</h1>
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
        <button type="submit">로그인하기</button>
      </form>
    </div>
  );
}

export default LoginForm;
