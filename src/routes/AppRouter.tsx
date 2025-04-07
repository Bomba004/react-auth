import { lazy, Suspense } from "react";

import {
  createBrowserRouter, RouterProvider,
} from "@/utils/alias";

// layouts
const MainLayout = lazy(() => import("@/layouts/MainLayout/MainLayout"));
const PrivateRoute = lazy(() => import("@/components/auth/PrivateRoute"));

// components
import { LottieHandler, PageSuspenseFallback } from "@/components/feedback";

// pages
import { ErrorPage as Error } from "@/pages/ErrorPage";
const App = lazy(() => import("@/App"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Login = lazy(() => import("@/pages/auth/Login"));
const Register = lazy(() => import("@/pages/auth/Register"));
// const Home = lazy(() => import("@pages/Home"));


// protect route
// import ProtectedRoute from "@components/Auth/ProtectedRoute";

// const { t } = useTranslation();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={
        // <div className="flex justify-center items-center"> <LottieHandler type="loading" message={t('global.loading')} /> </div> } >
        <div className="flex justify-center items-center"> <LottieHandler type="loading" message='Loading please wait...' /> </div>} >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {// App | Home
        index: true,
        // element: <App />,
        element: (
          <PageSuspenseFallback>
            {/* <Home /> */}
            <MainLayout setting={{ header: true, footer: true }} />
            <App />
          </PageSuspenseFallback>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PageSuspenseFallback>
        <PrivateRoute> <Dashboard /> </PrivateRoute>
      </PageSuspenseFallback>
    ),
  },
  {
    path: "login",
    element: (
      <PageSuspenseFallback>
        <Login />
      </PageSuspenseFallback>
    ),
  },
  {
    path: "register",
    element: (
      <PageSuspenseFallback>
        <Register />
      </PageSuspenseFallback>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;