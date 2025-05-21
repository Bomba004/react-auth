/* p:0.1.r2
   p:3[Dashboard__App] - TC[Accounts] - TC[Customers__Dashboard]
------------------------------------------------------*/
import React, { useState, useEffect } from 'react';
import { Alert, SearchFilterBar } from "@/utils/alias";
import { ICustomer } from "@/utils/type";
import './Customers__Dashboard.scss';


// src/components/common/SearchFilterBar.tsx
/// Content Components 
import { AccountsCard } from "@/components/dashboard/AllCard";
///-----------------------------------------------------

const Customers__Dashboard: React.FC = () => {

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
        const data = await res.json();
        console.log(data);
        setData(data.data);
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

  
  const [data, setData] = useState<ICustomer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // حساب الإحصائيات
  const totalCustomers = data.length;
  const totalBalance = data.reduce((sum, customer) => {
    return sum + customer.accounts.reduce((acc, account) => acc + account.balance, 0);
  }, 0);

  // const { t } = useTranslation();

  // تصفية حسب البحث
  const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredData = data.filter((D) =>
    D.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    D.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    D.phone.includes(searchTerm)
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

  if (loading) { return <section className="loading">جاري تحميل البيانات...</section>; }

  return (
    // className="flex flex-col" 
    <>
      {/* شريط البحث والتصفية */}
      <SearchFilterBar value={searchTerm} onChange={setSearchTerm} />

      {/* شريط العنوان والإحصائيات */}
      <Alert className="info" btnClose={true}>
        {/* <FaUsersRectangle className="alert__icon size-[2em]"/> */}
        <div className="w-full flex justify-evenly items-center gap-2">
          <p className="total">إجمالي العملاء <span className="Box">{totalCustomers}</span></p>
          <hr className="horizontal" />
          <p className="total">إجمالي الأرصدة <span className="Box">{formatCurrency(totalBalance)}</span></p>
        </div>
      </Alert>

        
      {/* جدول العملاء */}
      <div className="customers-table-container flex-1 overflow-auto">
        {filteredData.map(customer => ( <AccountsCard data={customer} /> ))}

        {/* <table className="customers-table">
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
        </table> */}
      </div>
    </>
  );
};

export default Customers__Dashboard;