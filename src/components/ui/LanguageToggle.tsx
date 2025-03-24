import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageIcon } from '@heroicons/react/24/outline';

export let htmlDir = 'ltr';

export const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    
    // تحديث اتجاه الصفحة
    htmlDir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = htmlDir;
    document.documentElement.lang = newLang;
    
    // حفظ تفضيل اللغة
    localStorage.setItem('preferredLanguage', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center justify-center p-2 rounded-lg hover:text-white
                bg-glass hover:bg-white/10
                transition-all duration-200 hover:scale-105"
      title={i18n.language === 'ar' ? 'English' : 'العربية'}
    >
      <LanguageIcon className="w-5 h-5" />
    </button>
  );
};
