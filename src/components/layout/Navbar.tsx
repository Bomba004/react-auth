import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { RootState, AppDispatch } from '../../store';
import { logout } from '../../store/slices/authSlice';
import { setLanguage } from '../../store/slices/languageSlice';
import { Button } from '../ui/Button';
import {
  UserIcon,
  ArrowRightOnRectangleIcon,
  LanguageIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);
  const { currentLanguage } = useSelector((state: RootState) => state.language);

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'ar' ? 'en' : 'ar';
    dispatch(setLanguage(newLang));
    i18n.changeLanguage(newLang);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md border-b border-neutral-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-xl font-bold text-primary-color hover:text-primary-color-dark transition-colors duration-normal"
            >
              <UserIcon className="w-8 h-8" />
              <span>BSSM Auth</span>
            </Link>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center px-3 py-1.5 rounded-md bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors duration-normal"
            >
              <LanguageIcon className="w-5 h-5 mr-1.5" />
              {currentLanguage === 'ar' ? 'EN' : 'عربي'}
            </motion.button>

            {user ? (
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Link to="/dashboard">
                    <Button variant="secondary" size="sm" className="flex items-center">
                      <ChartBarIcon className="w-5 h-5 mr-1.5" />
                      {t('navigation.dashboard')}
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Button variant="danger" size="sm" onClick={handleLogout} className="flex items-center">
                    <ArrowRightOnRectangleIcon className="w-5 h-5 mr-1.5" />
                    {t('auth.logout')}
                  </Button>
                </motion.div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Link to="/login">
                    <Button variant="primary" size="sm" className="flex items-center">
                      <UserIcon className="w-5 h-5 mr-1.5" />
                      {t('auth.login')}
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Link to="/register">
                    <Button variant="secondary" size="sm" className="flex items-center">
                      <UserIcon className="w-5 h-5 mr-1.5" />
                      {t('auth.register')}
                    </Button>
                  </Link>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
