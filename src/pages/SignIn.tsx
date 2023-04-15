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
      <BoardHeader width="40rem">
        <Header title="SignIn" />
      </BoardHeader>
      <BoardBody width="40rem" height="500rem">
        <LoginForm />
      </BoardBody>
    </BoardFrame>
  );
}

export default SignIn;
