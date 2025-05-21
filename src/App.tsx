/* p:0.1
------------------------------------------------------*/
import {
  useLanguage,
  AppRouter,
  useTheme,
  useEffect,
  KeyboardWatcher,
} from '@/utils/alias';

const App: React.FC = () => {
  const { theme } = useTheme();
  useLanguage();

  // useEffect( async () => {
  //   await setTimeout(() => {
  //   }, 100);
  // }, []);
  useEffect(() => {/* التحكم في لون شريط Status Bar */
    const themeColor = `hsla(${getComputedStyle(document.documentElement).getPropertyValue('--color-background').trim()})`;
    let meta = document.querySelector("meta[name='theme-color']");
    if (!meta) {
      meta = document.createElement('meta');
      (meta as HTMLMetaElement).name = 'theme-color';
      document.head.appendChild(meta);
    }
  
    (meta as HTMLMetaElement).setAttribute('content', themeColor);
  }, [theme]);

  
  return <><KeyboardWatcher /><AppRouter /></>;
}
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