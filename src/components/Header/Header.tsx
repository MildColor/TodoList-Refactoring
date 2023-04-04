import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PAGE_PATH } from "../../constants/path";
import { removeLocalStorage } from "../../utils/localStorage";

function Header() {
  const navigate = useNavigate();

  const logoutHandler = () => {
    removeLocalStorage("accessToken");
    removeLocalStorage("userId");
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
  height: 100px;
  background-image: ${({ theme }) => theme.gradients.RainyAshville};
  justify-content: flex-end;

  button {
    background-color: rgba(0, 0, 0, 0);
    border: 0;
    cursor: pointer;
  }
`;

// background-color: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)
