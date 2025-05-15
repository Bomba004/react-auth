import { useTheme } from '@/utils/alias';
import { SunIcon, MoonIcon, } from '@/utils/alias-Image-Icons';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      // className="inline-flex items-center justify-center p-2 rounded-lg  hover:text-white
      //           bg-white/5 hover:bg-white/10 backdrop-blur-lg
      //           transition-all duration-200 hover:scale-105"
      className="btn-bg-none"
      title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </button>
  );
};
