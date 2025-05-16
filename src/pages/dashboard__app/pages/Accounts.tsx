import { TabControl, TabItems, useTranslation } from "@/utils/alias";
import { FaUserFriends, FaTruckLoading, FaUsersRectangle, FaCashRegister, FaShippingFast } from "@/utils/alias-Image-Icons";

export function Accounts() {
  const { t } = useTranslation();
  
  const tabs: TabItems = [
    { id: '201', label: t('dashboard__app.accounts.customers'), icon: <FaUserFriends className="size-[1em] md:size-[1.5em]"/>, content: <AccountsContent type= { t('dashboard__app.accounts.customers') } /> },
    { id: '202', label: t('dashboard__app.accounts.suppliers'), icon: <FaTruckLoading className="size-[1em] md:size-[1.5em]"/>, content: <AccountsContent type= { t('dashboard__app.accounts.suppliers') } /> },
    { id: '203', label: t('dashboard__app.accounts.employees'), icon: <FaUsersRectangle className="size-[1em] md:size-[1.5em]"/>, content: <AccountsContent type= { t('dashboard__app.accounts.employees') } /> },
    { id: '204', label: t('dashboard__app.accounts.safety_drawer'), icon: <FaCashRegister className="size-[1em] md:size-[1.5em]"/>, content: <AccountsContent type= { t('dashboard__app.accounts.safety_drawer') } /> },
    { id: '205', label: t('dashboard__app.accounts.shipping_bag'), icon: <FaShippingFast className="size-[1em] md:size-[1.5em]"/>, content: <AccountsContent type= { t('dashboard__app.accounts.shipping_bag') } /> },
    ];

  return (
    <>
      <TabControl tabs={tabs} className="tab_1 reverse md:flex-col"/>
    </>
  );
}

/// Content Components ====================================================

function AccountsContent({ type }: { type: string }) {
  const { t } = useTranslation();
  
  return (
    <div className="">
    {(false) && <h2 className="text-xl font-semibold mb-4">{ t('dashboard__app.accounts.title').replace('ال', '') } { type }</h2>}
      <CustomersDashboard/>
    </div>
  );
}





// Content Components ====================================================

import React, { useState, useEffect } from 'react';
import './CustomersDashboard.scss';

// أنواع البيانات
interface Transaction {
  id: number;
  balance: number;
  transactionType: 1 | 2 | 3;
  details: string;
  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  avatar: string;
  accounts: Transaction[];
  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
}

const CustomersDashboard: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // تحميل البيانات (في الواقع سيكون من API)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_URL = 
        // process.env.REACT_APP_API_URL ||
        'https://test-server-express-backend.vercel.app';
        console.log('Fetching URL:', API_URL);  // تأكد من أن المسار صحيح
        // هنا نستخدم البيانات التي أنشأناها سابقًا
        const res  = await fetch(API_URL + '/api/v1/customers'); // استبدل برابط API الحقيقي
        const data = await res .json();
        console.log(data);
        
        setCustomers(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    // لمحاكاة جلب البيانات
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  // حساب الإحصائيات
  // const totalCustomers = customers.length;
  // const totalBalance = customers.reduce((sum, customer) => {
  //   return sum + customer.accounts.reduce((acc, account) => acc + account.balance, 0);
  // }, 0);

  // تصفية العملاء حسب البحث
  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

  // تنسيق المبلغ
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP'
    }).format(amount);
  };

  // الحصول على نوع المعاملة
  // const getTransactionType = (type: number) => {
  //   switch (type) {
  //     case 1: return 'مدين';
  //     case 2: return 'دائن';
  //     case 3: return 'خصم';
  //     default: return 'غير معروف';
  //   }
  // };

  if (loading) {
    return <div className="loading">جاري تحميل البيانات...</div>;
  }

  return (
    <div className="customers-dashboard">


      {/* شريط البحث والتصفية */}
      <div className="controls-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="ابحث عن عميل..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <i className="fas fa-search"></i>
        </div>
      </div>

      {/* جدول العملاء */}
      <div className="customers-table-container">
        <table className="customers-table">
          <thead>
            <tr>
              <th>الصورة</th>
              <th>الاسم</th>
              <th>البريد الإلكتروني</th>
              <th>الهاتف</th>
              <th>المدينة</th>
              <th>إجمالي الرصيد</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => {
              const customerBalance = customer.accounts.reduce((sum, account) => sum + account.balance, 0);
              
              return (
                <tr key={customer.id}>
                  <td>
                    <img 
                      src={customer.avatar} 
                      alt={customer.name} 
                      className="customer-avatar"
                    />
                  </td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.city}</td>
                  <td className={customerBalance >= 0 ? 'positive' : 'negative'}>
                    {formatCurrency(customerBalance)}
                  </td>
                  <td>
                    <button className="action-btn view-btn">
                      <i className="fas fa-eye"></i> عرض
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersDashboard;