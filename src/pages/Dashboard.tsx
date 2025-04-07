import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon,
} from '@heroicons/react/24/outline';
import { RootState } from '../store';
import { Footer, Navbar } from '@/utils/alias';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-glass rounded-xl p-6 flex items-center space-x-4 rtl:space-x-reverse ${color}`}
  >
    <div className="p-3 rounded-lg bg-white/10">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-medium text-muted-06">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  </motion.div>
);

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => state.auth.user);

  const stats = [
    {
      title: t('dashboard.totalUsers'),
      value: '1,234',
      icon: <UsersIcon className="w-6 h-6" />,
      color: 'text-blue-500',
    },
    {
      title: t('dashboard.activeProjects'),
      value: '12',
      icon: <ChartBarIcon className="w-6 h-6" />,
      color: 'text-green-500',
    },
    {
      title: t('dashboard.pendingTasks'),
      value: '48',
      icon: <DocumentTextIcon className="w-6 h-6" />,
      color: 'text-yellow-500',
    },
    {
      title: t('dashboard.systemHealth'),
      value: '98%',
      icon: <CogIcon className="w-6 h-6" />,
      color: 'text-purple-500',
    },
  ];

  return (
    <>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold mb-2"
          >
            {t('dashboard.welcome', { name: user?.name })}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-06"
          >
            {t('dashboard.overview')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-glass rounded-xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">{t('dashboard.recentActivity')}</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <UsersIcon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{t('dashboard.activityTitle')}</p>
                        <p className="text-sm text-muted-06">{t('dashboard.activityTime')}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-06">2h ago</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-glass rounded-xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">{t('dashboard.quickActions')}</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: t('dashboard.newProject'), icon: <DocumentTextIcon className="w-6 h-6" /> },
                { title: t('dashboard.addUser'), icon: <UsersIcon className="w-6 h-6" /> },
                { title: t('dashboard.analytics'), icon: <ChartBarIcon className="w-6 h-6" /> },
                { title: t('dashboard.settings'), icon: <CogIcon className="w-6 h-6" /> },
              ].map((action, index) => (
                <button
                  key={index}
                  className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center justify-center space-y-2"
                >
                  <div className="p-3 rounded-full bg-primary/20">
                    {action.icon}
                  </div>
                  <span className="text-sm font-medium">{action.title}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
