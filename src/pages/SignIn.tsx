import React from "react";
import LoginForm from "../components/SignIn/LoginForm";
import {
  BoardBody,
  BoardFrame,
  BoardHeader,
} from "../components/common/Board/Board";
import Header from "../components/common/Header/Header";

function SignIn() {
  return (
    <BoardFrame>
      <BoardHeader width="400px">
        <Header title="SignIn" />
      </BoardHeader>
      <BoardBody width="400px" height="500px">
        <LoginForm />
      </BoardBody>
    </BoardFrame>
  );
}

export default SignIn;
