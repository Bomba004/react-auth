import { Link, useNavigate } from "react-router-dom";
import './Header__test.scss';
import { useState, useRef, useEffect, useTranslation,
   useSelector, RootState,
   List_Links,
   NavLink,
   Button, useDispatch, 
   } from "@/utils/alias";
import { ArrowRightOnRectangleIcon } from "@/utils/alias-Image-Icons";

import { logout } from "@/store/slices/authSlice";
import { AppDispatch } from "@/store";


interface IHeader__testProps {
  toPhone?: boolean;
}
export const Header__test = ({toPhone}: IHeader__testProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const N1_links = List_Links.filter(link => 0 < link.id && link.id <= 10);
  // const N2_links = List_Links.filter(link => 10 < link.id && link.id <= 20);
  
  // const N1_links = [
  //   { label: t('header.home'), href: '/' },
  //   { label: t('header.about'), href: '/about' },
  //   { label: t('header.careers'), href: '/careers' },
  //   { label: t('header.history'), href: '/history' },
  //   { label: t('header.services'), href: '/services' },
  //   { label: t('header.contact'), href: '/contact' },
  //   { label: t('header.projects'), href: '/projects' },
  //   { label: t('header.blog'), href: '/blog' },
  //   { label: t('header.dashboard'), href: '/dashboard' },
  //   { label: t('header.bomba'), href: '/bomba' },
  // ];
  // const N2_links = [
  //   { label: 'Home', href: '/' },    
  //   { label: 'Dashboard', href: '/dashboard' },
  // ];


  // مراقبة الصفحة
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => { document.removeEventListener("mousedown", handleClickOutside); };
  }, []);


  async function handleLogout(){
    try {
      await dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  //#region ( Menu )
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const refBtnToggleMenu = useRef<HTMLButtonElement>(null);
  const refMenu = useRef<HTMLDivElement>(null);

  // التبديل بين الحالة المفتوحة والمغلقة للقائمة
  function handleClickToggleMenu() { setIsMenuOpen(!isMenuOpen); };
  function handleClickItem() { setIsMenuOpen(false); };
  // عند الضغط في أي مكان على الصفحة
  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Node;
    if (refMenu.current && !refMenu.current.contains(target)
      && refBtnToggleMenu.current && !refBtnToggleMenu.current.contains(target)) { setIsMenuOpen(false); }
  }
  //#endregion

  return (
    // <header className="bg-white dark:bg-gray-900"> relative z-[1] 
    // <header className="py-1 px-1 lg:px-4 relative z-[1]">
    <header className="py-1 relative z-[1]">
      {/* <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
      <div className={`container mx-auto${!toPhone ? ' max-w-md' : ''} md:max-w-full`}>
        {/* <div className="flex h-16 items-center justify-between"> */}
        <div
          // className="relative flex items-center justify-between gap-1 md:gap-16 px-2 py-2 md:px-4 md:py-3 flex-wrap bg-glass"
          className={`relative flex items-center justify-between gap-1 md:gap-16 px-2 py-2 md:px-4 md:py-3 flex-wrap${!toPhone ? ' bg-glass' : ''}`}
        >

          {/* Logo */}
          <div className="Logo md:flex md:items-center md:gap-12">
            <Link to="/" className="block">
              <span className="sr-only">Home</span>
              <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z" fill="currentColor" />
              </svg>
            </Link>
          </div>

          {/* Navbar__1 */}
          <div className={`hidden md:block ${isMenuOpen ? '!block' : 'hidden'}`}>
            <nav ref={refMenu} aria-label="Global" className="">
              <ul className="">{/* flex items-center gap-6 text-sm */}
                {N1_links.map((link) => (
                  <li key={link.to}>
                    {/* <Link to={link.href} className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"> */}
                    <NavLink to={link.to}
                    className={({isActive}) => isActive ? 'active' : ''}
                    onClick={handleClickItem}> <span>{t('header.' + link.label)}</span> </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Navbar__2 */}
          <div className="flex items-center gap-4">
          {user ? (
              <div className="flex items-center space-x-4">
                {/* <div>
                  <Link to="/dashboard">
                    <Button variant="secondary" size="sm" className="flex items-center">
                      <ChartBarIcon className="w-5 h-5 mr-1.5" />
                      {t('navigation.dashboard')}
                    </Button>
                  </Link>
                </div> */}
                <div>
                  {/* <Button variant="danger" size="sm" onClick={handleLogout} className="btn__login flex items-center"> */}
                  <Button variant="destructive" size="sm" onClick={handleLogout} className="btn__login flex items-center">
                    <ArrowRightOnRectangleIcon className="w-5 h-5 me-[0.2em] rtl:-rotate-180" />
                    {t('auth.logout')}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex gap-1 md:gap-4">
              <Link
                className="btn__login rounded-md px-5 py-2.5 text-sm font-medium shadow-sm"
                to="/login"

              >
                {t('header.signIn')}
              </Link>

              {/* <Link
                className="btn__register rounded-md px-5 py-2.5 text-sm font-medium shadow-sm"
                to="/register"
                
              >
                Register
              </Link> */}
            </div>
            )}


            {/* btn toggle menu */}
            <div className="block md:hidden">
              <button
                ref={refBtnToggleMenu}
                className="btn__toggle_menu rounded-md p-2 transition"
                onClick={handleClickToggleMenu} // إضافة معالج الحدث
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
        {toPhone && <><hr /></>}

      </div>
    </header>
  );
};