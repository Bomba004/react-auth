import { useState } from 'react';
import { Button,
  Card, CardContent,
  //  CardHeader, CardTitle
 } from "@/utils/alias";
import { FileText, Users, Warehouse, PieChart } from 'lucide-react';

type TabItem = {
  id: string;
  label: string;
  icon?: JSX.Element;
  content?: React.ReactNode;
  children?: TabItem[];
};

export default function BomBa() {
  return <NestedTabs />;
}


// ========== ========== ========== ========== ========== ========== ========== ========== 


export function NestedTabs() {
  const [activeTabs, setActiveTabs] = useState < string | null > ('101');

  const tabsData: TabItem[] = [
    {
      id: '1',
      label: 'Invoices',
      icon: <FileText className="w-4 h-4 mr-2" />,
      children: [
        { id: '101', label: 'Sale', content: <InvoiceContent type="Sale" /> },
        { id: '102', label: 'Purchase', content: <InvoiceContent type="Purchase" /> },
        { id: '103', label: 'Sale Return', content: <InvoiceContent type="Sale Return" /> },
        { id: '104', label: 'Purchase Return', content: <InvoiceContent type="Purchase Return" /> },
        { id: '105', label: 'Damaged', content: <InvoiceContent type="Damaged" /> },
        { id: '106', label: 'Transfer', content: <InvoiceContent type="Transfer" /> },
        { id: '107', label: 'Invoice Reports', content: <InvoiceContent type="Reports" /> }
      ]
    },
    {
      id: '2',
      label: 'Accounts',
      icon: <Users className="w-4 h-4 mr-2" />,
      children: [
        {
          id: '201',
          label: 'Customers',
          children: [
            { id: '20101', label: 'Data', content: <AccountContent type="Customers Data" /> },
            { id: '20102', label: 'Transactions', content: <AccountContent type="Customers Transactions" /> }
          ]
        },
        {
          id: '202',
          label: 'Suppliers',
          children: [
            { id: '20201', label: 'Data', content: <AccountContent type="Suppliers Data" /> },
            { id: '20202', label: 'Transactions', content: <AccountContent type="Suppliers Transactions" /> }
          ]
        },
        {
          id: '203',
          label: 'Employees',
          children: [
            { id: '20301', label: 'Data', content: <AccountContent type="Employees Data" /> },
            { id: '20302', label: 'Transactions', content: <AccountContent type="Employees Transactions" /> }
          ]
        },
        {
          id: '204',
          label: 'Banks',
          children: [
            { id: '20401', label: 'Data', content: <AccountContent type="Banks Data" /> },
            { id: '20402', label: 'Transactions', content: <AccountContent type="Banks Transactions" /> }
          ]
        }
      ]
    },
    {
      id: '3',
      label: 'Warehouses',
      icon: <Warehouse className="w-4 h-4 mr-2" />,
      children: [
        { id: '301', label: 'Current Stock', content: <WarehouseContent type="Current Stock" /> },
        { id: '302', label: 'Missing Items', content: <WarehouseContent type="Missing Items" /> },
        { id: '303', label: 'Required Items', content: <WarehouseContent type="Required Items" /> },
        { id: '304', label: 'Previous Inventory', content: <WarehouseContent type="Previous Inventory" /> }
      ]
    },
    {
      id: '4',
      label: 'Reports',
      icon: <PieChart className="w-4 h-4 mr-2" />,
      children: [
        { id: '401', label: 'Daily', content: <ReportContent type="Daily" /> },
        { id: '402', label: 'Weekly', content: <ReportContent type="Weekly" /> },
        { id: '403', label: 'Monthly', content: <ReportContent type="Monthly" /> },
        { id: '404', label: 'Annual', content: <ReportContent type="Annual" /> }
      ]
    }
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTabs(tabId);
    // setActiveTabs(prev => {
    //   const newState = { ...prev };
      
    //   if (level === 'level1') {
    //     newState.level2 = null;
    //     newState.level3 = null;
    //   } else if (level === 'level2') {
    //     newState.level3 = null;
    //   }
      
    //   newState[level] = tabId;
    //   return newState;
    // });
  };

  const renderTabContent = () => {
    const level1Tab = tabsData.find(tab => tab.id === activeTabs?.slice(0, 1));
    if (!level1Tab) return null;

    if (!activeTabs?.slice(0, 3) && level1Tab.content) { return level1Tab.content; }

    const level2Tab = level1Tab.children?.find(tab => tab.id === activeTabs?.slice(0, 3));
    if (!level2Tab) return null;

    if (!activeTabs?.slice(0, 6) && level2Tab.content) { return level2Tab.content; }

    const level3Tab = level2Tab.children?.find(tab => tab.id === activeTabs?.slice(0, 6));
    if (!level3Tab) return null;

    return level3Tab.content || <DefaultContent type={level3Tab.label} />;
  };

  return (
    // <Card className="w-full max-w-6xl mx-auto">
    <Card className="w-full mx-auto tap__content">
      {/* <CardHeader>
        <CardTitle className="text-2xl font-bold">Nested Tab System</CardTitle>
      </CardHeader> */}
      <CardContent>
        {/* Level 1 Tabs */}
        <div className="tap__control flex flex-wrap gap-1 mb-4">
          {tabsData.map((tab) => (
            <Button
              key={tab.id}
              // variant={activeTabs.level1 === tab.id ? 'default' : 'ghost'}
              onClick={() => handleTabClick(tab.id)}
              variant='ghost'
              className={`flex items-center ${activeTabs?.slice(0, 1) === tab.id ? 'active' : ''}`}
            >
              {tab.icon}
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Level 2 Tabs */}
        {activeTabs && (
          <div className="tap__control flex flex-wrap gap-1 mb-4">
            {tabsData
              .find(tab => tab.id === activeTabs?.slice(0, 1))
              ?.children?.map((tab) => (
                <Button
                  key={tab.id}
                  variant='ghost'
                  className={`flex items-center ${activeTabs?.slice(0, 3) === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
          </div>
        )}

        {/* Level 3 Tabs */}
        {activeTabs && (
          <div className="tap__control flex flex-wrap gap-1 mb-4">
            {tabsData
              .find(tab => tab.id === activeTabs?.slice(0, 1))
              ?.children?.find(tab => tab.id === activeTabs?.slice(0, 3))
              ?.children?.map((tab) => (
                <Button
                  key={tab.id}
                  variant='ghost'
                  className={`flex items-center ${activeTabs?.slice(0, 6) === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
          </div>
        )}

        {/* Content Area */}
        <div className="border rounded-lg p-6 min-h-[300px]">
          {renderTabContent() || (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a tab to view content
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Content Components
function InvoiceContent({ type }: { type: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{type} Invoices</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </div>
    </div>
  );
}

function AccountContent({ type }: { type: string }) {
  const [category] = type.split(' ');
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{type}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded p-4">
          <h3 className="font-medium mb-2">Manage {category}</h3>
          <div className="space-y-3">
            <Button className="w-full">Add New {category}</Button>
            <Button variant="outline" className="w-full">Import {category}</Button>
            <Button variant="outline" className="w-full">Export {category}</Button>
          </div>
        </div>
        <div className="border rounded p-4">
          <h3 className="font-medium mb-2">Recent {type}</h3>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <span>{category.substring(0, 3).toUpperCase()}-00{i}</span>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WarehouseContent({ type }: { type: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{type}</h2>
      <div className="border rounded p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium">Items List</h3>
          <div className="flex space-x-2">
            <Button variant="outline">Export</Button>
            <Button>Print</Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map(i => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">Item {i}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{i * 5}</td>
                  <td className="px-6 py-4 whitespace-nowrap">Shelf A-{i}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${type === 'Missing Items' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                      {type === 'Missing Items' ? 'Out of stock' : 'In stock'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ReportContent({ type }: { type: string }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{type} Reports</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded p-4">
          <h3 className="font-medium mb-2">Generate {type} Report</h3>
          <div className="space-y-3">
            <Button className="w-full">Generate {type} Report</Button>
            <Button variant="outline" className="w-full">Custom Date Range</Button>
          </div>
        </div>
        <div className="border rounded p-4 md:col-span-2">
          <h3 className="font-medium mb-2">Recent {type} Reports</h3>
          <div className="space-y-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <div>
                  <div className="font-medium">{type} Report #{i}</div>
                  <div className="text-sm text-gray-500">Generated on 2023-06-{10 + i}</div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">View</Button>
                  <Button variant="ghost" size="sm">Download</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DefaultContent({ type }: { type: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl font-semibold mb-2">{type}</h2>
      <p className="text-gray-500 mb-4">This is the {type.toLowerCase()} section content.</p>
      <Button>Manage {type}</Button>
    </div>
  );
}