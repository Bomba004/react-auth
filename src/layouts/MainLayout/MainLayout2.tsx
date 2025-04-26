import { Header__test } from "@/utils/alias";

type MainLayoutProps = {
  setting?: {
    header: boolean;
    footer: boolean;
  };
};

export const MainLayout2 = ({ setting = { header: false, footer: false } }: MainLayoutProps) => {
  return (
    <>
      {/* {setting.header && <header>header</header>} */}
      {/* <h1>BomBa ------------------------------------</h1> */}
      <Header__test />
      {/* <Outlet /> */}
      {/* {setting.footer && <footer>footer</footer>} */}
    </>
  );
};

export default MainLayout2;