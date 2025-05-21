// Types:-







// #region { Accounts, Clients }
export interface IAddress {
  street: string;
  city: string;
  country: string;
}
export interface IUser {
  id: number|string;
  name: string
  email: string
  role: string
  avatar: string
  jobTitle: string
  phone: string
  address: IAddress
}
// export interface IUsers { users: IUser[] }
// #endregion

// #region { Accounts, Clients }

export interface IAccount {
  id: number;
  balance: number;
  transactionType: 1 | 2 | 3;
  details: string;
  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
}
export interface ICustomer {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  avatar: string;
  picture: string;
  accounts: IAccount[];
  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
}

// #endregion