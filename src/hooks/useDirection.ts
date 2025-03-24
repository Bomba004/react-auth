import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useDirection = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    const lang = i18n.language;
    
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [i18n.language]);
};
