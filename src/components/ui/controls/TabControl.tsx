import { useState } from "@/utils/alias";

export type TabItem = {
  id: string;
  label: string;
  icon?: JSX.Element;
  content?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export type TabItems = TabItem[];

export function TabControl({
  tabs,
  tabSelect,
  direction = "horizontal",
  className,
}: {
  tabs: TabItems;
  tabSelect?: string;
  direction?: "vertical" | "horizontal";
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState<string>(tabSelect || tabs[0]?.id || "");

  return (
    <article
      className={`size-full flex-1 overflow-hidden flex ${direction === "vertical" ? "flex-col-reverse" : "flex-col"
        } tabControl ${className || ""}`}
    >
      <TabController
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <hr />
      <TabContent tabs={tabs} activeTab={activeTab} />
    </article>
  );
}

/// =======================================================================

export function TabController({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: TabItems;
  activeTab: string;
  setActiveTab: (id: string) => void;
}) {
  return (
    <section className="flex justify-start tab__controller">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center px-4 py-2 border-b-2 ${activeTab === tab.id
            ? "active font-semibold"
            : "border-transparent btn-3"
            } ${tab.className || ""}`}
          disabled={tab.disabled}
        >
          {tab.icon && <i className="icon mr-1">{tab.icon}</i>}
          {tab.label && <span className="label">{tab.label}</span>}
        </button>
      ))}
    </section>
  );
}

export function TabContent({
  tabs,
  activeTab,
}: {
  tabs: TabItems;
  activeTab: string;
}) {
  return (
    <section className="flex-1 tab__content relative">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          style={{ display: tab.id === activeTab ? "block" : "none" }}
          // className="absolute bg2 size-full top-0 left-0"
          className="size-full overflow-hidden"
        >
          {tab.content}
        </div>
      ))}
    </section>
  );
}
