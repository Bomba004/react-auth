import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar } from './components/layout/Navbar';
import { Login } from './pages/auth/Login';
import { Dashboard } from './pages/Dashboard';
import { ErrorPage } from './pages/ErrorPage';
import { PrivateRoute } from './components/auth/PrivateRoute';
import { RootState } from './store';
import { useDirection } from './hooks/useDirection';
import clsx from 'clsx';

import { ToastLayout } from './components/ui/toast/Toast';


import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const routerApi = '/react-auth/';

const App: React.FC = () => {

  const { i18n } = useTranslation();
  useEffect(() => {
    console.log(i18n.language);
    // تحديث جميع التوست عند تغيير اللغة
    toast.update;
  }, [i18n.language]);

  const user = useSelector((state: RootState) => state.auth.user);

  // استخدام hook الاتجاه لتغيير اتجاه الصفحة تلقائياً
  useDirection();

  return (
    <Router>
      <div className={clsx(
        'select-none',
        'min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800',
        'ms:text-sm',
      )}>
        {user && <Navbar />}
        <main className={user ? 'container mx-auto px-4 py-8 mt-6' : ''}>
          <Routes>
            <Route path={routerApi + "login"} element={
              user ? <Navigate to={routerApi + "dashboard"} /> : <Login />
            } />
            <Route
              path={routerApi + "dashboard"}
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path={routerApi + "error"} element={<ErrorPage />} />
            <Route path={routerApi + ""} element={<Navigate to={routerApi + "dashboard"} />} />
            <Route path="*" element={<ErrorPage title="Error 404" message="Page not found" />} />
          </Routes>
        </main>
        {/* Toast Layout القالب الذي يعمل بداخله Toastify */}
        <ToastLayout />
      </div>
    </Router>
  );
};

export default App;
