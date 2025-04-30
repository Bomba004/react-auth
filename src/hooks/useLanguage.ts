import { setLanguage } from '@/store/slices/languageSlice';
import { useEffect, useSelector, useDispatch,
  useTranslation, RootState, toggleLanguage,
} from '@/utils/alias';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.language.currentLanguage);
  const lang = currentLang || i18n.language;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';


  useEffect(() => {
    dispatch(setLanguage(lang)); // ضبط اللغة عند تشغيل التطبيق

    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang, currentLang]);

  return {
    lang,
    dir,
    toggleLanguage: () => dispatch(toggleLanguage()),
  };
};







// import { useEffect, useTranslation } from '@/utils/alias';

// export const useDirection = () => {
//   const { i18n } = useTranslation();

//   useEffect(() => {
//     const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
//     const lang = i18n.language;
    
//     document.documentElement.dir = dir;
//     document.documentElement.lang = lang;
//   }, [i18n.language]);
// };
