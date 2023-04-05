import React from "react";
import LoginForm from "../components/SignIn/LoginForm";
import {
  BoardBody,
  BoardFrame,
  BoardHeader,
} from "../components/common/Board/Board";
import Header from "../components/Header/Header";

function SignIn() {
  return (
    <BoardFrame>
      <BoardHeader>
        <Header title="SignIn" />
      </BoardHeader>
      <BoardBody>
        <LoginForm />
      </BoardBody>
    </BoardFrame>
  );
}

export default SignIn;
