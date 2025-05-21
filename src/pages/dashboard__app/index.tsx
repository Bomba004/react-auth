/* p:0.1.r2
   p:3[Dashboard__App]
------------------------------------------------------*/
import { FC } from 'react';
import { TabControl, TabItems, useTranslation } from '@/utils/alias';
import { FaUsersViewfinder, FiFileText, GrPieChart, MdWarehouse, FaUsersGear } from '@/utils/alias-Image-Icons';

/// Content Components 
import { Invoices } from './pages/Invoices';
import { Accounts } from './pages/Accounts';
import { Warehouses } from './pages/Warehouses';
import { Reports } from './pages/Reports';
import { Users } from './pages/Users';
///------------------------------------------------------

interface IDashboard__AppProps {
  className?: string;
  children?: React.ReactNode;
}

export const Dashboard__App: FC<IDashboard__AppProps> = () => {
  const { t } = useTranslation();
  
  const tabs: TabItems = [
    { id: '1', label: t('dashboard__app.invoices.title'), icon: <FiFileText className="size-[1.5em]"/>, content: <Invoices />, disabled: true },
    { id: '2', label: t('dashboard__app.accounts.title'), icon: <FaUsersViewfinder className="size-[1.5em]"/>, content: <Accounts /> },
    { id: '3', label: t('dashboard__app.warehouses.title'), icon: <MdWarehouse className="size-[1.5em]"/>, content: <Warehouses /> },
    { id: '4', label: t('dashboard__app.reports.title'), icon: <GrPieChart className="size-[1.5em]"/>, content: <Reports /> },
    { id: '5', label: t('dashboard__app.users.title'), icon: <FaUsersGear className="size-[1.5em]"/>, content: <Users /> },
  ];

  return (
    <>
      <hr />
      <TabControl tabs={tabs} tabSelect='5' className="tab_1 reverse md:flex-col"/>
    </>
  );
};

export default Dashboard__App;
