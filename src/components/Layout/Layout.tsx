import styled from "styled-components";

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <StLayout>
      <StLayoutBanner />
      <StSection>{children}</StSection>
    </StLayout>
  );
}

export default Layout;

const StLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StLayoutBanner = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  background-image: ${({ theme }) => theme.gradients.AmyCrisp};
`;

const StSection = styled.section`
  display: flex;
  position: absolute;
  width: 600px;
  top: 100px;
`;
