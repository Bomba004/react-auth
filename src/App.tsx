import {
  Link,  
  Router, Routes, Route, Navigate, useSelector,
  Navbar, Login, Dashboard, ErrorPage, PrivateRoute,
  useDirection, ToastLayout,
  clsx,
  RootState,
} from '@/utils/alias';


const App: React.FC = () => {

  const user = useSelector((state: RootState) => state.auth.user);
  useDirection();

  return <>
    <Link to="/about">اذهب إلى صفحة التعريف</Link>
    <h1>welcome BomBa</h1>
  </>;
  return (
    (true)? <h1>welcome BomBa</h1> :
    <Router>
      <div className={clsx(
        'select-none',
        'min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800',
        'ms:text-sm',
      )}>
        {user && <Navbar />}
        <main className={user ? 'container mx-auto px-4 py-8 mt-6' : ''}>
          <Routes>
            <Route path={`/login`} element={ user ? <Navigate to={`/dashboard`} /> : <Login /> } />
            <Route path={`/dashboard`} element={ <PrivateRoute> <Dashboard /> </PrivateRoute> } />
            <Route path={`/error`} element={ <ErrorPage /> } />
            <Route path={``} element={ <Navigate to={`/dashboard`} /> } />
            <Route path="*" element={ <ErrorPage title="Error 404" message="Page not found" /> } />
          </Routes>
        </main>
        {/* Toast Layout القالب الذي يعمل بداخله Toastify */}
        <ToastLayout />
      </div>
    </Router>
  );
};

export default App;




// const App: React.FC = () => {

//   // const { i18n } = useTranslation();
//   // useEffect(() => {
//   //   console.log(i18n.language);
//   //   // تحديث جميع التوست عند تغيير اللغة
//   //   toast.update;
//   // }, [i18n.language]);

//   const user = useSelector((state: RootState) => state.auth.user);

//   // استخدام hook الاتجاه لتغيير اتجاه الصفحة تلقائياً
//   useDirection();

//   return (
//     <Router>
//       <div className={clsx(
//         'select-none',
//         'min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800',
//         'ms:text-sm',
//       )}>
//         {user && <Navbar />}
//         <main className={user ? 'container mx-auto px-4 py-8 mt-6' : ''}>
//           <Routes>
//             <Route path={`/login`} element={ user ? <Navigate to={`/dashboard`} /> : <Login /> } />
//             <Route path={`/dashboard`} element={ <PrivateRoute> <Dashboard /> </PrivateRoute> } />
//             <Route path={`/error`} element={ <ErrorPage /> } />
//             <Route path={``} element={ <Navigate to={`/dashboard`} /> } />
//             <Route path="*" element={ <ErrorPage title="Error 404" message="Page not found" /> } />
//           </Routes>
//         </main>
//         {/* Toast Layout القالب الذي يعمل بداخله Toastify */}
//         <ToastLayout />
//       </div>
//     </Router>
//   );
// };

// export default App;