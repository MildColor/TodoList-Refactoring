import React, { FormEvent, useState } from "react";
import { useSignInMutation } from "../../hooks/queries/auth/useSignInMutation";

function LoginForm() {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const { mutate } = useSignInMutation();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(inputValues);
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

// const { mutate: loginSubmitMutate } = useMutation(
//   async (values: SignInForm) => {
//     try {
//       const response = await authApis.signIn(values);
//       return response;
//     } catch (error) {
//       // const { status, data } = error.response;
//       // if (status === 400) {
//       //   return alert(data.details);
//       // }
//     }
//   },
//   {
//     onSuccess: (data) => {
//       console.log("success", data);
//       // if (
//       //   data.status === 200 &&
//       //   data.data.token !== undefined &&
//       //   data.data.token !== null
//       // ) {
//       //   localStorage.setItem("token", data.data.token);
//       //   localStorage.setItem("userId", inputValues.email);
//       //   alert(data.data.message);
//       //   navigate("/");
//       // }
//     },
//     onError: (error) => {
//       throw error;
//     },
//   }
// );
