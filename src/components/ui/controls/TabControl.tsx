import { useState } from "@/utils/alias";

export type TabItem = {
  id: string;
  label: string;
  icon?: JSX.Element;
  content?: React.ReactNode;
  className?: string;
  className_tabContent?: string;
  disabled?: boolean;
};

export type TabItems = TabItem[];

export function TabControl({
  tabs,
  tabSelect,
  direction = "horizontal",
  className,
  className_tabContent,
}: {
  tabs: TabItems;
  tabSelect?: string;
  direction?: "vertical" | "horizontal";
  className?: string;
  className_tabContent?: string;
}) {
  const [activeTab, setActiveTab] = useState<string>(tabSelect || tabs[0]?.id || "");

  return (
    <article
      className={
        `${direction === "vertical" ? "flex-col-reverse" : "flex-col"}
        tab-control ${className || ""}`}
    >
      <TabController
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <hr />
      <TabContent tabs={tabs} activeTab={activeTab} className={className_tabContent} />
    </article>
  );
}

/// =======================================================================

// controller:-
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
    <section className="tab-controller">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`${activeTab === tab.id
            ? "active"
            : "btn-3"
            } ${tab.className || ""}`}
          disabled={tab.disabled}
        >
          {tab.icon && <i className="icon">{tab.icon}</i>}
          {tab.label && <span className="label">{tab.label}</span>}
        </button>
      ))}
    </section>
  );
}

// body|content:-
export function TabContent({
  tabs,
  activeTab,
  className,
}: {
  tabs: TabItems;
  activeTab: string;
  className?: string;
}) {
  return (
    <>
      {tabs.map((tab) => (
        <section
          key={tab.id}
          style={{ display: tab.id === activeTab ? "flex" : "none" }}
          className={"tab-content" + (className ? " " + className : "")}
        >
          {tab.content}
        </section>
      ))}
    </>
  );
}
