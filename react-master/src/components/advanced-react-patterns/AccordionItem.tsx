import type { ReactNode } from "react";

export function AccordionItem({ children }: { children: ReactNode }) {
  return <div className="accordion-item">{children}</div>;
}
