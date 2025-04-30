import { Link, login, msn, Spinner, useDispatch, useNavigate, User, useState, useTranslation } from "@/utils/alias";


export const Login = () => {
  
  const dispatch = useDispatch();
  const navigator = useNavigate();
  
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const handleSubmit = (e: React.FormEvent) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password); // Call API or Redux action
  };

  // --- --- --- --- --- --- --- --- --- 
  // Function to handle login (replace with API call)
  async function onLogin(username: string, password: string) {
    setIsLoading(true);
    try {
      if (!username || !password) {
        alert(t("auth.errors.requiredUsernameAndPassword"));
        return;
      }

      const response = await mockLoginApi({ 
        userName: username,
        password: password 
      });
        
console.log(response);


        // حفظ بيانات المستخدم في Redux
        dispatch(login({ user: response.user }));
        
        // عرض رسالة النجاح
        msn({ message: 'auth.loginSuccess', type: 'success' });
        // toast({ message: t('auth.loginSuccess'), type: 'success' });
        
        // الانتقال إلى لوحة التحكم
        navigator('/dashboard');
      } catch (error) {
console.error(error);

        // عرض رسالة الخطأ
        msn({ message: 'auth.loginError', type: 'error' });
        // toast({ message: t('auth.loginError'), type: 'error' });
        // console.error('Login error:', error);
      } finally { setIsLoading(false); }
    };
  // --- --- --- --- --- --- --- --- --- 
  
  return (
    <form onSubmit={onSubmit} className="w-full mt-4 space-y-6">

      <div className="space-y-3">
        <div className="flex flex-col w-full static ">
          <label
            htmlFor="input"
            className="text-[hsl(var(--color-primary))] text-xs font-semibold capitalize relative top-2 ms-[0.5em] px-[3px] bg-[hsl(var(--color-background))] w-fit"
          >
            {t('auth.email')}:
          </label>
          <input
            id="username"
            type="text"
            placeholder={t('auth.usernamePlaceholder') + '...'}
            name="input"
            className="border-[hsl(var(--color-primary))] input px-[10px] py-[11px] text-xs bg-[hsl(var(--color-background))] border-2 rounded-[0.5em] w-full focus:outline-none placeholder:text-black/25"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full static ">
          <label
            htmlFor="input"
            className="text-[hsl(var(--color-primary))] text-xs font-semibold capitalize relative top-2 ms-[0.5em] px-[3px] bg-[hsl(var(--color-background))] w-fit"
          >
            {t('auth.password')}:
          </label>
          <input
            id="password"
            type="password"
            placeholder={t('auth.passwordPlaceholder') + '...'}
            name="input"
            className="border-[hsl(var(--color-primary))] input px-[10px] py-[11px] text-xs bg-[hsl(var(--color-background))] border-2 rounded-[0.5em] w-full focus:outline-none placeholder:text-black/25"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
 
      <button type="submit" className="btn-1 mt-[1em] w-full rounded-md px-5 py-2.5 text-sm font-medium shadow-sm  flex items-center justify-center" disabled={isLoading}>
        {t('auth.signIn')}
        {isLoading && <Spinner />}
      </button>
      <div className="flex flex-col items-center justify-center gap-2 text-xs">
        {/* <label className="flex items-center cursor-pointer">
          <input
            className="mr-2 w-4 h-4"
            id="remember"
            name="remember"
            type="checkbox"
          />
          <span className="text-[hsl(var(--color-gray))] ms-1">{t('auth.rememberMe')}</span>
        </label> */}
        {/* <i/> */}
        <Link className="text-[hsl(var(--color-primary))] font-medium hover:underline" to="/forgot-password">{t('auth.forgotPassword')}</Link>

        <p className="flex justify-center space-x-1">
          <span className="me-1 text-[hsl(var(--color-gray))]"> {t('auth.not_Have_an_account')} </span>
          <Link className="text-[hsl(var(--color-primary))] hover:underline " to="/register">{t('auth.register.title')}</Link>
        </p>
        
      </div>
        
    </form>
  );
};

export default Login;





// ========== ========== ========== ========== ========== ========== ==========

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

// ========== ========== ========== ========== ========== ========== ==========

export const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isPhone = (value: string): boolean =>
  /^(\+?\d{1,3})?\d{9,14}$/.test(value); // يقبل دولي ومحلي

export const isUsername = (value: string): boolean =>
  /^[a-zA-Z0-9_.-]{3,20}$/.test(value); // من 3 إلى 20 حرفًا وأرقامًا

export const validateInput = (value: string): "email" | "phone" | "username" | "invalid" => {
  if (isEmail(value)) return "email";
  if (isPhone(value)) return "phone";
  if (isUsername(value)) return "username";
  return "invalid";
};

// ========== ========== ========== ========== ========== ========== ==========

export const Input: React.FC = () => {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [, setInputType] = useState<"email" | "phone" | "username" | "invalid">("username");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setUsername(value);

    const type = validateInput(value);
    setInputType(type);

    if (type === "invalid") {
      setError("⚠️ " + t("auth.invalidUsername"));
    } else {
      setError("");
    }
  };

  return (
    <div>
      <input
        id="username"
        type="text"
        placeholder={t("auth.usernamePlaceholder") + "..."}
        className="border-[hsl(var(--color-primary))] input px-[10px] py-[11px] text-xs bg-[hsl(var(--color-background))] border-2 rounded-[0.5em] w-full focus:outline-none placeholder:text-black/25"
        onChange={handleChange}
        value={username}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

