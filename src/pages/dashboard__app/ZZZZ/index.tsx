import { List_Links, NavLink, Outlet, TList_Links } from '@/utils/alias';
// import { FileText, PieChart, Users, Warehouse } from 'lucide-react';
import { FC } from 'react';

interface IDashboard__AppProps {
  className?: string;
  children?: React.ReactNode;
}

export const Dashboard__App: FC<IDashboard__AppProps> = () => {
  return (
    <div className="h-full flex flex-col-reverse md:flex-col">
      <Dashboard__App__Navbar />
      <Dashboard__App__Navbar />
      {/* <hr /> */}
      <Outlet />
      {/* <h1 className={className}>Dashboard__App</h1> */}
    </div>
  );
};

export default Dashboard__App;


/// =======================================================================


export const Dashboard__App__Navbar: FC<IDashboard__AppProps> = () => {

  const N1_links: TList_Links[] = List_Links.filter((link) => 100 < link.id && link.id <= 200);

  // const nav: TNav[] = [
  //   { id: '1', to: '/invoices', label: 'Invoices', icon: <FileText className="w-4 h-4 mr-2" />, },
  //   { id: '2', to: '/accounts', label: 'Accounts', icon: <Users className="w-4 h-4 mr-2" />, },
  //   { id: '3', to: '/warehouses', label: 'Warehouses', icon: <Warehouse className="w-4 h-4 mr-2" />, },
  //   { id: '4', to: '/reports', label: 'Reports', icon: <PieChart className="w-4 h-4 mr-2" />, },
  // ]

  return <nav>
    <ul className={'flex gap-2 py-px ' + 'flex justify-center items-center'}>
      {
        N1_links.map((n) =>
        <li key={n.id} className='flex-1'>
          <NavLink to={n.to} 
          className={({isActive}) => `flex flex-col md:flex-row justify-center items-center md:gap-2 ${isActive ? 'active' : ''}`}
          >
            <i className="block size-[1em] text-[175%] ">{n.icon}</i>
            <span>{n.label}</span>
          </NavLink>
        </li>)
      }
    </ul>
  </nav>
}