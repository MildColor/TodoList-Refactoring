import React from "react";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../constants/path";
import { removeLocalStorage } from "../../utils/localStorage";
import * as Style from "./Header.styles";

function Header({ title }: { title: string }) {
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeLocalStorage("accessToken");
    removeLocalStorage("userId");
    navigate(PAGE_PATH.SIGN_IN);
  };

  return (
    <>
      <Style.Title>{title}</Style.Title>
      {/* <button onClick={logoutHandler}>로그아웃</button> */}
    </>
  );
}

export default Header;
