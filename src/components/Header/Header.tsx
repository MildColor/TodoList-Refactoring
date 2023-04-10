import React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../constants/path";
import { getLocalStorage, removeLocalStorage } from "../../utils/localStorage";
import * as Style from "./Header.styles";
import Button from "../common/Button/Button";
import { ACCESS_TOKEN_KEY } from "../../constants/token";

function Header({ title }: { title: string }) {
  const navigate = useNavigate();

  const token = getLocalStorage(ACCESS_TOKEN_KEY);

  const logoutHandler = () => {
    removeLocalStorage(ACCESS_TOKEN_KEY);
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
