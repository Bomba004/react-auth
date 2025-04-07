import {
  React, useState, useForm,
  useNavigate,

  useDispatch,
  User, login,

  useTranslation,
  motion,
  
  AtSymbolIcon, UserIcon,

  Password, SuperInput, Checkbox, Button,
  msn,
  Footer,
} from '@/utils/alias';

interface LoginForm {
  userName: string;
  password: string;
  rememberMe: boolean;
}

// محاكاة API للتسجيل
const mockLoginApi = async (credentials: { userName: string; password: string }): Promise<{ success: boolean; user: User }> => {
  // تأخير لمحاكاة طلب الشبكة
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // التحقق من صحة بيانات الاعتماد
  if (credentials.userName === 'admin' && credentials.password === 'admin') {
    return { 
      success: true, 
      user: { 
        id: 1, 
        name: 'Admin User',
      } 
    };
  }
  // return { 
  //   success: false, 
  //   user: { id: 0, name: '' }
  // };
  throw new Error('Invalid credentials');

};

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  // const toast = useToast();

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    try {
      const response = await mockLoginApi({ 
        userName: data.userName, 
        password: data.password 
      });
      
      // حفظ بيانات المستخدم في Redux
      dispatch(login({ user: response.user }));
      
      // عرض رسالة النجاح
      msn({ message: 'auth.loginSuccess', type: 'success' });
      // toast({ message: t('auth.loginSuccess'), type: 'success' });
      
      // الانتقال إلى لوحة التحكم
      navigate('/dashboard');
    } catch (error) {
      // عرض رسالة الخطأ
      msn({ message: 'auth.loginError', type: 'error' });
      // toast({ message: t('auth.loginError'), type: 'error' });
      // console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
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

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* username */}
            <SuperInput
              TyP={{
                content: t('auth.errors.identifier'),
                type: 'error',
                targetSelector: '.IError'
              }}
              InputP={{
                type: 'text',
                placeholder: t('auth.usernamePlaceholder'),
                error: errors.userName?.message,
                firstChild: <AtSymbolIcon className="icon w-6.5 h-5 pe-2 border-inline-end border-black dark:border-white border-solid border-e-[0.1em]" />,
                ...register('userName', { required: t('auth.userNameRequired') })
              }}
            />
            
            {/* password */}
                        
            {/* password */}
            <Password
              TyP={{
                content: t('auth.errors.password'),
                type: 'error',
                targetSelector: '.IError'
              }}
              InputP={{
                type: 'password',
                placeholder: t('auth.passwordPlaceholder'),
                error: errors.password?.message,
                ...register('password', { required: t('auth.passwordRequired') })
              }}
            />
              
            {/* remember me */}
            <div className="flex items-center justify-between">
              <Checkbox
                label={t('auth.rememberMe')}
                {...register('rememberMe')}
              />
              <a href="#" className="text-primary hover:text-primary-light transition-colors">
                {t('auth.forgotPassword')}
              </a>
            </div>
            
            {/* submit button */}
            <Button type="submit" fullWidth isLoading={isLoading}>
              {t('auth.signIn')}
            </Button>

          </form>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};


export default Login;