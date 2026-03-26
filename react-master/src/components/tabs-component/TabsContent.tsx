import { useTabsContext } from "../../context/TabsContext";

type TabsContentProps = {
  index: number;
  children: React.ReactNode;
};

function TabsContent({ index, children }: TabsContentProps) {
  const { activeIndex } = useTabsContext();

  if (activeIndex !== index) {
    return null;
  }
  return <div className="tabs-panel">{children}</div>;
}

export default TabsContent;
