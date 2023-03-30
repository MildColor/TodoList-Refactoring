import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PAGE_PATH } from "../../constants/path";

function Header() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    navigate(PAGE_PATH.SIGN_IN);
  };

  return (
    <ContainerDiv>
      <button onClick={logoutHandler}>로그아웃</button>
    </ContainerDiv>
  );
}

export default Header;

const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  background-color: pink;
  justify-content: flex-end;

  button {
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    cursor: pointer;
  }
`;
