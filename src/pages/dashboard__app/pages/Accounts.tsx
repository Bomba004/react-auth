import { TabControl, TabItems, useTranslation, Alert } from "@/utils/alias";
import { FaUserFriends, FaTruckLoading, FaUsersRectangle, FaCashRegister, FaShippingFast, FaSearch, IoIosClose } from "@/utils/alias-Image-Icons";

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
    {(false) ?
      <h2 className="text-xl font-semibold mb-4">{ t('dashboard__app.accounts.title').replace('ال', '') } { type }</h2>
      : <></>}
      <CustomersDashboard/>
    </div>
  );
}


// Content Components ====================================================

import React, { useState, useEffect } from 'react';
import UserCard from "@/components/dashboard/UserCard";
import { ICustomer } from "@/utils/type";
import './CustomersDashboard.scss';


const CustomersDashboard: React.FC = () => {
  // const { t } = useTranslation();

  const [customers, setCustomers] = useState<ICustomer[]>([]);
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
        const data = await res.json();
        console.log(data);
        setCustomers(data.data);
        
        // const data2: ICustomer[] = [
        //   {
        //     "id": "682600aea9a2aeca2b2ea183",
        //     "name": "طارق عبدالعزيز",
        //     "address": "شارع طلعت حرب, قنا",
        //     "city": "طنطا",
        //     "country": "مصر",
        //     "email": "682600_aea_9_a_2_aeca_2_b_2_ea_183@bomba.com",
        //     "phone": "0155414689",
        //     "picture": "https://randomuser.me/api/portraits/women/5.jpg",
        //     "accounts": [
        //       {
        //         "id": "682600aeb6d1055d416ca578",
        //         "balance": 4991,
        //         "transactionType": 1,
        //         "details": "دفع فاتورة كهرباء",
        //         "updatedAt": "2020-03-20T07:39:53.100Z",
        //         "createdAt": "2019-06-26T05:43:28.890Z",
        //         "deletedAt": "2025-01-24T02:35:58.980Z"
        //       },
        //       {
        //         "id": "682600ae934922d696193bb5",
        //         "balance": 17872,
        //         "transactionType": 1,
        //         "details": "تحويل بنكي",
        //         "updatedAt": "2022-09-27T01:47:42.414Z",
        //         "createdAt": "2019-01-26T07:10:03.934Z",
        //         "deletedAt": null
        //       },
        //       {
        //         "id": "682600ae1e328b14931ac8af",
        //         "balance": 25318,
        //         "transactionType": 1,
        //         "details": "مرتب",
        //         "updatedAt": "2023-06-14T00:04:20.413Z",
        //         "createdAt": "2019-12-19T11:35:30.956Z",
        //         "deletedAt": null
        //       },
        //       {
        //         "id": "682600ae7013bf2c25d520e5",
        //         "balance": 2863,
        //         "transactionType": 1,
        //         "details": "قسط قرض",
        //         "updatedAt": "2020-01-29T13:51:03.398Z",
        //         "createdAt": "2019-08-17T12:41:15.987Z",
        //         "deletedAt": "2024-12-18T01:39:10.784Z"
        //       },
        //       {
        //         "id": "682600aea5512a02e3ae3990",
        //         "balance": -2497,
        //         "transactionType": 2,
        //         "details": "دفع فاتورة مياه",
        //         "updatedAt": "2020-07-07T02:03:50.647Z",
        //         "createdAt": "2019-09-30T17:25:39.786Z",
        //         "deletedAt": "2024-02-17T19:03:02.557Z"
        //       },
        //       {
        //         "id": "682600aebe340c9a6e9f7707",
        //         "balance": 604,
        //         "transactionType": 2,
        //         "details": "دفع فاتورة كهرباء",
        //         "updatedAt": "2022-07-22T05:17:40.166Z",
        //         "createdAt": "2018-08-05T15:26:00.680Z",
        //         "deletedAt": "2022-05-28T14:24:31.098Z"
        //       },
        //       {
        //         "id": "682600aebcc5370199bb36f7",
        //         "balance": -8425,
        //         "transactionType": 3,
        //         "details": "تحويل بنكي",
        //         "updatedAt": "2021-05-30T19:46:08.338Z",
        //         "createdAt": "2019-09-19T19:57:53.322Z",
        //         "deletedAt": null
        //       },
        //       {
        //         "id": "682600ae4f53b38fd541ce1f",
        //         "balance": -4012,
        //         "transactionType": 3,
        //         "details": "مكافأة",
        //         "updatedAt": "2021-05-24T11:01:52.527Z",
        //         "createdAt": "2018-05-19T23:27:20.356Z",
        //         "deletedAt": "2024-02-10T10:45:20.187Z"
        //       }
        //     ],
        //     "updatedAt": "2022-08-26T01:02:35.250Z",
        //     "createdAt": "2019-03-23T01:24:28.087Z",
        //     "deletedAt": "2021-12-09T03:37:00.294Z"
        //   },
        //   // {
        //   //   "id": "682600aec7714b79f938f83c",
        //   //   "name": "آمنة رمضان",
        //   //   "address": "شارع النصر, المنصورة",
        //   //   "city": "السويس",
        //   //   "country": "مصر",
        //   //   "email": "682600_aec_7714_b_79_f_938_f_83_c@bomba.com",
        //   //   "phone": "0106924613",
        //   //   "picture": "https://randomuser.me/api/portraits/men/47.jpg",
        //   //   "accounts": [
        //   //     {
        //   //       "id": "682600ae113e25578bfe49e2",
        //   //       "balance": 20684,
        //   //       "transactionType": 1,
        //   //       "details": "سحب من ماكينة الصراف الآلي",
        //   //       "updatedAt": "2021-07-08T12:10:04.028Z",
        //   //       "createdAt": "2019-05-01T15:40:08.559Z",
        //   //       "deletedAt": null
        //   //     },
        //   //     {
        //   //       "id": "682600aef264004d23402c8a",
        //   //       "balance": 12918,
        //   //       "transactionType": 1,
        //   //       "details": "سحب من ماكينة الصراف الآلي",
        //   //       "updatedAt": "2021-11-07T13:40:33.143Z",
        //   //       "createdAt": "2019-03-28T21:05:20.610Z",
        //   //       "deletedAt": null
        //   //     },
        //   //     {
        //   //       "id": "682600aeb2b7293ed008dbe1",
        //   //       "balance": 17327,
        //   //       "transactionType": 2,
        //   //       "details": "إيداع نقدي",
        //   //       "updatedAt": "2022-05-08T21:21:53.250Z",
        //   //       "createdAt": "2019-01-13T16:18:47.805Z",
        //   //       "deletedAt": "2024-10-29T11:33:04.372Z"
        //   //     },
        //   //     {
        //   //       "id": "682600ae020cab428b9f30b3",
        //   //       "balance": 6692,
        //   //       "transactionType": 1,
        //   //       "details": "دفع فاتورة كهرباء",
        //   //       "updatedAt": "2020-03-27T16:19:49.792Z",
        //   //       "createdAt": "2019-03-04T13:17:59.708Z",
        //   //       "deletedAt": "2021-03-26T01:47:13.239Z"
        //   //     },
        //   //     {
        //   //       "id": "682600aeced4a90f2016ecf3",
        //   //       "balance": -1237,
        //   //       "transactionType": 2,
        //   //       "details": "تحويل بنكي",
        //   //       "updatedAt": "2023-08-17T21:50:47.853Z",
        //   //       "createdAt": "2019-01-03T23:00:45.457Z",
        //   //       "deletedAt": "2021-10-21T21:56:51.322Z"
        //   //     },
        //   //     {
        //   //       "id": "682600ae2ee64691ffc52d39",
        //   //       "balance": 7558,
        //   //       "transactionType": 1,
        //   //       "details": "تحويل من عميل آخر",
        //   //       "updatedAt": "2023-07-12T22:54:34.453Z",
        //   //       "createdAt": "2019-04-05T04:40:53.936Z",
        //   //       "deletedAt": null
        //   //     },
        //   //     {
        //   //       "id": "682600ae0eb11c572fe8a7d0",
        //   //       "balance": -4650,
        //   //       "transactionType": 3,
        //   //       "details": "تحويل من عميل آخر",
        //   //       "updatedAt": "2020-05-22T00:44:54.899Z",
        //   //       "createdAt": "2018-12-23T08:45:04.337Z",
        //   //       "deletedAt": "2025-01-27T23:41:49.209Z"
        //   //     },
        //   //     {
        //   //       "id": "682600ae85da478a1e6ab757",
        //   //       "balance": 9344,
        //   //       "transactionType": 2,
        //   //       "details": "قسط قرض",
        //   //       "updatedAt": "2023-03-15T03:35:12.767Z",
        //   //       "createdAt": "2018-08-12T05:55:15.581Z",
        //   //       "deletedAt": "2024-09-08T19:20:33.454Z"
        //   //     }
        //   //   ],
        //   //   "updatedAt": "2020-08-09T00:18:04.879Z",
        //   //   "createdAt": "2018-04-28T11:47:40.602Z",
        //   //   "deletedAt": "2023-05-22T18:55:48.579Z"
        //   // },
        //   // {
        //   //   "id": "682600ae02936f66debf2873",
        //   //   "name": "آمنة عبدالغني",
        //   //   "address": "شارع الجيش, المنصورة",
        //   //   "city": "السويس",
        //   //   "country": "مصر",
        //   //   "email": "682600_ae_02936_f_66_debf_2873@bomba.com",
        //   //   "phone": "0117345093",
        //   //   "picture": "https://randomuser.me/api/portraits/women/77.jpg",
        //   //   "accounts": [
        //   //     {
        //   //       "id": "682600ae10971376ff47288b",
        //   //       "balance": -6672,
        //   //       "transactionType": 2,
        //   //       "details": "مرتب",
        //   //       "updatedAt": "2024-09-29T07:09:40.675Z",
        //   //       "createdAt": "2018-01-27T07:19:43.736Z",
        //   //       "deletedAt": null
        //   //     },
        //   //     {
        //   //       "id": "682600ae8cefb781fb1d3bac",
        //   //       "balance": 42259,
        //   //       "transactionType": 1,
        //   //       "details": "قسط قرض",
        //   //       "updatedAt": "2021-09-29T08:14:54.919Z",
        //   //       "createdAt": "2018-06-30T08:54:54.913Z",
        //   //       "deletedAt": null
        //   //     },
        //   //     {
        //   //       "id": "682600aeae05589403fe5075",
        //   //       "balance": 11637,
        //   //       "transactionType": 3,
        //   //       "details": "مرتب",
        //   //       "updatedAt": "2025-01-05T20:55:21.531Z",
        //   //       "createdAt": "2019-10-09T02:50:56.719Z",
        //   //       "deletedAt": "2022-02-25T03:13:53.531Z"
        //   //     },
        //   //     {
        //   //       "id": "682600ae2c6ecec03e35c66c",
        //   //       "balance": 9937,
        //   //       "transactionType": 1,
        //   //       "details": "إيداع نقدي",
        //   //       "updatedAt": "2024-10-20T07:31:31.197Z",
        //   //       "createdAt": "2019-02-09T07:14:15.406Z",
        //   //       "deletedAt": "2021-07-21T22:01:29.203Z"
        //   //     },
        //   //     {
        //   //       "id": "682600ae94d0f5be2ebab8b7",
        //   //       "balance": 14963,
        //   //       "transactionType": 2,
        //   //       "details": "خصم تأخير",
        //   //       "updatedAt": "2022-03-29T00:02:47.577Z",
        //   //       "createdAt": "2019-11-16T19:01:42.244Z",
        //   //       "deletedAt": "2024-05-25T00:19:11.371Z"
        //   //     },
        //   //     {
        //   //       "id": "682600aebd14d53114e26221",
        //   //       "balance": 40641,
        //   //       "transactionType": 1,
        //   //       "details": "قسط قرض",
        //   //       "updatedAt": "2021-09-20T07:24:10.920Z",
        //   //       "createdAt": "2018-01-12T22:13:24.446Z",
        //   //       "deletedAt": "2021-10-31T05:20:59.745Z"
        //   //     },
        //   //     {
        //   //       "id": "682600ae5f08c8168eceac46",
        //   //       "balance": -2031,
        //   //       "transactionType": 3,
        //   //       "details": "دفع فاتورة مياه",
        //   //       "updatedAt": "2023-01-16T23:53:39.069Z",
        //   //       "createdAt": "2018-05-17T23:10:23.125Z",
        //   //       "deletedAt": "2024-07-31T04:28:27.849Z"
        //   //     },
        //   //     {
        //   //       "id": "682600aef03fd95168c8a325",
        //   //       "balance": 12978,
        //   //       "transactionType": 3,
        //   //       "details": "دفع فاتورة مياه",
        //   //       "updatedAt": "2025-03-20T04:36:48.936Z",
        //   //       "createdAt": "2019-10-29T08:30:47.756Z",
        //   //       "deletedAt": null
        //   //     },
        //   //     {
        //   //       "id": "682600ae550327d76d576a6d",
        //   //       "balance": -6323,
        //   //       "transactionType": 2,
        //   //       "details": "دفع فاتورة كهرباء",
        //   //       "updatedAt": "2021-06-10T10:13:05.134Z",
        //   //       "createdAt": "2019-06-19T19:55:18.123Z",
        //   //       "deletedAt": "2024-11-11T22:01:04.230Z"
        //   //     },
        //   //     {
        //   //       "id": "682600ae13677c8f6ce14091",
        //   //       "balance": 3068,
        //   //       "transactionType": 3,
        //   //       "details": "قسط قرض",
        //   //       "updatedAt": "2024-05-04T05:12:31.425Z",
        //   //       "createdAt": "2018-08-04T12:19:41.144Z",
        //   //       "deletedAt": null
        //   //     },
        //   //     {
        //   //       "id": "682600ae977e9d9f91634668",
        //   //       "balance": -6458,
        //   //       "transactionType": 3,
        //   //       "details": "دفع فاتورة مياه",
        //   //       "updatedAt": "2023-06-10T19:21:27.243Z",
        //   //       "createdAt": "2019-11-18T18:39:53.103Z",
        //   //       "deletedAt": "2023-09-07T14:39:25.327Z"
        //   //     },
        //   //     {
        //   //       "id": "682600aed9f3e54facd23225",
        //   //       "balance": 30143,
        //   //       "transactionType": 1,
        //   //       "details": "سحب من ماكينة الصراف الآلي",
        //   //       "updatedAt": "2021-11-03T04:05:59.682Z",
        //   //       "createdAt": "2018-03-14T01:39:18.525Z",
        //   //       "deletedAt": "2021-05-19T21:20:23.914Z"
        //   //     },
        //   //     {
        //   //       "id": "682600aee43947f340c9585e",
        //   //       "balance": 17024,
        //   //       "transactionType": 1,
        //   //       "details": "قسط قرض",
        //   //       "updatedAt": "2020-01-28T01:30:46.726Z",
        //   //       "createdAt": "2018-01-17T17:48:36.481Z",
        //   //       "deletedAt": null
        //   //     }
        //   //   ],
        //   //   "updatedAt": "2024-03-09T01:28:52.179Z",
        //   //   "createdAt": "2018-01-24T10:55:38.478Z",
        //   //   "deletedAt": null
        //   // },
        // ];
        // setCustomers(data2);
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
  const totalCustomers = customers.length;
  const totalBalance = customers.reduce((sum, customer) => {
    return sum + customer.accounts.reduce((acc, account) => acc + account.balance, 0);
  }, 0);

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

  if (loading) { return <section className="loading">جاري تحميل البيانات...</section>; }

  return (
    <section className="customers-dashboard flex flex-col">
      
      {/* شريط البحث والتصفية */}
      <div className="field__container">
        <label htmlFor="input" className="field__label" >
          بحث:
          {/* {t('auth.email')}: */}
        </label>
        <input
          type="text"
          // placeholder={t('auth.usernamePlaceholder') + '...'}
          placeholder='بحث باسم العميل...'
          name="input"
          className="field__input"
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value);}}
        />

        {searchTerm && <button className="btn-none" onClick={() => {setSearchTerm('')}}><IoIosClose className="size-[1.3em]"/></button>}
        <button className="btn-none" onClick={() => {setSearchTerm(searchTerm)}}><FaSearch className="size-[1em]"/></button>
      </div>

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
        {filteredCustomers.map(customer => (
          <UserCard user={customer} />
        ))}
        
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
    </section>
  );
};

export default CustomersDashboard;




