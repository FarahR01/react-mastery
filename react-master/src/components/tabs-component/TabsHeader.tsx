import { useTabsContext } from "../../context/TabsContext";

type TabsHeaderProps = {
  index: number;
  children: React.ReactNode;
};

export function TabsHeader({ index, children }: TabsHeaderProps) {
  const { activeIndex, setActiveIndex } = useTabsContext();

  const isActive = activeIndex === index;

  return (
    <button
      className={`tabs-tab ${isActive ? "tabs-tab--active" : ""}`}
      onClick={() => setActiveIndex(isActive ? null : index)}
      role="tab"
      aria-selected={isActive}
    >
      {children}
    </button>
  );
}
