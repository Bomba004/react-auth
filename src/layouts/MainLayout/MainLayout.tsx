import { Footer, Header__test, LanguageToggle, ThemeToggle } from "@/utils/alias";
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
      {/* <hr /> */}
      <div className="flex items-center space-x-2 ">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <Outlet />
      {setting.footer && <Footer/>}
    </>
  );
};
