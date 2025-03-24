import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExclamationTriangleIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

interface ErrorPageProps {
  title?: string;
  message?: string;
  showHomeButton?: boolean;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  title = 'Error 403',
  message = 'You do not have permission to access this page',
  showHomeButton = true,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md text-center"
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 shadow-2xl border border-white/20">
          <div className="flex justify-center mb-6">
            <ExclamationTriangleIcon className="w-16 h-16 text-warning-color" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/70 mb-8">{message}</p>
          {showHomeButton && (
            <button
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center px-6 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              {t('navigation.backToDashboard')}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
