/* p:0.1.r2
   p:3[Dashboard__App] - TC[Accounts]
------------------------------------------------------*/
import { TabControl, TabItems, useTranslation } from "@/utils/alias";
import { FaUserFriends, FaTruckLoading, FaUsersRectangle, FaCashRegister, FaShippingFast } from "@/utils/alias-Image-Icons";

/// Content Components 
import Customers__Dashboard from "./Customers__Dashboard";
///------------------------------------------------------

export function Accounts() {
  const { t } = useTranslation();
  
  const tabs: TabItems = [
    { id: '201', label: t('dashboard__app.accounts.customers'), icon: <FaUserFriends className="size-[1em] md:size-[1.5em]"/>, content: <Customers__Dashboard /> },
    { id: '202', label: t('dashboard__app.accounts.suppliers'), icon: <FaTruckLoading className="size-[1em] md:size-[1.5em]"/>, content: <Customers__Dashboard /> },
    { id: '203', label: t('dashboard__app.accounts.employees'), icon: <FaUsersRectangle className="size-[1em] md:size-[1.5em]"/>, content: <Customers__Dashboard /> },
    { id: '204', label: t('dashboard__app.accounts.safety_drawer'), icon: <FaCashRegister className="size-[1em] md:size-[1.5em]"/>, content: <Customers__Dashboard /> },
    { id: '205', label: t('dashboard__app.accounts.shipping_bag'), icon: <FaShippingFast className="size-[1em] md:size-[1.5em]"/>, content: <Customers__Dashboard /> },
    ];

  return (
    <>
      <TabControl tabs={tabs} className="tab_1 reverse md:flex-col"/>
    </>
  );
}

/// Content Components ====================================================

// function AccountsContent({ type }: { type: string }) {
//   const { t } = useTranslation();  
//   return (
//     <div className="">
//     {(false) ?
//       <h2 className="text-xl font-semibold mb-4">{ t('dashboard__app.accounts.title').replace('ال', '') } { type }</h2>
//       : <></>}
//       <Customers__Dashboard/>
//     </div>
//   );
// }

export default Accounts;




