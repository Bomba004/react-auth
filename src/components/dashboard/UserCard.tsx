import React from 'react';
import { ICustomer } from "@/utils/type";
import './UserCard.scss';
import { CiMenuKebab } from '@/utils/alias-Image-Icons';


interface UserCardProps {
  user: ICustomer;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  // حساب إجمالي الرصيد
  const totalBalance = user.accounts.reduce((sum, account) => sum + account.balance, 0);

  // تصنيف الحسابات حسب النوع
  // const incomeAccounts = user.accounts.filter(acc => acc.transactionType === 1);
  // const expenseAccounts = user.accounts.filter(acc => acc.transactionType === 2);
  // const otherAccounts = user.accounts.filter(acc => acc.transactionType === 3);

  // تنسيق التاريخ
  // const formatDate = (dateString: string) => {
  //   const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  //   return new Date(dateString).toLocaleDateString('ar-EG', options);
  // };

  return (
    <div className="user-card">

      <div className="user-card__header">
        <div className="user-card__avatar">
          <img src={user.picture} alt={user.name} />
        </div>
        <div className="user-card__info">
          <h3 className="text-wrap">{user.name}</h3>
          <p className="text-wrap user-card__location"
            data-text={`${user.address}, ${user.city}, ${user.country}`}>
            <i className="icon-location"></i> {user.address}, {user.city}, {user.country}
          </p>
          <p className="text-wrap user-card__contact" data-text={`${user.phone} | ${user.email}`}>
            <i className="icon-phone"></i> {user.phone} | <i className="icon-email"></i> {user.email}
          </p>
        </div>
        <div className={`user-card__balance ${totalBalance >= 0 ? 'positive' : 'negative'}`}>
          <span className="balance-label">{`--: ${'الرصيد الكلي'} :--`}</span>
          <span className={`text-wrap balance-amount`}>
            {totalBalance.toLocaleString('ar-EG')} ج.م
          </span>
        </div>
        <button
          // ref={refBtnToggleMenu}
          className="btn-primary"
          // onClick={handleClickToggleMenu} // إضافة معالج الحدث
        >
          <CiMenuKebab className="size-[1.25rem]"/>
        </button>
      </div>

      {/* <div className="user-card__details">
        <div className="user-card__section">
          <h4 className="section-title">الدخل</h4>
          <div className="accounts-grid">
            {incomeAccounts.map(account => (
              <div key={account.id} className="account-item income">
                <div className="account-details">
                  <span className="account-type">{account.details}</span>
                  <span className="account-date">{formatDate(account.updatedAt)}</span>
                </div>
                <div className="account-amount">+{account.balance.toLocaleString('ar-EG')} ج.م</div>
              </div>
            ))}
          </div>
        </div>

        <div className="user-card__section">
          <h4 className="section-title">المصروفات</h4>
          <div className="accounts-grid">
            {expenseAccounts.map(account => (
              <div key={account.id} className="account-item expense">
                <div className="account-details">
                  <span className="account-type">{account.details}</span>
                  <span className="account-date">{formatDate(account.updatedAt)}</span>
                </div>
                <div className="account-amount">-{Math.abs(account.balance).toLocaleString('ar-EG')} ج.م</div>
              </div>
            ))}
          </div>
        </div>

        <div className="user-card__section">
          <h4 className="section-title">معاملات أخرى</h4>
          <div className="accounts-grid">
            {otherAccounts.map(account => (
              <div key={account.id} className="account-item other">
                <div className="account-details">
                  <span className="account-type">{account.details}</span>
                  <span className="account-date">{formatDate(account.updatedAt)}</span>
                </div>
                <div className={`account-amount ${account.balance >= 0 ? 'positive' : 'negative'}`}>
                  {account.balance >= 0 ? '+' : ''}{account.balance.toLocaleString('ar-EG')} ج.م
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* <div className="user-card__footer">
        <span className="created-date">تم الإنشاء: {formatDate(user.createdAt)}</span>
        <span className="last-updated">آخر تحديث: {formatDate(user.updatedAt)}</span>
      </div> */}
    </div>
  );
};

export default UserCard;