import { useLanguage} from "@/utils/alias";
import { LanguageIcon } from "@/utils/alias-Image-Icons";

export const LanguageToggle: React.FC = () => {
  const { lang, toggleLanguage   } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      // className="inline-flex items-center justify-center p-2 rounded-lg hover:text-white
      //           bg-glass hover:bg-white/10
      //           transition-all duration-200 hover:scale-105"
      className="btn-bg-none"
      title={lang === 'ar' ? 'English' : 'العربية'}
    >
      <LanguageIcon className="w-5 h-5" />
    </button>
  );
};







// import { LanguageIcon, useTranslation } from '@/utils/alias';

// export const LanguageToggle: React.FC = () => {
//   const { i18n } = useTranslation();

//   const toggleLanguage = () => {
//     const newLang = i18n.language === 'ar' ? 'en' : 'ar';
//     i18n.changeLanguage(newLang);
    
//     // حفظ تفضيل اللغة
//     // localStorage.setItem('preferredLanguage', newLang);
//   };

//   return (
//     <button
//       onClick={toggleLanguage}
//       className="inline-flex items-center justify-center p-2 rounded-lg hover:text-white
//                 bg-glass hover:bg-white/10
//                 transition-all duration-200 hover:scale-105"
//       title={i18n.language === 'ar' ? 'English' : 'العربية'}
//     >
//       <LanguageIcon className="w-5 h-5" />
//     </button>
//   );
// };
