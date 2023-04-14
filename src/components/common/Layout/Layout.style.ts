import styled from "styled-components";
import { flexCenter } from "../../../styles/mixins";

export const Layout = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

export const Banner = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  background-image: ${({ theme }) => theme.gradients.AmyCrisp};
`;

export const Section = styled.section`
  display: flex;
  position: absolute;
  width: 1080px;
  top: 100px;
`;
