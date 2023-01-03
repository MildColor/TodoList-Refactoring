import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";

function Layout(props) {
  return (
    <StLayout>
      <StSection>{props.children}</StSection>
    </StLayout>
  );
}

export default Layout;

const StLayout = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StSection = styled.section`
  display: flex;
  width: 1280px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
