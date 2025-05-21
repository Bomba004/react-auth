/* p:0.1.r2
------------------------------------------------------*/
import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter, RouterProvider,
  useTranslation,
} from "@/utils/alias";
import { FiFileText, FaUsersViewfinder, MdWarehouse, GrPieChart } from "@/utils/alias-Image-Icons";

// ========== ========== ========== ========== ========== ========== ========== ==========

export type TList_Links = {
  id: number;
  to: string;
  label: string;
  icon?: JSX.Element;
  content?: React.ReactNode;
};
export const List_Links: TList_Links[] = [

  {id:  1, to: '/', label: 'home',},
  {id:  2, to: '/about', label: 'about', },
  {id:  3, to: '/careers', label: 'careers', },
  {id:  4, to: '/history', label: 'history', },
  {id:  5, to: '/services', label: 'services', },
  {id:  6, to: '/contact', label: 'contact', },
  {id:  7, to: '/projects', label: 'projects', },
  {id:  8, to: '/blog', label: 'blog', },
  {id:  9, to: '/dashboard', label: 'dashboard', },
  {id: 10, to: '/dashboard__app', label: 'dashboard__app', },
  // {id: 10, to: '/dashboard__app/invoices', label: 'dashboard__app', },
    { id: 101, to: '/dashboard__app/invoices', label: 'Invoices', icon: <FiFileText /> },
    { id: 102, to: '/dashboard__app/accounts', label: 'Accounts', icon: <FaUsersViewfinder/> },
    { id: 103, to: '/dashboard__app/warehouses', label: 'Warehouses', icon: <MdWarehouse/> },
    { id: 104, to: '/dashboard__app/reports', label: 'Reports', icon: <GrPieChart/> },



];

// ========== ========== ========== ========== ========== ========== ========== ========== 

export const lazyWithDelay = (importFunc: () => Promise<any>, delay = 1000) =>
  React.lazy(() =>
    Promise.all([
      importFunc(),
      new Promise(res => setTimeout(res, delay)),
    ]).then(([module]) => module)
  );

// ========== ========== ========== ========== ========== ========== ========== ==========

// layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout").then(m => ({ default: m.MainLayout })));
const MainLayout2 = lazy(() => import("@/layouts/MainLayout/MainLayout").then(m => ({ default: m.MainLayout2 })));
const AuthLayout = lazy(() => import("@/pages/auth/AuthLayout"));
const PrivateRoute = lazy(() => import("@/components/auth/PrivateRoute"));
const PrivateRouteUserOK = lazy(() => import("@/components/auth/PrivateRouteUserOK"));

// components
import { LottieHandler, PageSuspenseFallback } from "@/components/feedback";

// pages
import { ErrorPage as Error } from "@/pages/ErrorPage";
// const App = lazy(() => import("@/App"));
const Home = lazy(() => import("@/pages/Home"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Dashboard__App = lazy(() => import("@/pages/dashboard__app"));
  // const Invoices = lazy(() => import("@/pages/dashboard__app/pages/Invoices"));
  // const Accounts = lazy(() => import("@/pages/dashboard__app/pages/Accounts"));
  // const Warehouses = lazy(() => import("@/pages/dashboard__app/pages/Warehouses"));
  // const Reports = lazy(() => import("@/pages/dashboard__app/pages/Reports"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
// const Home = lazy(() => import("@pages/Home"));


// protect route
// import ProtectedRoute from "@components/Auth/ProtectedRoute";


export const AppRouter = () => {

  const LottieWithTranslation = () => {
    const { t } = useTranslation();
    return <LottieHandler type="loading" message={t('global.loading')} />;
  };

  const element = ({ header= true, footer= true, layout = 1 } : { header: boolean, footer: boolean, layout?: number }) =>{
    return (
      <Suspense fallback={<LottieWithTranslation /> /* loading: جزء تحميل الصفحة */} >
        {/* MainLayout: Layout المركزي */}
        {layout == 1 ? <MainLayout setting={{ header, footer }} /> :
         layout == 2 ? <MainLayout2 setting={{ header, footer }} /> : <></>}
      </Suspense>
    )
  }
  // const element__Dashboard__App = (
  //   <PageSuspenseFallback>
  //     <PrivateRoute>
  //       <Dashboard__App />
  //     </PrivateRoute>
  //   </PageSuspenseFallback>
  // );

  const router = createBrowserRouter([
    // Index || Home ---
    {
      path: "/",
      errorElement: <Error />,
      element: element({ header: true, footer: true }),
      children: [
        // Home
        {index: true, element: (<PageSuspenseFallback><Home /></PageSuspenseFallback>),},
      ],
    },
    // Dashboard ---
    {
      path: "/dashboard",
      errorElement: <Error />,
      element: element({ header: true, footer: true }),
      children: [
        // Dashboard
        { index: true, element: <PageSuspenseFallback><PrivateRoute><Dashboard /></PrivateRoute></PageSuspenseFallback>, },
      ],
    },
    // Dashboard__App ---
    {
      path: "/dashboard__app",
      errorElement: <Error />,
      element: element({ header: true, footer: false, layout:2 }),
      children: [
        // Dashboard__App
        {index: true, element: <PageSuspenseFallback><PrivateRoute><Dashboard__App /></PrivateRoute></PageSuspenseFallback>,},
        // {
        //   element: element__Dashboard__App,
        //   children: [
        //     { index: true, path: "", element: <Invoices /> },
        //     { path: "invoices", element: <Invoices /> },
        //     { path: "accounts", element: <Accounts /> },
        //     { path: "warehouses", element: <Warehouses /> },
        //     { path: "reports", element: <Reports /> },
        //   ],
        // },
      ],
    },
    // Auth ---
    {
      path: "/login",
      errorElement: <Error />,
      element: element({ header: true, footer: true }),
      children: [{
        index: true,
        // element: <Login />,
        element: <PageSuspenseFallback>
          <PrivateRouteUserOK><AuthLayout children_Is='Login'> <Login /> </AuthLayout></PrivateRouteUserOK>
        </PageSuspenseFallback>,
      },],
    },
    {
      path: "/register",
      errorElement: <Error />,
      element: element({ header: true, footer: true }),
      children: [{
        index: true,
        // element: <Register />,
        element: <PageSuspenseFallback>
          <PrivateRouteUserOK><AuthLayout children_Is='Register'> <Register /> </AuthLayout></PrivateRouteUserOK>
        </PageSuspenseFallback>,
      },],
    },
    // ???? ---
  ],
    /* لتفعيل startTransition
    * لتفعيل التغييرات في مسارات Splat */
    { future: { v7_startTransition: true, v7_relativeSplatPath: true } as {/* أضف نوعًا صريحًا إذا لزم الأمر */ v7_startTransition?: boolean; v7_relativeSplatPath?: boolean; } }
);

  return <>
    <RouterProvider router={router} future={ { v7_startTransition: true } } />
  </>;
};

export default AppRouter;

