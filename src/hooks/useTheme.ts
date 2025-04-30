import { useSelector, useDispatch,
   RootState, useEffect, toggleTheme } from '@/utils/alias';

export const useTheme = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.theme === 'dark');
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  return {
    theme: isDark ? 'dark' : 'light',
    toggleTheme: () => dispatch(toggleTheme()),
  };

};
