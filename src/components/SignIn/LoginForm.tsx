import React, { FormEvent } from "react";
import useForm from "../../hooks/common/useForm";
import { useSignInMutation } from "../../hooks/queries/auth/useSignInMutation";
import useError from "../../hooks/common/useError";

function LoginForm() {
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

  return (
    <div>
      <h1>로그인</h1>
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
