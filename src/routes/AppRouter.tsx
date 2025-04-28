import { lazy, Suspense } from "react";

import {
  createBrowserRouter, RouterProvider,
  useTranslation,
} from "@/utils/alias";

// layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));
const AuthLayout = lazy(() => import("@/pages/auth/AuthLayout"));
const PrivateRoute = lazy(() => import("@/components/auth/PrivateRoute"));

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

  const { t } = useTranslation();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense fallback={ <LottieHandler type="loading" message={t('global.loading')} /> /* loading: جزء تحميل الصفحة */} >
        {/* MainLayout: Layout المركزي */}
        <MainLayout setting={{ header: true, footer: true }}/>
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
    {
      path: "dashboard",
      element: (
        <PageSuspenseFallback>
          <PrivateRoute>
          <MainLayout setting={{ header: true, footer: true }}/>
            <Dashboard />
          </PrivateRoute>
        </PageSuspenseFallback>
      ),
    },
    // Auth ---
    {
      path: "login",
      element: (
        <Suspense fallback={ <LottieHandler type="loading" message={t('global.loading')} /> /* loading: جزء تحميل الصفحة */} >
          {/* MainLayout: Layout المركزي */}
          <MainLayout setting={{ header: true, footer: true }}/>
          
        </Suspense>
      ),
      errorElement: <Error />,
      children: [ {
        index: true,
        // element: <Login />,
        element: <PageSuspenseFallback>
          <AuthLayout children_Is='Login'> <Login /> </AuthLayout>
          </PageSuspenseFallback> ,
      }, ],
    },
    {
      path: "register",
      element: (
        <Suspense fallback={ <LottieHandler type="loading" message={t('global.loading')} /> /* loading: جزء تحميل الصفحة */} >
          {/* MainLayout: Layout المركزي */}
          <MainLayout setting={{ header: true, footer: true }}/>
        </Suspense>
      ),
      errorElement: <Error />,
      children: [ {
        index: true,
        // element: <Register />,
        element: <PageSuspenseFallback>
          <AuthLayout children_Is='Register'> <Register /> </AuthLayout>
        </PageSuspenseFallback> ,
    }, ],
    },
    // Auth ---
  ]);

  return <>
    <RouterProvider router={router} />
  </>;
};

export default AppRouter;

