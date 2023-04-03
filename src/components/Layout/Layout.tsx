import styled from "styled-components";

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <StLayout>
      <StSection>{children}</StSection>
    </StLayout>
  );
}

export default Layout;

const StLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: ${({ theme }) => theme.gradients.AmyCrisp};
`;

const StSection = styled.section`
  display: flex;
  width: 1280px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
