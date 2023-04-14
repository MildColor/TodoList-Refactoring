import * as Style from "./Layout.style";
export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Style.Layout>
      <Style.Banner />
      <Style.Section>{children}</Style.Section>
    </Style.Layout>
  );
}

export default Layout;
