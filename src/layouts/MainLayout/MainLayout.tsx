import { Footer, Header__test } from "@/utils/alias";
import { Outlet } from "react-router-dom";
// import { Header, Footer } from "@components/common";

type MainLayoutProps = {
  setting?: {
    header: boolean;
    footer: boolean;
  };
};

export const MainLayout = ({ setting = { header: false, footer: false } }: MainLayoutProps) => {
  return (
    <>
      {setting.header && <Header__test/>}
      {/* <h1>BomBa ------------------------------------</h1> */}
      <Outlet />
      {setting.footer && <Footer/>}
    </>
  );
};
export default MainLayout;

/// =======================================================================

export const MainLayout2 = ({ setting = { header: false, footer: false } }: MainLayoutProps) => {
  return (
    <>
      {setting.header && <Header__test toPhone={true}/>}
      <Outlet />
      {setting.footer && <Footer/>}
    </>
  );
};
