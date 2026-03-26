import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type TabsContextType = {
  activeIndex: number | null;
  setActiveIndex: Dispatch<SetStateAction<number | null>>;
};

export const TabsContext = createContext<TabsContextType | null>(null);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within a <Tabs> component");
  }
  return context;
}
