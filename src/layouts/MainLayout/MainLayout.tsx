import { Outlet } from "react-router-dom";
// import { Header, Footer } from "@components/common";

type MainLayoutProps = {
  setting?: {
    header: boolean;
    footer: boolean;
  };
};

const MainLayout = ({ setting = { header: false, footer: false } }: MainLayoutProps) => {
  return (
    <>
      {setting.header && <header>header</header>}
      <Outlet />
      {setting.footer && <footer>footer</footer>}
    </>
  );
};

export default MainLayout;