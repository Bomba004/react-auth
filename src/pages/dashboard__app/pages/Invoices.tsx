

import { TabControl, TabItems, useTranslation } from "@/utils/alias";

export function Invoices() {
  const { t } = useTranslation();
  
  const tabs: TabItems = [
    { id: '101', label: t('dashboard__app.invoices.sale'), content: <InvoiceContent type= { t('dashboard__app.invoices.sale') } /> },
    { id: '102', label: t('dashboard__app.invoices.purchase'), content: <InvoiceContent type= { t('dashboard__app.invoices.purchase') } /> },
    { id: '103', label: t('dashboard__app.invoices.sale_return'), content: <InvoiceContent type= { t('dashboard__app.invoices.sale_return') } /> },
    { id: '104', label: t('dashboard__app.invoices.purchase_return'), content: <InvoiceContent type= { t('dashboard__app.invoices.purchase_return') } /> },
    { id: '105', label: t('dashboard__app.invoices.damaged'), content: <InvoiceContent type= { t('dashboard__app.invoices.damaged') } /> },
    { id: '106', label: t('dashboard__app.invoices.transfer'), content: <InvoiceContent type= { t('dashboard__app.invoices.transfer') } /> },
    { id: '107', label: t('dashboard__app.invoices.reports'), content: <InvoiceContent type= { t('dashboard__app.invoices.reports') } /> }
  ];

  return (
    <TabControl tabs={tabs} className="tab_1 reverse md:flex-col"/>
  );
}

/// Content Components ====================================================

function InvoiceContent({ type }: { type: string }) {
  const { t } = useTranslation();

  // console.log(1);
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">{ t('dashboard__app.invoices.title').replace('ال', '') } { type }</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded p-4">
          <h3 className="font-medium mb-2">Create New {type}</h3>
          <Button className="w-full">New {type} Invoice</Button>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-medium mb-2">Recent {type} Invoices</h3>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <span>INV-{type.substring(0, 3).toUpperCase()}-00{i}</span>
                <Button variant="ghost" size="sm">View</Button>
              </div>
            ))}
          </div>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-medium mb-2">{type} Statistics</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Today</span>
              <span>$1,230.00</span>
            </div>
            <div className="flex justify-between">
              <span>This Week</span>
              <span>$5,740.00</span>
            </div>
            <div className="flex justify-between">
              <span>This Month</span>
              <span>$23,850.00</span>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
