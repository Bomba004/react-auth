import { FC } from 'react';
import { TabControl, TabItems, useTranslation } from '@/utils/alias';
import { FaUsersViewfinder, FiFileText, GrPieChart, MdWarehouse } from '@/utils/alias-Image-Icons';

import { Invoices } from './pages/Invoices';
import { Accounts } from './pages/Accounts';

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
  ];

  return (
    <>
      <hr />
      <TabControl tabs={tabs} tabSelect='2' className="tab_1 reverse md:flex-col"/>
    </>
  );
};

export default Dashboard__App;








/// Content Components ====================================================

function Warehouses() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Warehouses</h2>
    </div>
  );
}

/// ------------------------------------------------------
function Reports() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Reports</h2>
    </div>
  );
}
/// ------------------------------------------------------