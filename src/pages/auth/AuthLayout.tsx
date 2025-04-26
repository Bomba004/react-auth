  
  type AuthLayoutProps = {
    children_Is: string | undefined;
    children: React.ReactNode;
  }

  
  export const AuthLayout = ( { children_Is, children }: AuthLayoutProps ) => {
    return (
      <div className="flex flex-col items-center justify-center p-4">
      <Auth__hero/>
      <Auth__Form children_Is={children_Is} children={children} />
      </div>
    );
  };
  export default AuthLayout;
 
  /// =======================================================================
  
  export const Auth__hero = () => {
    const items = [
     {id: 1, image: '/docs/images/carousel/carousel-1.svg'},
     {id: 2, image: '/docs/images/carousel/carousel-2.svg'},
     {id: 3, image: '/docs/images/carousel/carousel-3.svg'},
     {id: 4, image: '/docs/images/carousel/carousel-4.svg'},
     {id: 5, image: '/docs/images/carousel/carousel-5.svg'},
    ]
    return <div className="hidden md:block ">
      {/* <h1>Hero</h1> */}
      
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
          {/* <!-- Carousel wrapper --> */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {
                items.map(item => (
                  <div key={item.id} className="hidden duration-700 ease-in-out" data-carousel-item>
                    <p className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" /* alt="..." */>
                      {item.image}
                    </p>
                  </div>
                ))
              }    
          </div>
  
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {items.map(item => (
                <button type="button" className="w-3 h-3 rounded-full" aria-current={item.id === 1} aria-label={"Slide " + item.id} data-carousel-slide-to={item.id}></button>
              ))}
          </div>
          
          {/* <!-- Slider controls --> */}
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="sr-only">Next</span>
              </span>
          </button>
      </div>
  
    </div>
  };
  
  /// ------------------------------------------------------
  
  import {
    motion,
    UserIcon,
    useTranslation,
  } from '@/utils/alias';
  
  export const Auth__Form = ( { children_Is, children }: AuthLayoutProps ) => {
    const { t } = useTranslation();
  
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <div className="bg-glass rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex p-4 rounded-full bg-glass mb-4">
              <UserIcon className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold mb-2">{t('auth.welcomeBack')}</h2>
            <p className="text-muted-06">{t('auth.loginDescription')}</p>
          </div>
         
          {children_Is?? <></>}
          
          {children}
          
        </div>
      </motion.div>
    );
  };