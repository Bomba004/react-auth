import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../ui/LanguageToggle';
import { ThemeToggle } from '../ui/ThemeToggle';
import clsx from 'clsx';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 p-1 lg:p-4 text-muted-06">
      <div className="container mx-auto max-w-7xl">
        <div className={clsx(
          'flex items-center justify-center gap-1 md:gap-16',
          'bg-glass rounded-xl px-1 py-1 md:px-4 md:py-3',
          'flex-wrap overflow-hidden',
          // 'max-h-[60px]',
        )}>
          <div className="hidden md:show md:invisible md:flex items-center space-x-2 ">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="flex justify-center items-center space-x-2 rtl:space-x-reverse w-full md:w-auto">
            <span>{t('footer.copyright')}</span>
            <span>{t('footer.allRightsReserved')}</span>
            <a
              href="https://bomba-001.github.io/BomBa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors mx-4"
            >
              {t('footer.bombaLink')}
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};
