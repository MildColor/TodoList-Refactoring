import React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../constants/path";
import { getLocalStorage, removeLocalStorage } from "../../utils/localStorage";
import * as Style from "./Header.styles";
import Button from "../common/Button/Button";

function Header({ title }: { title: string }) {
  const navigate = useNavigate();

  const token = getLocalStorage("accessToken");

  const logoutHandler = () => {
    removeLocalStorage("accessToken");
    removeLocalStorage("userId");
    navigate(PAGE_PATH.SIGN_IN);
  };

  return (
    <Style.Container>
      <Style.Title>{title}</Style.Title>
      {token ? (
        <Button onClick={logoutHandler} width="50px">
          로그아웃
        </Button>
      ) : (
        <></>
      )}
    </Style.Container>
  );
}

export default Header;
