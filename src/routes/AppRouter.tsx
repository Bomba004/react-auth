import React from "react";

export const lazyWithDelay = (importFunc: () => Promise<any>, delay = 1000) =>
  React.lazy(() =>
    Promise.all([
      importFunc(),
      new Promise(res => setTimeout(res, delay)),
    ]).then(([module]) => module)
  );
// ========== ========== ========== ========== ========== ========== ========== ==========
import { lazy, Suspense } from "react";

import {
  createBrowserRouter, RouterProvider,
  useTranslation,
} from "@/utils/alias";

// layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));
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
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
// const Home = lazy(() => import("@pages/Home"));


// protect route
// import ProtectedRoute from "@components/Auth/ProtectedRoute";


const AppRouter = () => {

  const LottieWithTranslation = () => {
    const { t } = useTranslation();
    return <LottieHandler type="loading" message={t("global.loading")} />;
  };

  const router = createBrowserRouter([
    // Index || Home ---
    {
      path: "/",
      element: (
        <Suspense fallback={<LottieWithTranslation /> /* loading: جزء تحميل الصفحة */} >
          {/* MainLayout: Layout المركزي */}
          <MainLayout setting={{ header: true, footer: true }} />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {// Home
          index: true,
          // element: <Home />,
          element: (
            <PageSuspenseFallback>
              {/* <Home /> */}
              <Home />
            </PageSuspenseFallback>
          ),
        },
      ],
    },
    // Dashboard ---
    {
      path: "dashboard",
      element: (
        <Suspense fallback={<LottieWithTranslation /> /* loading: جزء تحميل الصفحة */} >
          {/* MainLayout: Layout المركزي */}
          <MainLayout setting={{ header: true, footer: true }} />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [{
        index: true,
        // element: <dashboard />,
        element: <PageSuspenseFallback>
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                </PageSuspenseFallback>,
      },],
    },
    // Auth ---
    {
      path: "login",
      element: (
        <Suspense fallback={<LottieWithTranslation /> /* loading: جزء تحميل الصفحة */} >
          {/* MainLayout: Layout المركزي */}
          <MainLayout setting={{ header: true, footer: true }} />

        </Suspense>
      ),
      errorElement: <Error />,
      children: [{
        index: true,
        // element: <Login />,
        element: <PageSuspenseFallback>
          <PrivateRouteUserOK><AuthLayout children_Is='Login'> <Login /> </AuthLayout></PrivateRouteUserOK>
        </PageSuspenseFallback>,
      },],
    },
    {
      path: "register",
      element: (
        <Suspense fallback={<LottieWithTranslation /> /* loading: جزء تحميل الصفحة */} >
          {/* MainLayout: Layout المركزي */}
          <MainLayout setting={{ header: true, footer: true }} />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [{
        index: true,
        // element: <Register />,
        element: <PageSuspenseFallback>
          <PrivateRouteUserOK><AuthLayout children_Is='Register'> <Register /> </AuthLayout></PrivateRouteUserOK>
        </PageSuspenseFallback>,
      },],
    },
    // Auth ---
  ]);

  return <>
    <RouterProvider router={router} />
  </>;
};

export default AppRouter;

