import { useState } from "react";
import type { ReactNode } from "react";
import "./TabsComponent.css";
import { TabsContext } from "../../context/TabsContext";
import { TabsHeader } from "./TabsHeader";
import TabsContent from "./TabsContent";

type TabsProps = {
  children: ReactNode;
};

function TabsList({ children }: { children: ReactNode }) {
  return <div className="tabs-list">{children}</div>;
}

export function Tabs({ children }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
}

// Compound Component Pattern
Tabs.List = TabsList;
Tabs.Tab = TabsHeader;
Tabs.Panel = TabsContent;
