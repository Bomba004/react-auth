
type AuthLayoutProps = {
  children_Is: string | undefined;
  children: React.ReactNode;
}


export const AuthLayout = ({ children_Is, children }: AuthLayoutProps) => {
  const items = [
    { id: 1, image: 'https://picsum.photos/800/600?random=1' },
    { id: 2, image: 'https://picsum.photos/800/600?random=2' },
    { id: 3, image: 'https://picsum.photos/800/600?random=3' },
    { id: 4, image: 'https://picsum.photos/800/600?random=4' },
    { id: 5, image: 'https://picsum.photos/800/600?random=5' },
  ];

  return (
    <div className="flex items-center justify-center h-[80%] p-4 gap-4">
      <Auth__Form children_Is={children_Is} children={children} />
      <hr className="hidden lg:block horizontal" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full h-full hidden lg:block flex-1"
      >
        <Slider items={items} timePlay={8000} />
      </motion.div>
    </div>
  );
};
export default AuthLayout;

/// =======================================================================

import {
  motion,
  Slider,
  UserGroupIcon,
  UserIcon,
  useTranslation,
} from '@/utils/alias';

export const Auth__Form = ({ children_Is, children }: AuthLayoutProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full max-w-md"
    >
      {/* <div className="bg-glass rounded-[0.5em] p-8 shadow-2xl"> */}
      <div className=" h-full bg-glass rounded-[0.5em] p-8">
        <div className="text-center mb-8">

          {children_Is === 'Login' ?
            <>
              <div className="inline-flex p-4 bg-glass-full mb-4  overflow-hidden">
                <UserIcon className="w-12 h-12 " />
              </div>
              <h2 className="text-3xl font-bold mb-2">{t('auth.login.h2')}</h2>
              <p className="text-muted-06">{t('auth.login.p1')}</p>
            </>
            :
            <>
              <div className="inline-flex p-4 bg-glass-full mb-4  overflow-hidden">
                <UserGroupIcon className="w-12 h-12 " />
              </div>
              <h2 className="text-3xl font-bold mb-2">{t('auth.register.h2')}</h2>
              <p className="text-muted-06">{t('auth.register.p1')}</p>
            </>
          }
        </div>

        {children}

      </div>
    </motion.div>
  );
};